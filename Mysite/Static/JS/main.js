console.log('hello');

var usernameInput=document.querySelector('#username');
var btnJoin=document.querySelector('#join-btn');

var webSocket;

var username;

function Websocketonmessage(event)
{
    var parseddata= JSON.parse(event.data);
    var message=parseddata['message'];
    console.log(message);
}
btnJoin.addEventListener(
    'click',() =>{
        username=usernameInput.value;
        if(username=="")
        {
            return;
        }
        console.log(username);
        usernameInput.value='';
        usernameInput.disabled=true;
        usernameInput.style.visibility='hidden';

        btnJoin.disabled=true;
        btnJoin.style.visibility='hidden';

      var lableusername=document.querySelector('#label-username');
      lableusername.innerHTML=username;

      var loc=window.location;
      var wsstart="ws://";
      if(loc.protocol=="https:")
      {
          wsstart="wss://";
      }
      var endpoint=wsstart+loc.host+loc.pathname;
      console.log(endpoint);
      webSocket=new WebSocket(endpoint);
      webSocket.addEventListener('open',(e)=>{
          console.log("Connection Open");
          var mess=JSON.stringify({
              'message':"Hello ALl"
          }

          );
          webSocket.send(mess);
      });
      webSocket.send
      webSocket.addEventListener('message',Websocketonmessage);
      webSocket.addEventListener('close',(e)=>{
          console.log("Connection close");
      });
      webSocket.addEventListener('error',(e)=>{
          console.log("Connection error");
      });


    }
);