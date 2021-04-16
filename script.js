//SERVIÇO SAUDAÇÃO
var http = require("http");
var url = require("url");
const operacoes = require("./calculos");
//criando um objeto do tipo servidor
http
  .createServer(function (req, res) {
    res.writeHead(200, { "Content-Type": "text/html" }); //monta o cabeçalho da página web
    var q = url.parse(req.url, true).query; //recebe um objeto url para consulta

    // ação conta

    let num1 = parseInt(q.n1);
    let num2 = parseInt(q.n2);

    let opera = q.oper;
    let resultado = 0;
    let resposta;

if (num1 && num2 == ''){
  alert('digite os números a serem calculados!')
}
else{

    switch (opera) {
      case "soma":
        resultado = operacoes.soma(num1, num2);
        resposta = `Resultado: ${num1} + ${num2} = ${resultado}`;
        break;
      case "subtracao":
        resultado = operacoes.subtracao(num1, num2);
        resposta = `Resultado: ${num1} - ${num2} = ${resultado}`;
        break;
      case "multiplicacao":
        resultado = operacoes.multiplicacao(num1, num2);
        resposta = `Resultado: ${num1} x ${num2} = ${resultado}`;
        break;
      case "divisao":
        resultado = operacoes.divisao(num1, num2);
        resposta = `Resultado: ${num1} / ${num2} = ${resultado}`;
        break;
      default:
        resposta = `Operação inválida`;
        break;
    }
  }

    res.end(resposta);
  })
  .listen(3000); //porta de conexão