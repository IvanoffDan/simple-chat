const moment = require('moment');
const Guid = require ('guid');

const generateMessage = (from, text) => {
  return {
      id: Guid.create(),
      from,
      text,
      createdAt: new moment().valueOf()
  };
};

module.exports = {generateMessage};