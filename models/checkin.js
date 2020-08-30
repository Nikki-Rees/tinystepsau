/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define("Checkin", {
    // date: DataTypes.STRING,
    test: DataTypes.STRING,
  });

  Checkin.associate = (models) => {

    Checkin.belongsTo(models.User);

  };

  return Checkin;
};