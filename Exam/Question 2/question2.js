class Message {
    constructor(time, author, text) {
      this.time = time;
      this.author = author;
      this.text = text;
    }
  }
  
  class Messenger {
    constructor() {
      this.messages = [];
    }
    gettime() {
      let now = new Date();
      return `${now.getHours()}:${now.getMinutes()}`;
    }
  
    show_history() {
      for (let i = 0; i < this.messages.length; i++) {
        const { time, author, text } = this.messages[i];
        console.log(`${time} ${author}: ${text}`);
      }
    }
  
    send(author, text) {
      const message = new Message(this.gettime(), author, text);
      this.messages.push(message);
    }
  }
  
  const messenger = new Messenger();
  
  messenger.send("Huru", "Salam,Rena");
  messenger.send("Rena", "Salam,Huru");
  messenger.send("Ayten", "Salam qizlar");
  
  messenger.show_history();
  