import Vue from "vue";
import socketio from "socket.io-client";
import sailsio from "sails.io.js";

const io = sailsio(socketio);

// TODO: Add support for interceptors
/**
 * Simulate a GET request to sails
 * e.g.
 *    `socket.get('/user/3', Stats.populate).then(data => {}).catch(e => {})`
 *
 * @api public
 * @param {String} url    ::    destination URL
 * @param {Object} data   ::    parameters to send with the request [optional]
 * @returns {Promise}
 */
function PromiseMe(url, data, verb) {
  let $ = io.socket;
  return new Promise((resolve, reject) => {
    var serializeObj = {};
    // change the argin strategy for data
    verb == "get"
      ? (serializeObj["params"] = data)
      : (serializeObj["data"] = data);
    serializeObj.url = url;
    // assing the verb
    serializeObj.method = verb;
    $.request(serializeObj, (data, jwr) => {
      jwr.error ? reject(jwr) : resolve(data);
    });
  });
}

/**
 * Simulate a POST request to sails
 * e.g.
 *    `socket.post('/event', newMeeting, $spinner.hide).then(data => {}).catch(e => {})`
 *
 * @api public
 * @param {String} url    ::    destination URL
 * @param {Object} data   ::    parameters to send with the request [optional]
 * @returns {Promise}
 */
io.socket.post = function(url, data) {
  return PromiseMe(url, data, "post");
};

/**
 * Simulate a PUT request to sails
 * e.g.
 *    `socket.post('/event/3', changedFields, $spinner.hide)`
 *
 * @api public
 * @param {String} url    ::    destination URL
 * @param {Object} data   ::    parameters to send with the request [optional]
 * @returns {Promise}
 */
io.socket.put = function(url, data) {
  return PromiseMe(url, data, "put");
};
/**
 * Simulate a PATCH request to sails
 * e.g.
 *    `socket.patch('/event/3', changedFields, $spinner.hide)`
 *
 * @api public
 * @param {String} url    ::    destination URL
 * @param {Object} data   ::    parameters to send with the request [optional]
 * @returns {Promise}
 */
io.socket.patch = function(url, data) {
  return PromiseMe(url, data, "patch");
};
/**
 * Simulate a DELETE request to sails
 * e.g.
 *    `socket.delete('/event', $spinner.hide)`
 *
 * @api public
 * @param {String} url    ::    destination URL
 * @param {Object} data   ::    parameters to send with the request [optional]
 * @returns {Promise}
 */
io.socket.delete = function(url, data) {
  return PromiseMe(url, data, "delete");
};

Vue.mixin({
  beforeCreate: function() {
    // try to reconnect if connection is lost
    io.sails.reconnection = true;
    io.sails.url = "http://localhost:1337"; // or process.env.BASE_URL
    // Remember this must match te same array in config/sockets.js (server config)
    io.sails.transports = ["websocket"];
    this.$socket = io.socket;
    window.io = io;
  }
});
