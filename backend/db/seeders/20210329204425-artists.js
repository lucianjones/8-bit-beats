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
            { name: 'Led Zepplin' },
            { name: 'A$AP Rocky' },
            { name: 'Johnny Cash' },
            { name: 'Rick James' },
            { name: '50 Cent' },
            { name: 'Kanye West' }
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
