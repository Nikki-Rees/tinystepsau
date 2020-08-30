/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define("Checkin", {});

  Checkin.associate = (models) => {
    Checkin.belongsTo(models.User);
  };

  return Checkin;
};