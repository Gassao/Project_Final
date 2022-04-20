
const express=require('express')
const cors=require('cors')
require('./Server/config/DB')

const port = 3005;
const app = express()

app.use((cors()));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



const authRouter = require("../Cinema/Server/Routers/authRouter");
app.use("/users",authRouter);

const usersJsonRouter=require( '../Cinema/Server/Routers/UserJsonRouter')
app.use("/usersJson",usersJsonRouter );



const memberRouter = require("../Cinema/Server/Routers/memberRouter");
app.use("/members",memberRouter);

const SubscriptionRouter = require("../Cinema/Server/Routers/SubscritionRouter");
app.use("/subscription",SubscriptionRouter);


const MovieRouter = require("../Cinema/Server/Routers/movieRouter");
app.use("/movies",MovieRouter);


app.listen(port, () => {
    console.log(`app is listening at http://localhost:${port}`)
})

