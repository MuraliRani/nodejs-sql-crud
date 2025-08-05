module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define("Category", {
    CategoryID: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    }
  });

  return Category;
};
