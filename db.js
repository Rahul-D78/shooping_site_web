const Sequelize = require('sequelize');
const db = new Sequelize('shopdb', 'shopper', 'shopps', {
    host: 'localhost',
    dialect: 'mysql',
    pool: {
        min: 0,
        max: 5,
    }
});

//create the items to put in our db
const User = db.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primarykey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false, 
    }
});

const Product = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primarykey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false 
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }
});

exports = module.exports = {
    User, Product
}