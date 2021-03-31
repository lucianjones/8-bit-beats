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

        return queryInterface.bulkInsert('Albums', [
            { name: 'Led Zepplin IV', artistId: 1 },
            { name: 'Long.Live.A$AP', artistId: 2 },
            { name: 'Best of Johnny Cash', artistId: 3 },
            { name: 'Best of Rick James', artistId: 4 },
            { name: 'Get Rich or Die Trying', artistId: 5 },
            { name: 'College Dropout', artistId: 6 }
        ],{})
    },

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Albums', null, {});
    }
};
