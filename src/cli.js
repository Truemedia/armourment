#! /usr/bin/env node
const yargs = require('yargs')
    .usage("$0 --e=utterance")
    .option('export', {
      "alias": "e",
      "default": "utterance",
      "describe": "Type of file to export (utterance, speech, timeline)",
      "type": "string"
    })
    .option('intent', {
      "alias": "i",
      "default": "",
      "describe": "Name of intent (context of timeline)",
      "type": "string"
    })
    .option('timeline', {
      "alias": "t",
      "default": null,
      "describe": "Timeline file (used to pre-populate existing conversation)",
      "type": "string"
    })
    .help('h')
    .alias('h', 'help');

// let {timeline, export} = yargs.argv;
const Armourment = require('./index');

let armour = new Armourment({
  person: 'Wade',
  bot: 'Assistant'
}, yargs.argv.timeline);
armour.convo.speak('bot', 'Hello world');
armour.convo.speak('person', 'Hi');

console.log(armour.convo.export('timeline'));
