const Conversation = require('./conversation');
const jsonFile = require('jsonfile');

class Armourment
{
  constructor(parties = {}, timelinePath = null)
  {
    this.parties = parties;
    let timeline = jsonFile.readFileSync(timelinePath);
    this.convo = new Conversation(Object.keys(this.parties), timeline);
  }
}

module.exports = Armourment;
