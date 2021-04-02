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
            { name: 'No Album', artistId: 1 },
            { name: 'No Album', artistId: 2 },
            { name: 'Synth Kid-Elsewhere', artistId: 3 },
            { name: 'Unconditional Acceleration', artistId: 4 },
            { name: 'No Album', artistId: 5 },
            { name: 'Toy Sounds Vol. 1', artistId: 6 },
            { name: 'Dojokratos', artistId: 7}
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
