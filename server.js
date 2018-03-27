const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 5000;

app.use('/', express.static(`${__dirname}/client/build`));

// express will serve up index.html if it doesn't recognize the route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

app.get('/hello', (req, res, next) => {
    res.send("Hello")
})

app.listen(port, () => console.log(`Listening on port ${port}`));