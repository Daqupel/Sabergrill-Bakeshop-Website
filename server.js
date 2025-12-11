const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

const usersRouter = require('./routes/userRoutes');

app.set('view engine', 'ejs');
app.set('views', './views');

app.use('/users', usersRouter);
app.get('/', (req, res) => {
});

app.get('/', (req, res) => {
  res.render('index', { pageTitle: 'Home' });
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
