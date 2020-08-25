module.exports = (sequelize, DataTypes) => {
    const UserHabits = sequelize.define("UserHabits", {

        Obvious_steps: DataTypes.STRING,
        Attractive_steps: DataTypes.STRING,
        Easy_steps: DataTypes.STRING,
        Satisfaction_steps: DataTypes.STRING
    });

    UserHabits.associate = (models) => {

        UserHabits.belongsTo(models.User)
        UserHabits.belongsTo(models.Habits)
        UserHabits.hasMany(models.UserHabitCheckin)

    };

    return UserHabits;
};