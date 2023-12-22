const express = require("express");
const port = 8000;
const app = express();
const ejs = require('ejs')
const passport = require('passport')
const { initializingPassport } = require("./passportConfig");
const expressSession = require("express-session")


//MongoDb connection
const {connectMongoose }  = require('./config/database')
connectMongoose();

initializingPassport(passport);

//To excess the data
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use(expressSession({secret:"secret" , resave: false, saveUninitialized:false}))
app.use(passport.initialize());
app.use(passport.session())


// View Engine setup
app.set("view engine",'ejs')



const loginRouter = require('./routes/login')
app.use('/',loginRouter);

const registerRouter = require('./routes/register');
app.use('/register',registerRouter);

const profileRouter = require('./routes/profile');
app.use('/profile',profileRouter);



app.listen(port,(error)=>{
    if(error){
        console.log(error)
    }
    console.log(`Server is successfully running on port: ${port}`)
})