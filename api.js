const express = require('express');
const {sequelize} = require('./models');
const UserApi = require('./routes/Users');
const ActivitiyApi = require('./routes/Activities');
const Users_ActivitiesApi = require('./routes/Users_Activities');
const User_Suggestions = require('./routes/User_Suggestions');
const cors = require('cors');

const corsOption = {
    origin:'http://localhost:7777',
    optionSuccessStatus:200
}

const app = express();
app.use(cors(corsOption));

app.use('/admin',UserApi);
app.use('/admin',ActivitiyApi);
app.use('/admin',Users_ActivitiesApi);
app.use('/admin',User_Suggestions);

app.listen({port:5000},async() => {
    await sequelize.authenticate();
    console.log('Api aplikacija');
});

