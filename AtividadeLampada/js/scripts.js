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
  let canvas1 = document.getElementById("canvas");
  console.log(qtdImagem);

  canvas1.innerHTML = "";
  for (let i = 1; i <= qtdImagem; i++) {
    canvas.innerHTML += document.getElementById(
      "canvas"
    ).innerHTML = `<img src=./img/transferir.jpeg>`;
  }
};

const calcular = () => {
  let inValorPedido = document.getElementById("inValorPedido");
  let inPercDesc = document.getElementById("inPercDesc");
  let inValDesc = document.getElementById("inValDesc");
  let inValFinal = document.getElementById("inValFinal");

  if (inValorPedido.value <= 500) {
    inPercDesc.value = 0;
  }
  if (inValorPedido.value >= 500) {
    inPercDesc.value = 0.5;
  }
  if (inValorPedido.value >= 1000) {
    inPercDesc.value = 0.8;
  }
  if (inValorPedido.value >= 1500) {
    inPercDesc.value = 1.0;
  }
  if (inValorPedido.value >= 2000) {
    inPercDesc.value = 1.5;
  }
  inValFinal.value =
    inValorPedido.value - (inPercDesc.value * inValorPedido.value) / 100;
  inValDesc.value = (inPercDesc.value * inValorPedido.value) / 100;
};

const validaForm = () => {
  let inData = document.getElementById("inData").value;
  let inCli = document.getElementById("inCli").value;
  let inFone = document.getElementById("inFone").value;
  let inMail = document.getElementById("inMail").value;
  let inProd = document.getElementById("inProd").value;
  let inQtd = document.getElementById("inQtd").value;
  let inVal = document.getElementById("inVal").value;
  let msgErro = document.getElementById("mensagem-erro");

  //apagando as informações de erro
  msgErro.innerText = "";

  // validação dos dados
  inData == "" && (msgErro.innerHTML += "Data inválida <br>");
  inCli == "" && (msgErro.innerHTML += "Nome do cliente inválido <br>");
  inCli.length < 3 && (msgErro.innerHTML += "Tamanho do nome inválido <br>");
  inFone == "" && (msgErro.innerHTML += "Telefone inválido <br>");
  inMail == "" && (msgErro.innerHTML += "E-mail inválido <br>");
  inMail.length < 6 && (msgErro.innerHTML += "Tamanho do e-mail inválido <br>");
  inProd == "" && (msgErro.innerHTML += "Produto inválido <br>");
  inProd.length < 6 && (msgErro.innerHTML += "Tamanho do produto inválido <br>");
  inQtd == "" && (msgErro.innerHTML += "Quantidade inválida <br>");
  inQtd < 0 && (msgErro.innerHTML += "Quantidade negativa <br>");
  inVal == "" && (msgErro.innerHTML += "Valor inválido <br>");
  inVal < 0 && (msgErro.innerHTML += "Valor negativo <br>");

  //mostrar | ocultar erro
  msgErro.innerText == ""
    ? ((msgErro.style.display = "none"), (msgErro.innerText = "enviado!"))
    : ((msgErro.style.display = "block"), msgErro.classList.remove("verde"));


  msgErro.innerText == "enviado!" &&
    ((msgErro.style.display = "block"),
    (msgErro.innerText = "Formulário enviado com sucesso!"),
    msgErro.classList.add("verde"));
};
