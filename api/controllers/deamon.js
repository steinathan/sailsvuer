module.exports = {
  friendlyName: "Pet",

  description: "Pet something.",

  inputs: {
    omit: {
      type: "string",
    },
    select: {
      type: "string",
    },
  },

  exits: {
    userError: {
      statusCode: 424, // failed dependency
      description: "Spontanous error occured",
    },
  },

  fn: async function(inputs) {
    // All done.
    _.split = function(array) {
      var result;
      if (typeof array !== "undefined" || !_.isEmpty(array)) {
        result = array.split(",");
      } else {
        result = [];
      }
      return result;
    };
    var user = await User.find()
      .omit(_.split(inputs.omit))
      .intercept({ name: "UsageError" }, "userError");
    return user;
  },
};
