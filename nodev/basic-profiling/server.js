const express = require('express');
const crypto =require('crypto');
const app = express();

app.get('/', (req, res) => {


  res.send('Hello world');
})

let users = {};
app.get('/newUser', (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';
  try {
    username = username.replace(/[!@#$%^&*]/g, '');

    if (!username || !password || users[username]) {
      return res.sendStatus(400);
    }

    const salt = crypto.randomBytes(128).toString('base64');
    const hash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

    users[username] = { salt, hash };

    res.status(200).json(users);
  } catch(err) {
    console.log(err)
    res.status(500).json({ message: 'something wrong' + err.message })
  }
});

app.get('/auth', (req, res) => {
  let username = req.query.username || '';
  const password = req.query.password || '';

  username = username.replace(/[!@#$%^&*]/g, '');

  if (!username || !password || !users[username]) {
    return res.sendStatus(400);
  }

  const { salt, hash } = users[username];
  const encryptHash = crypto.pbkdf2Sync(password, salt, 10000, 512, 'sha512');

  if (crypto.timingSafeEqual(hash, encryptHash)) {
    res.sendStatus(200);
  } else {
    res.sendStatus(401);
  }
});

app.listen(3000, 'localhost', () => {
  console.log('server is running');
})


