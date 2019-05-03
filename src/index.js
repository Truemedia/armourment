const Conversation = require('./conversation');

class Armourment
{
  constructor(parties = {})
  {
    this.parties = parties;
    this.convo = new Conversation( Object.keys(this.parties) );
  }
}

module.exports = Armourment;
