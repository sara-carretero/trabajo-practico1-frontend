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
  const message = inputMessage.value

  //Creo un div para agregar el mensaje.
  const divMessage = document.createElement("div")
  //Accedo a la lista de clases de divMessage, y le agrego una clase con add.
  divMessage.classList.add("message", "sent")

  const text = document.createElement("p")
  text.textContent = message

  divMessage.appendChild(text)

  //Le agrego un hijo de la sección, al chatMessages, el hijo es containerMessage.
  chatMessages.appendChild(divMessage)

}
