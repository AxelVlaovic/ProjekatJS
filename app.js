const express = require('express');
const {sequelize} = require('./models');
const jwt = require('jsonwebtoken');
require('dotenv').config();
const path = require('path');
const Joi = require('joi');

const app = express();

function getCookies(req){

    if(req.headers.cookie == null) return {};

    const rawCookie = req.headers.cookie.split('; ');
    const parsedCookies = {};

    rawCookie.forEach(el => {
        
        const pc = el.split("=");
        parsedCookies[pc[0]] = pc[1]; 

    });

    return parsedCookies;

}; 

function authToken(req,res,next){

    const cookies = getCookies(req);
    const token = cookies['token'];

    if(token == null) return res.redirect(301,'/login');

    jwt.verify(token,process.env.ACCESS_TOKEN_SECRET,(err,user)=>{

        if(err) return res.redirect(301,'/login');

        req.user = user; 
        next();

    });
    
}

app.get('/',authToken,(req,res)=>{
    res.sendFile('index.html',{root:'./static'});
});

app.get('/login',(req,res)=>{
    res.sendFile('login.html',{root: './static'});
});

app.use(express.static(path.join(__dirname,'static'))); 

app.listen({port:7777},async()=>{

    await sequelize.authenticate();
    console.log('App aplikacija');

});

