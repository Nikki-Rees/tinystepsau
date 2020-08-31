module.exports = sequelize => {
  const Checkin = sequelize.define("Checkin", {});

  Checkin.associate = models => {
    Checkin.belongsTo(models.User);
  };

  return Checkin;
};
