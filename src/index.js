import express from 'express';
let app = express();
app.get('/', (req, res) => {
  res.send('Welcome');
});
app.listen(3000);
