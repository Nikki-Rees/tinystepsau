/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
  const Checkin = sequelize.define("Checkin", {

    date: DataTypes.DATE

  });

  Checkin.associate = (models) => {

    Checkin.belongsTo(models.User)

  };

  return Checkin;
};