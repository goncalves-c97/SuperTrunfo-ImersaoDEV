var dragaoBranco = {
    nome: "Dragão Branco",
    imagem: "http://pm1.narvii.com/6588/2fd69bf3fa29476e85e61fec4fd1d4e6b7b51023_00.jpg",
    ataque: 3000,
    defesa: 2500
}
var magoNegro = {
    nome: "Mago Negro",
    imagem: "http://pm1.narvii.com/7012/ef5dc67cb5a3376ecb272c8ecb2dfd0527eeac39r1-1000-1000v2_00.jpg",
    ataque: 2000,
    defesa: 2000
}
var bulbassauro = {
    nome: "Bulbassauro",
    imagem: "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/4d07700a-458b-4989-a177-b985a9a82ea2/d4z6wsx-ee17f62f-aed0-4902-b593-84109de75d23.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOiIsImlzcyI6InVybjphcHA6Iiwib2JqIjpbW3sicGF0aCI6IlwvZlwvNGQwNzcwMGEtNDU4Yi00OTg5LWExNzctYjk4NWE5YTgyZWEyXC9kNHo2d3N4LWVlMTdmNjJmLWFlZDAtNDkwMi1iNTkzLTg0MTA5ZGU3NWQyMy5wbmcifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6ZmlsZS5kb3dubG9hZCJdfQ.5_69KpHP2k9TIq3oVnLZkO9kdXhcAeku2Bs9yIxzOD8",
    ataque: 1000,
    defesa: 3000
}
var darthVader = {
    nome: "Darth Vader",
    imagem: "https://i2.wp.com/www.meganerd.it/wp-content/uploads/2020/06/5adcb1d12bc004a1e15b54ac57f552df.jpg?resize=840%2C1259&ssl=1",
    ataque: 3000,
    defesa: 2000
}
var seiyaDePesaso = {
    nome: "Seiya de Pégaso",
    imagem: "http://pm1.narvii.com/6479/8a0531db23199df70ca57893e56ef464c65de762_00.jpg",
    ataque: 3000,
    defesa: 1500
}
var kuririn = {
    nome: "Kuririn",
    imagem: "https://images.fineartamerica.com/images/artworkimages/mediumlarge/3/5-krillin-frank-picas.jpg",
    ataque: 1500,
    defesa: 1000
}
var cell = {
    nome: "Cell",
    imagem: "https://www.socialdub.com/groupspictures/38327/383272469531425304717.jpg?x2",
    ataque: 2500,
    defesa: 1750
}
var sharizard = {
    nome: "Sharizard",
    imagem: "https://i.pinimg.com/originals/23/15/69/23156961f25453cf0855f55b94cbf863.png",
    ataque: 2500,
    defesa: 2000
}
var grooveStreet = {
    nome: "Groove Street",
    imagem: "https://i.pinimg.com/originals/06/ef/5b/06ef5b86c75483b0012f2690e51eca1b.jpg",
    ataque: 2000,
    defesa: 2000
}
var megaman = {
    nome: "Megaman",
    imagem: "https://3.bp.blogspot.com/_KBmmkCxTLY8/TM7gX-jDPHI/AAAAAAAAAF4/FtiqW9h0wUo/s1600/530px-X1armor.jpg",
    ataque: 2500,
    defesa: 2000
}
var zero = {
    nome: "Zero",
    imagem: "https://i.pinimg.com/originals/45/f5/e1/45f5e164a3363f5d0e13ceaf35d23bd0.jpg",
    ataque: 2000,
    defesa: 2500
}
var mario = {
    nome: "Mario",
    imagem: "https://i1.wp.com/trabalhosujo.com.br/wp//wp-content/uploads/2015/01/super-mario.jpg?resize=1200%2C1440&ssl=1",
    ataque: 1500,
    defesa: 1000
}
var naruto = {
    nome: "Naruto Uzumaki",
    imagem: "https://i.pinimg.com/564x/5b/01/4f/5b014f0298922e9aa92805f3a6c48a44.jpg",
    ataque: 2000,
    defesa: 1500
}
var gokuUltraInstinct = {
    nome: "Goku Ultra Inst.",
    imagem: "https://i.pinimg.com/originals/25/8c/88/258c8822b6a11bdc8d0060bd9bb47df3.gif",
    ataque: 9999,
    defesa: 9999
}



var cartasBase = [dragaoBranco, magoNegro, bulbassauro, darthVader, seiyaDePesaso, kuririn, cell, sharizard, grooveStreet, megaman, zero, mario, naruto, gokuUltraInstinct]
var cartas
var cartaJogador
var cartaMaquina

var vitoriasParciaisJogador = 0
var vitoriasParciaisMaquina = 0
var vitoriasGeralJogador = 0
var vitoriasGeralMaquina = 0
var empatesGeral = 0

function atualizaCartasRegistradas(){
  var qtdRegistros = document.getElementById("qtdRegistradas")
  qtdRegistros.innerHTML = cartas.length
}
function atualizaCartasRestantes(){
  var cartasRestantes = document.getElementById("cartasRestantes")
  if(cartas.length == 0){
    cartasRestantes.innerHTML = "(Última rodada)"
  }
  else{
    cartasRestantes.innerHTML = "(" + cartas.length + " cartas restantes)"
  }
  
}
function registrarCarta(){
  var nome = prompt("Digite o nome da nova carta: ")
  var ataque = prompt("Digite o ataque da nova carta: ")
  var defesa = prompt("Digite a defesa da nova carta: ")
  var imagem = prompt("Digite o endereço para a imagem de fundo da nova carta: ")  
  cartas.push({
    nome: nome,
    imagem: imagem,
    ataque: ataque,
    defesa: defesa
  })
  atualizaCartasRegistradas()
}
function mostraCartaMaquinaEAtaca(){
  revelarCartaMaquina()
  setTimeout('atacar()', 1000);
}
function mostraCartaMaquinaEDefende(){
  revelarCartaMaquina()
  setTimeout('defender()', 1000);
}
function atacar(){  
   var ataqueDefesa = parseInt(Math.random() * 2)   
   var informacao = document.getElementById("caixaDeTexto")
   
   revelarCartaMaquina()
   if(ataqueDefesa == 0)
   {
     if(cartaJogador.ataque > cartaMaquina.defesa)
     {       
       document.getElementById("atkJogador").style.color = "green";
       document.getElementById("defMaquina").style.color = "red";
       informacao.innerHTML = ("O adversário escolheu 'Defesa', você ganhou por " + (cartaJogador.ataque - cartaMaquina.defesa) + " pontos")
       vitoriasParciaisJogador++
     }
     else if(cartaJogador.ataque < cartaMaquina.defesa)
     {
       document.getElementById("atkJogador").style.color = "red";
       document.getElementById("defMaquina").style.color = "green";
       informacao.innerHTML = ("O adversário escolheu 'Defesa', você perdeu por " + (cartaJogador.ataque - cartaMaquina.defesa) + " pontos")
       vitoriasParciaisMaquina++
     }
     else
     {
       document.getElementById("atkJogador").style.color = "red";
       document.getElementById("defMaquina").style.color = "red";
       informacao.innerHTML = ("O adversário escolheu 'Defesa', houve um empate!")
     }
   }
   else
   {
     if(cartaJogador.ataque > cartaMaquina.ataque)
     {
       document.getElementById("atkJogador").style.color = "green";
       document.getElementById("atkMaquina").style.color = "red";
       informacao.innerHTML = ("O adversário escolheu 'Ataque', você ganhou por " + (cartaJogador.ataque - cartaMaquina.ataque) + " pontos")
       vitoriasParciaisJogador++
     }
     else if(cartaJogador.ataque < cartaMaquina.ataque)
     {
       document.getElementById("atkJogador").style.color = "red";
       document.getElementById("atkMaquina").style.color = "green";
       informacao.innerHTML = ("O adversário escolheu 'Ataque', você perdeu por " + (cartaJogador.ataque - cartaMaquina.ataque) + " pontos")
       vitoriasParciaisMaquina++
     }
     else{
       document.getElementById("atkJogador").style.color = "red";
       document.getElementById("atkMaquina").style.color = "red";
       informacao.innerHTML = ("O adversário escolheu 'Ataque', houve um empate!")
     }
  }
  fimDaRodada()
}
function defender(){
  
  var ataqueDefesa = parseInt(Math.random() * 2)
  var informacao = document.getElementById("caixaDeTexto")
  revelarCartaMaquina()
  
   if(ataqueDefesa == 0)
   {
     if(cartaJogador.defesa > cartaMaquina.defesa)
     {
       document.getElementById("defJogador").style.color = "green";
       document.getElementById("defMaquina").style.color = "red";
       informacao.innerHTML = ("O adversário escolheu 'Defesa', você ganhou por " + (cartaJogador.defesa - cartaMaquina.defesa) + " pontos")
       vitoriasParciaisJogador++
     }
     else if(cartaJogador.defesa < cartaMaquina.defesa)
     {
       document.getElementById("defJogador").style.color = "red";
       document.getElementById("defMaquina").style.color = "green";
       informacao.innerHTML = ("O adversário escolheu 'Defesa', você perdeu por " + (cartaJogador.defesa - cartaMaquina.defesa) + " pontos")
       vitoriasParciaisMaquina++
     }
     else
     {
       document.getElementById("defJogador").style.color = "red";
       document.getElementById("defMaquina").style.color = "red";
       informacao.innerHTML = ("O adversário escolheu 'Defesa', houve um empate!")
     }
   }
   else
   {
     if(cartaJogador.defesa > cartaMaquina.ataque)
     {
       document.getElementById("defJogador").style.color = "green";
       document.getElementById("atkMaquina").style.color = "red";
       informacao.innerHTML = ("O adversário escolheu 'Ataque', você ganhou por " + (cartaJogador.defesa - cartaMaquina.ataque) + " pontos")
       vitoriasParciaisJogador++
     }
     else if(cartaJogador.defesa < cartaMaquina.ataque)
     {
       document.getElementById("defJogador").style.color = "red";
       document.getElementById("atkMaquina").style.color = "green";
       informacao.innerHTML = ("O adversário escolheu 'Ataque', você perdeu por " + (cartaJogador.defesa - cartaMaquina.ataque) + " pontos")
       vitoriasParciaisMaquina++
     }
     else
     {
       document.getElementById("defJogador").style.color = "red";
       document.getElementById("atkMaquina").style.color = "red";
       informacao.innerHTML = ("O adversário escolheu 'Ataque', houve um empate!")
     }
   }
  fimDaRodada()
  }
function sortearCartas(){
  document.getElementById("btnRegistrarCarta").disabled = true;
  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnAtacar").disabled = false;
  document.getElementById("btnDefender").disabled = false;
  document.getElementById("virada1").style.visibility = "hidden"; 
  
  numeroCartaMaquina = parseInt(Math.random() * cartas.length)
  cartaMaquina = cartas[numeroCartaMaquina]  
  cartas.splice(numeroCartaMaquina,1)
  
  numeroCartaJogador = parseInt(Math.random() * cartas.length)
  cartaJogador = cartas[numeroCartaJogador]
  cartas.splice(numeroCartaJogador,1)
  atualizaCartasRestantes()
  
  //var numeroCartaJogador  
  //do{
  //  numeroCartaJogador = parseInt(Math.random() * cartas.length)
  //} while(numeroCartaJogador == numeroCartaMaquina)
  //  cartaJogador = cartas[numeroCartaJogador]
  
  var nome1 = document.getElementById("nomeDaCartaJogador")
  var imagem1 = document.getElementById("imgJogador")
  var atk1 = document.getElementById("atkJogador")
  var def1 = document.getElementById("defJogador")
  var nome2 = document.getElementById("nomeDaCartaMaquina")
  var imagem2 = document.getElementById("imgMaquina")
  var atk2 = document.getElementById("atkMaquina")
  var def2 = document.getElementById("defMaquina")
  
  nome1.innerHTML = cartaJogador.nome
  atk1.innerHTML = cartaJogador.ataque
  def1.innerHTML = cartaJogador.defesa
  imagem1.src = cartaJogador.imagem
  nome2.innerHTML = cartaMaquina.nome
  atk2.innerHTML = cartaMaquina.ataque
  def2.innerHTML = cartaMaquina.defesa
  imagem2.src = cartaMaquina.imagem
}
function revelarCartaMaquina(){
  document.getElementById("virada2").style.visibility = "hidden";
}
function reiniciaJogo(){
  vitoriasParciaisJogador = 0
  vitoriasParciaisMaquina = 0
  atualizaPlacarParcial()
  document.getElementById("btnRegistrarCarta").disabled = false;
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnAtacar").disabled = true;
  document.getElementById("btnDefender").disabled = true;
  document.getElementById("btnProximaRodada").disabled = true; 
  document.getElementById("virada1").style.visibility = "visible";
  document.getElementById("virada2").style.visibility = "visible";
  cartas = cartasBase
}
function fimDaRodada(){
  atualizaPlacarParcial()
  document.getElementById("btnAtacar").disabled = true;
  document.getElementById("btnDefender").disabled = true;
  document.getElementById("btnProximaRodada").disabled = false;  
  if(cartas.length == 0){
    var textoBotao = document.getElementById("btnProximaRodada")
    textoBotao.innerHTML = "Finalizar Partida"
    if(vitoriasParciaisJogador > vitoriasParciaisMaquina){
      vitoriasGeralJogador++
      setTimeout('finalizaPartida("Parabéns você venceu a partida! :D")',2000)
    }
    else if(vitoriasParciaisJogador < vitoriasParciaisMaquina){
      vitoriasGeralMaquina++
      setTimeout('finalizaPartida("Infelizmente você perdeu a partida! :/")',2000)
    }
    else{
      empatesGeral++
      setTimeout('finalizaPartida("A partida terminou empatada, que batalha em?!")',2000)
    }
    atualizaPlacarTotal()
  }
}
function proximaRodada(){
  retornaCorAtkDef()
  if(cartas.length == 0){    
    var textoBotao = document.getElementById("btnProximaRodada")
    textoBotao.innerHTML = "Próxima Rodada"
    var cartasRestantes = document.getElementById("cartasRestantes")
    cartasRestantes.innerHTML = ""
    var informacao = document.getElementById("caixaDeTexto")
    informacao.innerHTML = ""
    reiniciaJogo()
  }
  else{
  var informacao = document.getElementById("caixaDeTexto")
  informacao.innerHTML = "Escolha a sua ação"
  document.getElementById("btnProximaRodada").disabled = true;
  document.getElementById("virada1").style.visibility = "visible";
  document.getElementById("virada2").style.visibility = "visible";
  sortearCartas()
  }
  
}
function atualizaPlacarParcial(){
  var parcialJogador = document.getElementById("parcialJogador")
  var parcialMaquina = document.getElementById("parcialMaquina")
  parcialJogador.innerHTML = vitoriasParciaisJogador
  parcialMaquina.innerHTML = vitoriasParciaisMaquina
}
function atualizaPlacarTotal(){
  var totalJogador = document.getElementById("totalJogador")
  var totalMaquina = document.getElementById("totalMaquina")
  var empates = document.getElementById("empates")
  totalJogador.innerHTML = vitoriasGeralJogador
  totalMaquina.innerHTML = vitoriasGeralMaquina
  empates.innerHTML = empatesGeral
}
function finalizaPartida(textoParaUsuario){
  var informacao = document.getElementById("caixaDeTexto")
  informacao.innerHTML = textoParaUsuario
}
function retornaCorAtkDef(){
  document.getElementById("atkJogador").style.color = "black";
  document.getElementById("atkMaquina").style.color = "black";
  document.getElementById("defJogador").style.color = "black";
  document.getElementById("defMaquina").style.color = "black";
}

cartas = cartasBase
atualizaCartasRegistradas()