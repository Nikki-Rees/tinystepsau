var tableName = sequelize.define('habits', {
    Category: {
        type: Sequelize.STRING
    },
    PhoneCode: {
        type: Sequelize.INTEGER
    },
    Capital: {
        type: Sequelize.STRING
    },
    IndependenceYear: {
        type: Sequelize.INTEGER
    },
},
    {
        freezeTableName: true // Model tableName will be the same as the model name instead of being pluralized
    });

// force: true will drop the table if it already exists
tableName.sync({ force: true }).then(function () {
    // Table created
    return tableName.create({
        Country: 'Afghanistan',
        PhoneCode: 93,
        Capital: 'Kabul',
        IndependenceYear: 1919
    });
});
