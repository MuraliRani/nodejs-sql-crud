module.exports = (sequelize, DataTypes) => {
  const OrderDetail = sequelize.define("OrderDetail", {
    Quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
    }
  });

  return OrderDetail;
};
