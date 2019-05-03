const Armourment = require('./index');

let armour = new Armourment({
  person: 'Wade',
  bot: 'Assistant'
});
armour.convo.speak('bot', 'Hello world');
armour.convo.speak('person', 'Hi');

console.log(armour.convo.export('utterance'));
