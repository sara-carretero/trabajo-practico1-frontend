//Forma más simplificada de realizar el algortimo para los mensajes. Usando el innerHTML que modifica contenido html del elemento seleccionado.

const $inputMessage = document.querySelector(".text")
const $sendButton = document.querySelector("#buttonSend")
const $chatMessages = document.querySelector(".chat-messages")

$sendButton.addEventListener("click", sendMenssage)

function sendMenssage() {
  const message = $inputMessage.value

  //el += indica que agregará el contenido que le sigue, dejando intacto lo previamente almacenado.
  $chatMessages.innerHTML += `
    <div class="message sent">
      <p>${message}</p>
      <p class="timestamp">${new Date().toLocaleTimeString()}</p>
    </div>
  `

  $inputMessage.value = ""

  //FUNCIÓN PARA RECIBIR RESPUESTA AUTOMÁTICA (asíncrono)
  setTimeout(function () {
    $chatMessages.innerHTML += `
      <div class="message received">
        <p>Recibido ${message} ✅</p>
        <p class="timestamp">${new Date().toLocaleTimeString()}</p>
      </div>
    `
  }, 5000)
}