const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Url extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here            
        }
    };
    Url.init({
        urlId: DataTypes.STRING,
        originUrl: DataTypes.STRING,
        shortUrl: DataTypes.STRING,
        visits: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Url',
    });
    return Url;
};