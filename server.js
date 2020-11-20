/* eslint-disable linebreak-style */
/* eslint-disable function-paren-newline */
/* eslint-disable linebreak-style */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable eol-last */
/* eslint-disable linebreak-style */
/* eslint-disable no-console */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable linebreak-style */
const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const logger = require('./middleware/logger');
const buttons = require('./Members');

const app = express();
const PORT = process.env.PORT || 5000;

// Handlebars Middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// init middleware
// app.use(logger);

// Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Homepage Route
app.get('/', (req, res) =>
    // eslint-disable-next-line implicit-arrow-linebreak
    res.render('index', {
        title: 'Members App',
        buttons,
    }),
);

// Set static folder
app.use(express.static(path.join(__dirname, 'public')));

// Buttons API Routes
app.use('/api/buttons', require('./routes/api/members'));

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));