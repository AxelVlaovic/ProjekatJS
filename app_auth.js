const express = require('express');
const { sequelize, Users } = require('./models');
require('dotenv').config();
const bcrypt = require('bcrypt');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();

var corsOption = {

    origin:'http://localhost:7777',          
    optionSuccessStatus:200

}

app.use(express.json());
app.use(cors(corsOption));

app.post('/login',(req,res)=>{
                    
    Users.findOne({where:{username:req.body.username}})
        .then(row => {

            if(bcrypt.compareSync(req.body.password,row.password) && (row.isAdmin || row.isModerator)){

                const obj = {
                    userId : row.id,
                    username: row.username
                }

                const token = jwt.sign(obj,process.env.ACCESS_TOKEN_SECRET);
                res.json({token:token});
                
            }else{
                res.status(400).json({msg:'Invalid credentials'});
            }

        })
        .catch(err => res.status(500).json({msg:'Invalid credentials'}));

});

app.listen({port:8888},async() => {

    await sequelize.authenticate();
    console.log('Auth aplikacija');

});

