const moment = require("moment");

function formatMessage(username, text) {
  return {
    username,
    text,
    time: moment().tz("Asia/kolkata").format("h:mm a"),
  };
}
module.exports = formatMessage;
