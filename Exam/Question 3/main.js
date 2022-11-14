let btn_send=document.querySelector('.btn_send')
let name = document.querySelector('.name_auth')
let message = document.querySelector('.message_auth')
let history_show=document.querySelector('.show_history');
let history = document.querySelector('.history')

class Message{
    constructor(name, message) {
        this.name = name;
        this.date=new Date();
        this.message = message;
      }
      toString(){
        return(`${this.date.getHours()} : ${this.date.getMinutes()}  Göndərən: ${this.name} \n Mesaj: ${this.message} \n`)
      }
}
class Messenger{
    list=[];
    send(name,message){
        let newmessage=new Message(name,message)
        this.list.push(newmessage)
    };
    show_history(){
        this.list.forEach(message=>{
            console.log(message.toString())
        })
    }
}

let messenger = new Messenger()

btn_send.addEventListener('click',(e)=>{
    if(name.value=='' || message.value==''){
        alert("Boş xanaları doldurun")
    }else{
        messenger.send(name.value, message.value)
        name.value='';
        message.value='';
    }
})
history_show.addEventListener('click',(e)=>{
    let data='';
    messenger.list.forEach(message_data=>{
        data+=message_data.toString()
    })
    history.innerText=` ${data}`
})