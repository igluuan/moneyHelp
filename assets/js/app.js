window.addEventListener("DOMContentLoaded", (event) => {
  const inputText = document.getElementById("floatingInput");
  const btnSubmit = document.getElementById("btnSubmit");
  const value1 = document.getElementById("value1");
  const value2 = document.getElementById("value2");
  const value3 = document.getElementById("value3");
  btnSubmit.addEventListener("click", function () {
    let salario = Number(inputText.value);
    let resultados = calculaPorcentagem(salario);
    value1.innerHTML = `R$${resultados.resultado1.toFixed(0)}`;
    value2.innerHTML = `R$${resultados.resultado2.toFixed(0)}`;
    value3.innerHTML = `R$${resultados.resultado3.toFixed(0)}`;
   

  });
  function calculaPorcentagem(salario) {
    const resultado1 = (50 * salario) / 100;
    const resultado2 = (30 * salario) / 100;
    const resultado3 = (20 * salario) / 100;
    return {
      resultado1: resultado1,
      resultado2: resultado2,
      resultado3: resultado3,
    }
  }
});
