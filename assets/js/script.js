document.querySelector("#quantidade").addEventListener("change", indicar)
document.querySelector("#js").addEventListener("change", indicar)
document.querySelector("#layout_sim").addEventListener("change", indicar)
document.querySelector("#layout_nao").addEventListener("change", indicar)
document.querySelector("#range").addEventListener('input', function() {
  document.querySelector('#range-value').textContent = this.value === '1' ? 'Já foi lançado' : this.value === '2' ? 'Está lançando hoje' : 'Será lançado futuramente';
  indicar();
});

function indicar() {
    const album = document.querySelector("#texto").value
    const quantidade = document.querySelector("#quantidade").value
    const disponivel = document.querySelector("#js").checked
    const nacionalidade = document.querySelector("#layout_sim").checked ? "brasileiro" : "estrangeiro"
    const lancamento = document.querySelector("#range-value").textContent
}

const btnEnviar = document.createElement("button")
btnEnviar.innerHTML = "Enviar"
btnEnviar.setAttribute("type", "submit")
document.querySelector("#secao_indicacao form").appendChild(btnEnviar)
btnEnviar.addEventListener("click", function() {alert("Enviado!")})
