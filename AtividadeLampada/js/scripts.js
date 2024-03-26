let led = "ligar";

const ligar = () => {
  let btnEnviar = document.getElementById("btnEnviar");
  let imgLampada = document.getElementById("lampada");

  if (led == "ligar") {
    // lampada.innerHTML = `<img id="lampada" src="img/acesa.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/acesa.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada acesa.";

    btnEnviar.innerHTML = "Apagar";
    led = "apagar";
  } else {
    // lampada.innerHTML = `<img id="lampada" src="img/apagada.jpg" alt="Lâmpada">`;
    imgLampada.src = "./img/apagada.jpg"; // src = SOURCE = CAMINHO = LOCAL DO ARQUIVO
    imgLampada.alt = "Lampada apagada.";

    btnEnviar.innerHTML = "Acender";
    led = "ligar";
  }
};

const gerarImagem = () => {
  let qtdImagem = document.getElementById("inQtdImg").value;
let canvas1 =  document.getElementById(
    "canvas"
  )
  console.log(qtdImagem);

canvas1.innerHTML = ""
for (let i = 1; i <= qtdImagem; i++) {
    
    
    canvas.innerHTML += 
  document.getElementById(
    "canvas"
  ).innerHTML = `<img src=./img/transferir.jpeg>`;
}
};

var preco = document.getElementById("inValorPedido");
var precoFinal = document;getElementById(`inValFinal`);
var valoDesc = document;getElementById(`inValDesc`);
var porDesc = document;getElementById(`inPercDesc`);

function calcular() {

    if (preco>=0.5) {
        
    }
    }
}    

