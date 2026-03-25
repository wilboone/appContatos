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

// function aplicarMascaraCelular(input) {
//   input.addEventListener("input", function (e) {
//     let value = e.target.value.replace(/\D/g, "");

//     if (value.length > 11) value = value.slice(0, 11);

//     value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
//     value = value.replace(/(\d{5})(\d)/, "$1-$2");

//     e.target.value = value;
//   });
// }

// document.querySelectorAll(".celular").forEach(aplicarMascaraCelular);

document.getElementById("celular").addEventListener("input", function (e) {
  let value = e.target.value.replace(/\D/g, "");

  if (value.length > 11) value = value.slice(0, 11);

  value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
  value = value.replace(/(\d{5})(\d)/, "$1-$2");

  e.target.value = value;
});
