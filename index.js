/**
 * Demo Plugin for Unibot
 * @param  {Object} options [description]
 *   db: {mongoose} the mongodb connection
 *   bot: {irc} the irc bot
 *   web: {connect} a connect + connect-rest webserver
 *   config: {object}
 * @return {Function}         init function to access shared resources
 */
 
// Executed one time when bot loads
module.exports = function init(options){
  // Executed for each channel plugin is activated on
  return function plugin(channel){
    
    // Return a hash of regex patterns to listen for
    return {
      // ProLoser types in "ping"
      "ping": function(from, matches) {
        // Response: "ProLoser: pong!"
        channel.say(from + ': pong!');
      }
    };
  };
};
