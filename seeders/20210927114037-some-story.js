"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "stories",
      [
        {
          name: "Locked In On Halloween Night",
          content:
            "It’s Halloween. After a long day pet sitting in Muncie, I had one final visit to do in Hartford City then I could go home and curl up with my pets.Upon my arrival, I heard a cacophony of dogs barking from one area in the house. The sound of 3 great danes barking is pretty amazing if you haven’t heard it before. Not only were they barking frantically, they were scratching on the door to get out. As I’m yelling, “It’s OK guys, hold on!” I kinda freak out because the door was locked, from the inside.",
          imageUrl:
            "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-halloween-costume-1627330832.jpg",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Santa’s Helpers",
          content:
            "Imagine this: It’s pitch black outside. The ground is covered in ice. It’s cold and raining.Even with the 4-wheel drive in gear I’m slipping and sliding. Once I get to the top of the hill I can barely see the 3 dogs. Due to a lack of outdoor light, all I had was my little headlamp that I strapped on so I could use both of my hands. Let’s just say few little LED lights doesn’t cut it when it’s that dark outside (and one reason we ask our clients to leave lights on for us).",
          imageUrl:
            "https://media.kidadl.com/5f956ed0d872ea7fc9ad442c_top_103_cute_christmas_dog_names_for_your_new_puppy_min_fe97228e5a.jpeg",
          spaceId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Secret Meetings",
          content:
            "In a small New England town, members of a support group, which boasts a growing membership of 1,500, gather for a secret meeting. Twin sisters Audrey and Debbie, who have asked that their last name and hometown be withheld, have also come a long way to share their experiences. The group that's assembled for this meeting is not struggling with alcohol, drugs, sex addition or gambling. They're part of Starborn, an alien experience and awareness support group, catering to those who say they've been abducted by aliens.",
          imageUrl:
            "https://static.independent.co.uk/s3fs-public/thumbnails/image/2017/01/30/16/alien-abduction-1.jpg?width=982&height=726&auto=webp&quality=75",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Extraterrestrials Can Embody People's Fears",
          content:
            "No matter what anyone else believes, people like Audrey and Debbie are convinced that what they've witnessed is real. They said they realize their stories sound too fantastic and, at times, like the stuff of sci-fi blockbusters.",
          imageUrl:
            "https://www.irishtimes.com/polopoly_fs/1.2408584.1446031494!/image/image.jpg_gen/derivatives/ratio_1x1_w1200/image.jpg",
          spaceId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("stories", null, {});
  },
};
