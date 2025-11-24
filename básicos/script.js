
//  -----CONTADOR------
let numero =0;

document.getElementById("btnMais").onclick = () => {
  numero++;
  document.getElementById("contadorNumero").textContent = numero;
}

document.getElementById("btnMenos").onclick = () => {
  numero--;
  document.getElementById("contadorNumero").textContent = numero;
}


// --------- MUDAR COR ---------
function mudarCor(cor){
    document.body.style.backgroundColor = cor
}

// --------- LISTA DE TAREFAS ---------

document.getElementById("btnAdd").onclick = () =>{
    const texto = document.getElementById("inputTarefas").value;

    if(texto === ""){
        alert("Digite uma tarefa primeiro");
        return;
    }


    const li = document.createElement("li");
    li.textContent = texto 
    document.getElementById("listaTarefas").appendChild(li);
    document.getElementById("inputTarefa").value = "";
}


// ===== Jogo Adivinhar Número =====
    const numeroSecreto = Math.floor(Math.random() * 100) + 1;
    document.getElementById("btnTentar").onclick = function(){
      const palpite = Number(document.getElementById("palpite").value);
      const p = document.getElementById("respostaJogo");
      if (!palpite) {
        p.textContent = "Coloque um número!";
      } else if (palpite === numeroSecreto) {
        p.textContent = "Parabéns! Você acertou 🎉";
      } else if (palpite < numeroSecreto) {
        p.textContent = "Muito baixo! Tente um número maior.";
      } else {
        p.textContent = "Muito alto! Tente um número menor.";
      }
    };

    // ===== Cronômetro =====
    let segundos = 0;
    let cronoInterval = null;

    function formatarTempo(seg) {
      const min = Math.floor(seg / 60);
      const sec = seg % 60;
      return (min < 10 ? "0" + min : min) + ":" + (sec < 10 ? "0" + sec : sec);
    }

    document.getElementById("btnStart").onclick = function(){
      if (cronoInterval) return;
      cronoInterval = setInterval(() => {
        segundos++;
        document.getElementById("displayCrono").textContent = formatarTempo(segundos);
      }, 1000);
    };

    document.getElementById("btnStop").onclick = function(){
      clearInterval(cronoInterval);
      cronoInterval = null;
    };

    document.getElementById("btnReset").onclick = function(){
      clearInterval(cronoInterval);
      cronoInterval = null;
      segundos = 0;
      document.getElementById("displayCrono").textContent = "00:00";
    };

    // ===== Calculadora =====
    document.getElementById("btnCalc").onclick = function(){
      const a = Number(document.getElementById("num1").value);
      const b = Number(document.getElementById("num2").value);
      const op = document.getElementById("operacao").value;
      let res;
      if (op === "+") res = a + b;
      else if (op === "-") res = a - b;
      else if (op === "*") res = a * b;
      else if (op === "/") res = b !== 0 ? a / b : "Erro (divisão por zero)";
      else res = "Operador inválido";
      document.getElementById("resultadoCalc").textContent = res;
    };

    // ===== Lista de Compras =====
    const lista = [];
    document.getElementById("btnAddItem").onclick = function(){
      const item = document.getElementById("itemCompra").value;
      if (item === "") {
        alert("Digite um item para adicionar!");
        return;
      }
      lista.push(item);
      atualizarLista();
      document.getElementById("itemCompra").value = "";
    };

    function atualizarLista(){
      const ul = document.getElementById("listaCompras");
      ul.innerHTML = "";
      lista.forEach((item, index) => {
        const li = document.createElement("li");
        li.textContent = item + " ";
        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";
        btnRemover.style.background = "#e74c3c";
        btnRemover.onclick = () => {
          lista.splice(index, 1);
          atualizarLista();
        };
        li.appendChild(btnRemover);
        ul.appendChild(li);
      });
    }

    // ===== Animação de Quadrado =====
    const quadrado = document.getElementById("quadrado");
    let posX = 0, posY = 0;

    document.getElementById("btnLeft").onclick = () => { posX -= 10; atualizarPosicao(); };
    document.getElementById("btnRight").onclick = () => { posX += 10; atualizarPosicao(); };
    document.getElementById("btnUp").onclick = () => { posY -= 10; atualizarPosicao(); };
    document.getElementById("btnDown").onclick = () => { posY += 10; atualizarPosicao(); };

    function atualizarPosicao(){
      quadrado.style.left = posX + "px";
      quadrado.style.top = posY + "px";
    }


//------DARK MODE-------

(function() {
  const btn = document.getElementById("toggle");

  btn.onclick = () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      document.body.style.background = "black";
      document.body.style.color = "black";
      document.querySelector("h1").style.color = "white";
    } else {
      document.body.style.background = "";
      document.body.style.color = "";
    }
  };
})();


//----OCCULTAR SENHA------

const inp = document.getElementById("isenha");
const btn = document.getElementById("mostrar");

btn.addEventListener("click", () =>{
  if(inp.type === "password"){
    inp.type = "text"
   btn.textContent = "Ocultar"; 
  }else{
    inp.type ="password";
    btn.textContent = "mostrar";
  }
})

//---Desabilitar botão quando input vazio----

const inpt = document.getElementById("inpt");
const bttn = document.getElementById("bttn");

  // Toda vez que o usuário digitar algo no input
  inpt.addEventListener("click", () =>{

  // Remove espaços das laterais e verifica se o campo está vazio
    const texto = inpt.value.trim();

  // Se estiver vazio → desabilita o botão
  // Se tiver texto → habilita o botão
    bttn.disabled = (texto === "");
})

