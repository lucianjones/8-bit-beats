'use strict';

module.exports = {
    up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
        return queryInterface.bulkInsert('Songs', [
            { name: 'Black Dog', artistId: 1, albumId: 1, url: 'placeholer.nan', length: 180 },
            { name: 'Stairway to Heaven', artistId: 1, albumId: 1, url: 'placeholer.nan', length: 180 },
            { name: 'Goldie', artistId: 2, albumId: 2, url: 'placeholer.nan', length: 180 },
            { name: '1 Train', artistId: 2, albumId: 2, url: 'placeholer.nan', length: 180 },
            { name: 'Jodye', artistId: 2, albumId: 2, url: 'placeholer.nan', length: 180 },
            { name: 'Ring of Fire', artistId: 3, albumId: 3, url: 'placeholer.nan', length: 180 },
            { name: 'Man in Black', artistId: 3, albumId: 3, url: 'placeholer.nan', length: 180 },
            { name: 'Ricky', artistId: 4, albumId: 4, url: 'placeholer.nan', length: 180 },
            { name: 'In Da Club', artistId: 5, albumId: 5, url: 'placeholer.nan', length: 180 },
            { name: 'Through the Wire', artistId: 6, albumId: 6, url: 'placeholer.nan', length: 180 },
            { name: 'Spaceship', artistId: 6, albumId: 6, url: 'placeholer.nan', length: 180 }
        ])
    },

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
    }
};
