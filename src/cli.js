#! /usr/bin/env node
const yargs = require('yargs')
    .usage("$0 --e=utterance")
    .option('export', {
      "alias": "e",
      "default": "utterance",
      "describe": "Type of file to export (utterance, speech)",
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
      "default": "timeline.json",
      "describe": "Timeline file (used to pre-populate existing conversation)",
      "type": "string"
    })
    .help('h')
    .alias('h', 'help');

let {timeline, export} = yargs.argv;
