window.addEventListener("message", function (event) { 
            if (event.origin !== "http://localhost:5173") return;
            if(event.data === "showChatbot") {
              const element =  document.getElementById('chatena-iframe')
               element.style.height = "600px";
               element.style.width = "400px";
            } else {
               const element =  document.getElementById('chatena-iframe')
               element.style.height = "64px";
               element.style.width = "64px";
            }
          }); 
