const path = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3001;

app.use('/', express.static(`${__dirname}/client/build`));

// express will serve up index.html if it doesn't recognize the route
app.get('/*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });

app.listen(port, () => console.log(`Listening on port ${port}`));