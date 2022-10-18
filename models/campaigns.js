// define and export the sequelize models (tables)

module.exports = ((sequelize, Sequelize)=> {
const campaign = sequelize.define('campaign', {
    id: {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull: false,
        primaryKey: true
    },
    title: {
        type : Sequelize.STRING,
        allowNull: false
    },
    target: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endDate: {
        type: Sequelize.STRING,
        allowNull: false
    }
});
    return campaign;
})