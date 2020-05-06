const express=require('express')
const router=express.Router()

require('./routes/product')(router)

module.exports=router