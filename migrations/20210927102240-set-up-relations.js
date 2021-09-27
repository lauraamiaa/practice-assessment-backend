"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("spaces", "userId", {
      type: Sequelize.INTEGER,
      references: {
        model: "users",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("spaces", "userId");
  },
};

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("stories", "spaceId", {
      type: Sequelize.INTEGER,
      references: {
        model: "stories",
        key: "id",
      },
      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn("stories", "spaceId");
  },
};
