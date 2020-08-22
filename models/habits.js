module.exports = (sequelize, DataTypes) => {
    const Habits = sequelize.define("Habits", {
        // Giving the Habits model a name of type STRING
        type: DataTypes.STRING,
        activity: DataTypes.STRING,
        description: DataTypes.STRING,
        frequency: DataTypes.STRING
    });

    Habits.associate = (models) => {

        Habits.hasMany(models.UserHabits);
    };

    return Habits;
};
