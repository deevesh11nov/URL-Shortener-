const express = require('express')
const router = express.Router()
const {User} = require('../models/userSchema')

router.get('/',(req,res)=>{
   res.render('register')
})


router.post('/',async(req,res)=>{
   const user = await User.findOne({username:req.body.username});

   if(user) return res.status(400).send('User already exist')
   const newUser = await User.create(req.body)
   res.redirect('/')
})



module.exports= router