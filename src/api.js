const express = require('express');
const authRouter = require('./routers/authRouter');
const userRouter = require('./routers/userRouter');
const categoryRouter = require('./routers/categoryRouter');
const blogPostRouter = require('./routers/blogPostRouter');
// ...

const app = express();

app.use(express.json());

app.use('/login', authRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', blogPostRouter);
// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
