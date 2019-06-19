module.exports = {
  friendlyName: "Update profile",

  description: "Updates the profile of a user",
  inputs: {
    emailAddress: {
      required: false,
      type: "string",
      isEmail: true,
      description: "The email address for the new account, e.g. m@example.com.",
      extendedDescription: "Must be a valid email address.",
    },

    password: {
      required: false,
      type: "string",
      maxLength: 200,
      example: "passwordlol",
      description: "The unencrypted password to use for the new account.",
    },

    fullName: {
      required: false,
      type: "string",
      example: "Frida Kahlo de Rivera",
      description: "The user's full name.",
    },
    phone: {
      required: false,
      type: "string",
    },
    gender: {
      required: false,
      type: "string",
    },
    birthDate: {
      required: false,
      type: "string",
    },
    bio: {
      required: false,
      type: "string",
    },
  },
  exits: {
    emailAlreadyInUse: {
      statusCode: 409,
      description: "The provided email address is already in use.",
    },
    phoneAlreadyInUse: {
      statusCode: 409,
      description: "The provided phone number is already in use.",
    },
    conflictingDetails: {
      statusCode: 409,
      description:
        "The request sent has a conflicting value(s) with the database record",
    },
    invalid: {
      responseType: "badRequest",
      description: "The provided `inputs` are invalid.",
      extendedDescription:
        "If this request was sent from a graphical user interface, the request " +
        "parameters should have been validated/coerced _before_ they were sent, " +
        "additionally there must have been a hiccup in the request type that you're trying to use",
    },
  },

  fn: async function(inputs) {
    let me = this.req.me;
    var user = await User.updateOne({ id: me.id })
      .set(inputs)
      .intercept("E_UNIQUE", "conflictingDetails")
      .intercept({ name: "UsageError" }, "invalid");

    // All done.
    return user;
  },
};
