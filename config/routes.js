/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
  
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  "PATCH /api/v1/user": { action: "user/update-profile" },
  "POST  /api/v1/auth/login": { action: "auth/login" },
  "POST  /api/v1/auth/signup": { action: "auth/signup" },

  "PATCH /api/v1/sync": { action: "syncs/sync-user" },
  "DELETE /api/v1/sync": { action: "syncs/unsync-user" }
};
