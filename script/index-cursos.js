"use strict";
// botões
const botaoAbrirModal = document.querySelectorAll(".abrir-modal");
const botaoFecharModal = document.querySelectorAll(".fechar-modal");

//modais
const modal = document.querySelector(".modal");
const fade = document.querySelector(".fade");
let modalAtivo;

const habilitarModal = function (modal) {
  fade.classList.toggle("hidden");
  modal.classList.toggle("hidden");
};
const fecharModal = function () {
  fade.classList.toggle("hidden");
  modalAtivo.classList.toggle("hidden");
  modalAtivo = 0;
};

for (let i = 0; i < botaoAbrirModal.length; i++) {
  botaoAbrirModal[i].addEventListener("click", function () {
    habilitarModal(document.getElementById(`modal-conteudo-curso${i}`));
    modalAtivo = document.getElementById(`modal-conteudo-curso${i}`);
    console.log(
      document.getElementById(`modal-conteudo-curso${i}`).textContent
    );
  });
}
for (let i = 0; i < botaoFecharModal.length; i++) {
  botaoFecharModal[i].addEventListener("click", function () {
    fecharModal();
    console.log("clicou");
  });
}
fade.addEventListener("click", fecharModal);
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modalAtivo.classList.contains("hidden")) {
    console.log();
    fecharModal();
  }
});
