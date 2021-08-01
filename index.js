const {getScheduleSlots} = require("./client/scheduleClient");
const {day} = require("./constants");
const fs = require('fs');
const REPORT_NAME = 'slots.json'
require("stream");

(async () => {
  const emptySlots = await getScheduleSlots(day)
  fs.writeFile(REPORT_NAME, JSON.stringify(emptySlots, null, 2), 'utf8', () => null)
})();
