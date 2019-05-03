#! /usr/bin/env node
const yargs = require('yargs')
    .usage("$0 --e=utterance")
    .option('export', {
      "alias": "e",
      "default": "utterance",
      "describe": "Type of file to export (utterance, speech)",
      "type": "string"
    })
    .help('h')
    .alias('h', 'help');

console.log(yargs.argv.export);
