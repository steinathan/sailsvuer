module.exports = {
  friendlyName: "Unsync user",

  description: "",

  inputs: {},

  exits: {},

  fn: async function(inputs) {
    sails.log.warn(
      `Removing session details for "${this.req.session.userId}" .. done`
    );
    delete this.req.session.userId;
    this.res.clearCookie();
    // All done.
    return;
  },
};
