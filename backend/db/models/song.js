'use strict';
module.exports = (sequelize, DataTypes) => {
    const Song = sequelize.define('Song', {
        name: DataTypes.STRING,
        artistId: DataTypes.INTEGER,
        albumId: DataTypes.INTEGER,
        url: DataTypes.STRING,
        length: DataTypes.NUMERIC
    }, {});
    Song.associate = function (models) {
        Song.belongsTo(models.Artist, { foreignKey: 'artistId', onDelete: 'Cascade', hooks: true });
        Song.belongsTo(models.Album, { foreignKey: 'albumId', onDelete: 'Cascade', hooks: true });
    };
    return Song;
};
