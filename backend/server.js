const express = require('express');
const cors = require('cors');
const bcrypt = require("bcrypt");
const uuid = require('uuid');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ express: true}));

const USERS = [];
const TOKENS = [];
const EVENTS = [];

let ID = 0;
const getId = () => {
  ID += 1;
  return ID;
};

const createTokenForUser = (user) => {
    const token = uuid.v4();
    const existingUserTokenPair = TOKENS.find(p => p.userId === user.id)
    if (existingUserTokenPair) {
        existingUserTokenPair.token = token;
    } else {
        TOKENS.push({
            userId: user.id,
            token,
        })
    }

    return token
}
app.post("/registration", (req, res) => {
    const { login, password } = req.body
    const salt = bcrypt.genSaltSync(13);
    console.log("Salt", salt);
    const hash = bcrypt.hashSync(password, salt);
    console.log("Salted Hash", hash);
  
    const existingUser = USERS.find((u) => u.login === login);
    if (existingUser) {
      res.status(401).json();
      return;
    }

    const user = {
      id: getId(),
      login: login,
      hash: hash,
      salt: salt,
    };
    USERS.push(user);
    const token = createTokenForUser(user)
    res.json({ token });
});


app.put("/login", (req, res) => {
    const { login, password } = req.body

    const user = USERS.find((u) => u.login === login);
    if (!user) {
      res.status(401).json();
      return;
    }
  
    const salt = user.salt
    const hash = bcrypt.hashSync(password, salt);
  
    if (hash !== user.hash) {
        res.status(401).json();
        return;
    }
    const token = createTokenForUser(user)
    res.json({ token });
});

const authMiddleware = (req, res, next) => {
    const token = req.get('Authorization')
    if (!token) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    const userIdTokenPair = TOKENS.find(p => p.token === token);
    if (!userIdTokenPair) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    const user = USERS.find(u => u.id = userIdTokenPair.userId)
    if (!user) {
        return res.status(401).json({ error: 'Unauthorized' })
    }

    req.user = user
    next()
}

app.post('/events', authMiddleware, (req, res) => {
    const eventData = {
        id: getId(),
        ...(req.body),
        organizer_id: req.user.id
    }
    EVENTS.push(eventData)
    res.json(eventData)
});

app.get('/events', authMiddleware, (req, res) => {
    return res.json(EVENTS)
})

app.put('/events/:id', authMiddleware, (req, res) => {
    const id = Number(req.params.id);
    const event = EVENTS.find(e => e.id === id)
    if (!event) {
        return res.status(404).send()
    }

    event.amountOfPlayers += 1;
    return res.json(event)
})
app.listen(3003, () => {
    console.log("🚀 Server is running on port 3003");
});