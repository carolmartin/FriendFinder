// ===============================================================================
// DATA
// Below data will hold all of the friends.
// ===============================================================================
var friends = [
    {
      name: "Sponge Bob",
      photo: "/Spongebob.png",
      scores: [
          1,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
      ]         
    },
    {
      name: "Patrick",
      photo: "/Patrick_Star.png",
      scores: [
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          1
      ]         
    },
    {
      name: "Squidward",
      photo: "/squidward.png",
      scores: [
          5,
          1,
          4,
          4,
          5,
          1,
          2,
          5,
          4,
          5
      ]         
    }
  ]

  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friends;
  