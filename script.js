const form = document.querySelector("#meeting-form");
const status = document.querySelector("#form-status");

form?.addEventListener("submit", (event) => {
  event.preventDefault();
  status.textContent = "Solicitud preparada. Conecte este formulario a su CRM o email para recibir reuniones.";
  form.reset();
});
