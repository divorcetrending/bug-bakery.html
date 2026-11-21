const form = document.querySelector("#catering-form");
const confirmation = document.querySelector ("#confirmation-message");

form.addEventListener("submit", function(event){
  event.preventDefault();
  
  const name = document.querySelector("#request-name").value;
  const good = document.querySelector("#request-good").value;

  const message = "Thanks " + name + " for requesting " + good + "!";

  confirmation.textContent = message;
  confirmation.hidden = false;
});
