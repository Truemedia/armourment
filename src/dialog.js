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

  static fromLine(ln)
  {
    let [speaker, msg] = ln.split(': ');
    let instance = new this(speaker);
    instance.txt = msg;
    return instance;
  }
}

module.exports = Dialog;
