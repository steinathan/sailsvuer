module.exports = {
  friendlyName: "Sync user",

  description:
    "This actions synchronizes the user with the frontend calling it ",

  inputs: {},

  exits: {
    noUser: {
      statusCode: 204,
      description: "no user found"
    }
  },

  fn: async function(inputs) {
    sails.log("Africa/Lagos");
    if (this.req.me) {
      var user = await User.findOne()
        .where({ id: this.req.me.id })
        .populateAll();
      return user || this.req.me;
    }
    throw "noUser";
    // All done.
  }
};
