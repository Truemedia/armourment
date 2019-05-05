const Dialog = require('./dialog');
const jsonfile = require('jsonfile');

class Conversation
{
  constructor(participants = [], timeline = [])
  {
    this.participants = participants;
    this.timeline = timeline;
  }

  join(participant = '')
  {
    this.participants.push(participant)
  }

  leave(participant)
  {
    this.participants = this.perspective(participant);
  }

  perspective(participant)
  {
    return this.participants.filter(individual => individual !== participant);
  }

  speak(speaker = '', txt = '')
  {
    let dialog = new Dialog(speaker, this.perspective(speaker));
    dialog.txt = txt;
    this.addDialog(dialog);
  }

  speakerTimeline(speaker)
  {
    return this.timeline.filter(dialog => dialog.speaker == speaker);
  }

  addDialog(dialog)
  {
    this.timeline.push(dialog);
  }

  export(type = 'utterance', basename = 'convo')
  {
    let ext = null;
    let timeline = null;
    let participant = null;

    switch (type) {
      case 'utterance':
        participant = 'person';
        timeline = this.speakerTimeline(participant);
        let utterances = timeline.map(dialog => dialog.msg);
        ext = 'utter';
      break;
      case 'speech':
        participant = 'bot';
        timeline = this.speakerTimeline(participant);
        let responses = timeline.map(dialog => dialog.msg);
        ext = 'ssml';
      break;
      case 'timeline':
        timeline = this.timeline;
        ext = 'json';
        jsonfile.writeFile('test.json', timeline)
          .then(res => {
            console.log('Write complete')
          })
          .catch(error => console.error(error))
            break;
          };
    let filename = `${participant}`;
    return filename;
  }
}

module.exports = Conversation;
