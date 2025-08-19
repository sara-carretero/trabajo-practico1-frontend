const $contactsList = document.querySelector(".contact-list")

const contacts = [
  { name: "Vicent Porter", status: "offline", lastConnection: "left 7 mins ago" },
  { name: "Aiden Chavez", status: "online", lastConnection: "now" },
  { name: "Mike Thomas", status: "online", lastConnection: "now" },
  { name: "Christian Kelly", status: "offline", lastConnection: "left 10 hours ago" },
  { name: "Monica Ward", status: "online", lastConnection: "now" },
  { name: "Dean Harry", status: "offline", lastConnection: "offline since Oct 28" }
];

contacts.forEach(function (contact) {
  $contactsList.innerHTML += `
    <li class="contact">
      <img src="./images/avatar.jpeg" alt="imagen de perfil">
      <div>
        <h4>${contact.name}</h4>
        <p class="${contact.status === "offline" ? "status offline" : "status online"}">${contact.lastConnection}</p>
      </div>
      
    </li>
  `
})