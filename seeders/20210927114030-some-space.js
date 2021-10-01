"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "spaces",
      [
        {
          title: "Funny Pet Sitting Stories",
          description:
            "Pet sitters like myself see plenty of strange things in the course of business",
          backgroundColor: "#8d99ae",
          color: "#edf2f4",
          userId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Abducted by Aliens",
          description:
            "Experiencers say extraterrestrials abducted them and haunt their lives",
          backgroundColor: "#b5e48c",
          color: "#184e77",
          userId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("spaces", null, {});
  },
};
