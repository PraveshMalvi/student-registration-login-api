const express = require('express')
const userModel = require('../models/UserModel')
const router = express.Router()
const jwt = require('../JWT')

router.post("/info",(request,response)=>
{
    jwt.authenticateToken(request,(data)=>{    
        if(data.status)
        {
          userModel.getUser(request.user,(result)=>{
              response.json(result)
          })
        }else{
          response.json({status:false,code:data.code})
        }
      })
})

module.exports = router