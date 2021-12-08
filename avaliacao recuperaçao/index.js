let btn = document.getElementById("btn")

btn.addEventListener("click", () => {
    adcionarNaLista(); 
});

function adcionarNaLista() {
    let div = document.createElement("div");
    div.setAttribute("class", "card")

    let texto = document.createElement("p");
    let botao_importante = document.createElement("button");
    botao_importante.addEventListener("click", () => {
        if(div.style.backgroundColor == "lightcoral"){
            div.style.backgroundColor = "white";
        }else{
            div.style.backgroundColor = "lightcoral"
        }
    });

    let botao_excluir = document.createElement("button");
    botao_excluir.addEventListener("click", () => {
        div.remove();
    });

    let input = document.getElementById("input").value;

    texto.innerHTML = input;
    botao_importante.innerHTML = "Importante"
    botao_excluir.innerHTML = "Excluir"

    div.appendChild(texto);
    div.appendChild(botao_importante);
    div.appendChild(botao_importante)

    let body = document.querySelector("body");
    body.appendChild(div);
}