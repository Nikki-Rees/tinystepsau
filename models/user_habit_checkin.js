/* eslint-disable prettier/prettier */
module.exports = (sequelize, DataTypes) => {
  const UserHabitCheckin = sequelize.define("UserHabitCheckin", {

    Checkin_date: DataTypes.DATE

  });

  UserHabitCheckin.associate = (models) => {

    UserHabitCheckin.belongsTo(models.UserHabits)

  };

  return UserHabitCheckin;
};