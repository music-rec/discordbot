/**
 * Created by julia on 02.10.2016.
 */
var cmd = 'mod';
var radio = require('./mod/radio');
var config = require('../config/main.json');
var execute = function (message) {
    if (message.author.id === config.owner_id) {
        let messageSplit = message.content.split(' ').slice(1);
        if (messageSplit.length > 0) {
            switch (messageSplit[0]) {
                case "radio":
                    radio.exec(message);
                    return;
                case "lang":
                    return;
                default:
                    return;
            }
        } else {
            message.reply('What do you want to do ?');
        }
    }
};
module.exports = {cmd: cmd, accessLevel: 0, exec: execute};