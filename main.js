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

// function mascara(input) {
//   input.addEventListener("input", function (e) {
//     let value = e.target.value.replace(/\D/g, "");
// 
//     if (value.length > 11) value = value.slice(0, 11);
// 
//     value = value.replace(/^(\d{2})(\d)/g, "($1) $2");
//     value = value.replace(/(\d{5})(\d)/, "$1-$2");
// 
//     e.target.value = value;
//   });
// }
// 
// document.querySelectorAll(".celular").forEach(mascara);


$(function () {
  function formatarTelefone(value) {
    let formatedValue = value.replace(/\D/g, "");
    // Eu costumo evitar modificar o valor original recebido na função.
    // Quando é um objeto complexo, isso pode causar efeitos colaterais indesejados, e mesmo com tipos primitivos, é uma boa prática manter a imutabilidade.

    formatedValue = formatedValue.slice(0, 11)
      .replace(/^(\d{2})(\d)/g, "($1) $2")
      .replace(/(\d{5})(\d)/, "$1-$2");
    return formatedValue;
  }

  $(".celular").on("input", function (e) {
    const $element = $(e.target);
    const val = $element.val();
    // Seria possível ajustar a função para receber o elemento diretamente e isso limparia mais a escrita, mas mantive para seguir a mesma ideia do código alterado
    $element.val(formatarTelefone(val));
  });
})

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


// Exemplo: possíveis efeitos colaterais decorrentes da modificação do input
function changeSimpleInput(simpleString) { 
  simpleString += simpleString
  return simpleString;
}

let myString = "Hello!"
console.log("1x changeSimpleInput(myString):")
console.log(changeSimpleInput(myString))
console.log("2x changeSimpleInput(myString):")
console.log(changeSimpleInput(myString))
console.log("3x changeSimpleInput(myString):")
console.log(changeSimpleInput(myString))

function changeComplexInput(someDict) {
  someDict["hello"] += someDict["hello"];
  return someDict;
}

let myDict = {"hello": "Hello!"}
console.log("1x changeComplexInput(myDict):")
console.log(changeComplexInput(myDict))
console.log("2x changeComplexInput(myDict):")
console.log(changeComplexInput(myDict))
console.log("3x changeComplexInput(myDict):")
console.log(changeComplexInput(myDict))