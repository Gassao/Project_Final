
const express=require('express')
const cors=require('cors')
require('./Server/config/DB');

const membersRouter = require('./Server/Routers/memberRouter')
const SubscriptionRouter = require('./Server/Routers/SubscriptionRouter')
const movieRouter = require('./Server/Routers/moviesRouter');


const app = express()
const port = 3089;
app.use((cors()));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/members', membersRouter);
app.use('/movies', movieRouter);
app.use('/Subscription', SubscriptionRouter);

app.listen(port, () => {
console.log(`app is listening at http://localhost:${port}`)
})

