const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Models
db.Customer = require('./customer.model')(sequelize, DataTypes);
db.Order = require('./order.model')(sequelize, DataTypes);
db.Product = require('./product.model')(sequelize, DataTypes);
db.Category = require('./category.model')(sequelize, DataTypes);
db.OrderDetail = require('./orderDetail.model')(sequelize, DataTypes);
db.User = require('./user.model')(sequelize, DataTypes); // existing user model

// Associations
db.Customer.hasMany(db.Order, { foreignKey: 'CustomerID' });
db.Order.belongsTo(db.Customer, { foreignKey: 'CustomerID' });

db.Category.hasMany(db.Product, { foreignKey: 'CategoryID' });
db.Product.belongsTo(db.Category, { foreignKey: 'CategoryID' });

db.Order.belongsToMany(db.Product, {
  through: db.OrderDetail,
  foreignKey: 'OrderID',
});
db.Product.belongsToMany(db.Order, {
  through: db.OrderDetail,
  foreignKey: 'ProductID',
});

// Composite primary key for OrderDetail is handled automatically by Sequelize

module.exports = db;












































/*
const { Sequelize, DataTypes } = require('sequelize');
const dbConfig = require('../config/db.config');

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect
});

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.users = require('./user.model')(sequelize, DataTypes);

module.exports = db;
*/
