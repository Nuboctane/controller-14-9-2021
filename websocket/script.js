var direction = "";

let socket = new WebSocket("ws://localhost:8025/websocket/character.html");


function up(){
  var direction = "up";
  socket.send(direction);
}

function down(){
  var direction = "down";
  socket.send(direction);
}

function left(){
  var direction = "left";
  socket.send(direction);
}

function right(){
  var direction = "right";
  socket.send(direction);
}

socket.onopen = function(e) {
    alert("[open] Connection established");
    alert("Sending to server");
    socket.send("My name is John");
  };
  
  socket.onmessage = function(event) {
    alert(`[message] Data received from server: ${event.data}`);
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      alert('[close] Connection died');
    }
  };
  
  socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
  };