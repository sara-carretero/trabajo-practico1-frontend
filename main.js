const inputMessage = document.querySelector(".text")
const sendButton = document.querySelector(".buttonSend")
const chatMessages = document.querySelector(".chat-messages")

//Invocación de función. Cuando el botón reciba un "click", ejecutará la función sendMessage.
sendButton.addEventListener("click", sendMessage)

// declaración de función. Una función tiene 4 partes fundamentales:
// 1. palabra reservada (son palabras que ya existen en js y que tienen un uso). -> function
//2. nombre de la función (siempre debe ser un verbo) -> sendMessage
//3. parentesis (son los parámentros, es decir herramientas internas para la función) -> (sendButton)
//4. llaves (tecnicamente se llama 'escope'. Es la zona privada de la función) -> {}

function sendMessage() {

}
