const inputMessage = document.querySelector(".text")
const sendButton = document.querySelector(".buttonSend")
const chatMessages = document.querySelector(".chat-messages")

//Invocación de función. Cuando el botón reciba un "click", ejecutará la función sendMessage.
sendButton.addEventListener("click", sendMessage)

