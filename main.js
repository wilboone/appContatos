"strict mode";

console.log("Teste JS");

document.getElementById("cpf").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 11) value = value.slice(0, 11);

  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d)/, "$1.$2");
  value = value.replace(/(\d{3})(\d{1,2})$/, "$1-$2");

  e.target.value = value;
});

function mascara(input) {
  input.addEventListener("input", function (e) {
    let value = e.target.value.replace(/\D/g, "");

    if (value.length > 11) value = value.slice(0, 11);

    value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
    value = value.replace(/(\d{5})(\d)/, "$1-$2");

    e.target.value = value;
  });
}

document.querySelectorAll(".celular").forEach(mascara);

document.getElementById("addTelefone").addEventListener("click", function () {
  const newDiv = document.createElement("div");
  newDiv.classList.add("input-group", "mb-2");
  newDiv.innerHTML = `<input type="text" id="celular" class="form-control celular" placeholder="(00) 00000-0000" maxlength="15" required/>
              <button type="button" class="btn btn-danger remover">Remover</button>`;

  mascara(newDiv.querySelector(".celular"));

  telefones.appendChild(newDiv);

  const tel = document.getElementById("telefones");
  let total = tel.querySelectorAll(".input-group").length;
  if (total >= 10) {
    document.getElementById("addTelefone").classList.add("d-none");
    return;
  }

  console.log(total);
  console.log(tel);
});

// forma para remover dinamicamente elementos inseridos no HTML posteriormente

const caixaTelefone = document.getElementById("telefones");

caixaTelefone.addEventListener("click", function (e) {
  if (e.target.classList.contains("remover")) {
    e.target.parentElement.remove();
  }
});
