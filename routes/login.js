const express = require('express')
const router = express.Router()
const {User} = require('../models/userSchema')
const passport = require('passport')

router.get('/',(req,res)=>{
   res.render('login')
})

router.post('/',passport.authenticate("local",{successRedirect:'/profile', failureRedirect:'/register' , failureFlash:true}))




module.exports = router