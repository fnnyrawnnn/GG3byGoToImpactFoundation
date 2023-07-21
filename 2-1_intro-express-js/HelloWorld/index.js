const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
     res.send('Hello Fellazz!');
});

app.get('/about', (req, res) => {
     res.send('Hello About!');
});

app.listen(port, () => {
     console.log(`HelloWorld app listening on port ${port}`);
});