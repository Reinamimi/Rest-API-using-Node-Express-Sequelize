require('dotenv').config() //loads .env files into process.env


// connect database

const Sequelize = require('Sequelize');
const sequelize = new Sequelize('test-DB', process.env.DB_USERNAME, process.env.DB_PASSWORD, 
{
    dialect: 'mysql',
    host: 'localhost',
    pool: {
        max: 5,
        min: 0,
        accquire: 30000,
        idle: 10000

    }
});


// creating an instance of database as an object

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.campaigns = require('../models/campaigns')(sequelize, Sequelize);

module.exports = db;