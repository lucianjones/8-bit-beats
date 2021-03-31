'use strict';
module.exports = (sequelize, DataTypes) => {
    const Album = sequelize.define('Album', {
        name: DataTypes.STRING,
        artistId: DataTypes.INTEGER
    }, {});
    Album.associate = function (models) {
        Album.belongsTo(models.Artist, { foreignKey: 'artistId', onDelete: 'CASCADE', hooks: true });
        Album.hasMany(models.Song, { foreignKey: 'albumId' });
    };
    return Album;
};
