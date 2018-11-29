'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {id: 1,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Abraham Azael Hernandez Hernandez',  dekids_coins:85, username:'AbrahamHdz', profile:'abraham.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 2,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Alexander Armenta Mejia',  dekids_coins:85, username:'AlexArmenta', profile:'alex.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 3,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Carlos Alejandro Padilla del Angel',  dekids_coins:85, username:'CarlosAle', profile:'carlosAle.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 4,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Carlo Raul Sanchez Flores',  dekids_coins:99, username:'CarloRaul', profile:'carloRaul.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 5,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Citlali Arilyn Hernandez Hernandez',  dekids_coins:89, username:'CitlaliHdz', profile:'citlati.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 6,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Dante Negrete Maiz',  dekids_coins:111, username:'DanteN', profile:'dante.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 7,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Damian Negrete Maiz',  dekids_coins:100, username:'DamianN', profile:'damian.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 8,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Diego Fernando Padilla Angel',  dekids_coins:89, username:'DiegoFer', profile:'diegoFer.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 9,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Diego Gonzales Martinez',  dekids_coins:94, username:'DiegoGonz', profile:'diegoGonzales.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 10,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Emilio Ribelles Marin',  dekids_coins:99, username:'EmilioRibelles', profile:'emilio.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 11,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Gael Ribelles Marin',  dekids_coins:99, username:'GaelRibelles', profile:'gael.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 12,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Mikael Bonilla Nuñez',  dekids_coins:89, username:'MikaelBonilla', profile:'karlo.png', createdAt: new Date(), updatedAt: new Date()},
      {id: 13,password_hash: '$2b$10$8jGhgJcdL7DOPZDFUTVcT.bsUteS/D6aMDJQgbi49iLvY2oN4Rmga', name:'Karlo Vazquez Valentin',  dekids_coins:109, username:'KarlosVaz', profile:'mikael.png', createdAt: new Date(), updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  }
};
