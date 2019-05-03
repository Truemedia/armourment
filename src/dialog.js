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

module.exports = Dialog;
