class Armourment
{
  constructor(parties = {})
  {
    this.parties = parties;
    this.convo = new Conversation( Object.keys(this.parties) );
  }
}

class Conversation
{
  constructor(participants = [])
  {
    this.participants = participants;
    this.timeline = [];
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
    }
    let filename = `${participant}`;
    return filename;
  }
}

class Dialog
{
  constructor(speaker = '', listeners = [])
  {
    this.speaker = speaker;
    this.listeners = listeners;
    this.msg = null;
  }

  set txt(txt)
  {
    this.msg = txt;
    this.timestamp = new Date;
  }
}

module.exports = Armourment;
