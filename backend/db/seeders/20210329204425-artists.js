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
        return queryInterface.bulkInsert('Artists', [
            { name: 'David Renda' },
            { name: 'David Fesliyan' },
            { name: 'Jim Hall' },
            { name: 'Nullsleep' },
            { name: 'Stephen Bennet' },
            { name: 'Captive Portal' },
            { name: 'sawsquarenoise' },
        ])
    },

    down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
    return queryInterface.bulkDelete('Artists', null, {});
    }
};
