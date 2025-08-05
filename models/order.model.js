module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define("Order", {
    OrderID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    OrderDate: {
      type: DataTypes.DATE,
      allowNull: false,
    }
  });

  return Order;
};
