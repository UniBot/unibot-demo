/**
 * Demo Plugin for Unibot
 * @param  {Object} options [description]
 *   db: {mongoose} the mongodb connection
 *   bot: {irc} the irc bot
 *   web: {connect} a connect + connect-rest webserver
 *   config: {object}
 * @return {Function}         init function to access shared resources
 */
module.exports = function init(options){
  return function plugin(channel){
    return {
      "ping": function(from, matches) {
        channel.say(from + ': pong!');
      }
    };
  };
};
