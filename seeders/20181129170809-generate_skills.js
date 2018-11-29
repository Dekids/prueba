'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('skills', [
      {id:1, name: 'Pensamiento computacional',dekids_coins: 2,createdAt: new Date(),updatedAt: new Date()},
      {id:2, name: 'Herramientas digitales',dekids_coins: 12,createdAt: new Date(),updatedAt: new Date()},
      {id:3, name: 'Logica de programacion',dekids_coins: 20,createdAt: new Date(),updatedAt: new Date()},
      {id:4, name: 'Diseño web',dekids_coins: 30,createdAt: new Date(),updatedAt: new Date()},
      {id:5, name: 'Comunicación',dekids_coins: 2,createdAt: new Date(),updatedAt: new Date()},
      {id:6, name: 'Trabajo en equipo',dekids_coins: 2,createdAt: new Date(),updatedAt: new Date()},
      {id:7, name: 'Pensamiento innovador',dekids_coins: 10,createdAt: new Date(),updatedAt: new Date()},
      {id:8, name: 'Pensamiento creativo',dekids_coins: 12,createdAt: new Date(),updatedAt: new Date()},
      {id:9, name: 'Pensamiento critico',dekids_coins: 10,createdAt: new Date(),updatedAt: new Date()},
      {id:10, name: 'Solución de problemas',dekids_coins: 30,createdAt: new Date(),updatedAt: new Date()},
      {id:11, name: 'Negociación',dekids_coins: 0,createdAt: new Date(),updatedAt: new Date()},
      {id:12, name: 'Finanzas',dekids_coins : 11,createdAt: new Date(),updatedAt: new Date()},
      {id:13, name: 'Bonus',dekids_coins : 400,createdAt: new Date(),updatedAt: new Date()}
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('skills', null, {});
  }
};
