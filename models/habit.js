module.exports = (sequelize, DataTypes) => {
  const Habit = sequelize.define("Habit", {
    // Giving the Habits model a name of type STRING
    type: DataTypes.STRING,
    activity: DataTypes.STRING,
    description: DataTypes.STRING,
    frequency: DataTypes.STRING
  });

  Habit.associate = (models) => {

    Habit.hasMany(models.User);
  };

  return Habit;
};
