#! /usr/bin/env node
const readline = require('readline');
const jsonFile = require('jsonfile');
const Dialog = require('./dialog');
const yargs = require('yargs')
    .usage("$0 --e=utterance")
    .option('export', {
      "alias": "e",
      "default": "utterance",
      "describe": "Type of file to export (utterance, speech, timeline)",
      "type": "string"
    })
    .option('killswitch', {
      "alias": "k",
      "default": "CUT",
      "describe": "Keyword used to end conversation",
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

// CUI
let rl = readline.createInterface(process.stdin, process.stdout);
rl.setPrompt('CHAT> ');
rl.prompt();

rl.on('line', (line) => {
    let content = line.trim();
    rl.prompt();
    armour.convo.addDialog( Dialog.fromLine(content) );
    if (content == yargs.argv.killswitch) {
      jsonFile.writeFileSync('output.json', armour.convo.timeline);
      killChat();
    }
  })
  .on('close', function() {
    killChat();
  });

function killChat()
{
  console.log('Closing session!');
  process.exit(0);
}
