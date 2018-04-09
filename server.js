const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use('/', express.static(`${__dirname}/client/build`));

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client/public', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));