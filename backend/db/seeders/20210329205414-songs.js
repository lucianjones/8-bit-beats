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
            { name: '8 Bit Retro', artistId: 1, albumId: 1, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/8_Bit_Retro_Funk-David_Renda.mp3' },
            { name: 'A Bit Of Hope', artistId: 2, albumId: 2, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/A_Bit_Of_Hope-David_Fesliyan.mp3' },
            { name: 'Arcade Kid', artistId: 1, albumId: 1, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Arcade_Kid-David_Renda.mp3' },
            { name: 'Chromatic', artistId: 3, albumId: 3, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Chromatic-Synth_Kid_Elsewhere-Jim_Hall.mp3' },
            { name: 'Fearless Flight', artistId: 4, albumId: 4, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Fearless_Flight-Unconditional_Acceleration-Nullsleep.mp3' },
            { name: 'Land of 8 Bits', artistId: 5, albumId: 5, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Land_of_8_Bits-Stephen_Bennett.mp3' },
            { name: 'Me As', artistId: 6, albumId: 6, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Me_As-Toy_Sounds_Vol.1-Captive+Portal.mp3' },
            { name: 'Retro Platforming', artistId: 2, albumId: 2, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Retro_Platforming-David_Fesliyan.mp3' },
            { name: 'Stage 1', artistId: 7, albumId: 7, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Stage_1-Dojokratos-sawsquarenoise.mp3' },
            { name: 'Stage 3', artistId: 7, albumId: 7, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Stage_3-Dojokratos-sawsquarenoise.mp3' },
            { name: 'Trapped In the Upside Down', artistId: 3, albumId: 3, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/Trapped_In_the_Upside_Down-Synth_Kid_Elsewhere-Jim_Hall.mp3' },
            { name: 'You Can Use', artistId: 6, albumId: 6, url: 'https://8bitbeats.s3.us-east-2.amazonaws.com/You_Can_Use-Toy_Sounds_Vol.1-Captive+Portal.mp3' }
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
