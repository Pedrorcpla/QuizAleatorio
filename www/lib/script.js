$(document).on("click","#verifica", function(){
  if($(".resp1").val() == "2"){
    questao2();
  }
  if($(".resp2").val() == "3"){
    questao3();
  }
  if($(".resp3").val() == "1"){
    questao4();
  }
  if($(".resp4").val() == "1"){
    questao5();
  }
  if($(".resp5").val() == "3"){
    questao6();
  }
  if($(".resp6").val() == "1"){
    questao7();
  }
  if($(".resp7").val() == "1"){
    questao8();
  }
  if($(".resp8").val() == "2"){
    questao9();
  }
  if($(".resp9").val() == "3"){
    questao10();
  }
  if($(".resp10").val() == "1"){
    alert("Você venceu!!!");
  }
});

function questao2(){
  $(".resp1").addClass("resp2");
  $(".resp2").removeClass("resp1");

  $("#numQuiz").html("2");
  $("#pergunta").html("Quanto é dois zero três quatros?");
  $("#a").html("2034");
  $("#b").html("00444");
  $("#c").html("20444");
}

function questao3(){
  $(".resp2").addClass("resp3");
  $(".resp3").removeClass("resp2");

  $("#numQuiz").html("3");
  $("#pergunta").html("Quem foi o melhor jogador do mundo de 2021?");
  $("#a").html("Messi");
  $("#b").html("Cristiano Ronaldo");
  $("#c").html("Rodolfo");
}

function questao4(){
  $(".resp3").addClass("resp4");
  $(".resp4").removeClass("resp3");

  $("#numQuiz").html("4");
  $("#pergunta").html("Quem descobriu a América?");
  $("#a").html("Colombo");
  $("#b").html("Pedro A. Cabral");
  $("#c").html("Pedro A. Nascimento");
}

function questao5(){
  $(".resp4").addClass("resp5");
  $(".resp5").removeClass("resp4");

  $("#numQuiz").html("5");
  $("#pergunta").html("Quantos anões vivem com a Branca de Neve?");
  $("#a").html("8");
  $("#b").html("6");
  $("#c").html("7");
}

function questao6(){
  $(".resp5").addClass("resp6");
  $(".resp6").removeClass("resp5");

  $("#numQuiz").html("6");
  $("#pergunta").html("Qual o nome do monstro verde de Monstros S.A?");
  $("#a").html("Mike");
  $("#b").html("Woody");
  $("#c").html("McQueen");
}

function questao7(){
  $(".resp6").addClass("resp7");
  $(".resp7").removeClass("resp6");

  $("#numQuiz").html("7");
  $("#pergunta").html("Se eu tenho 12 anos e minha irmã tem a metade da minha idade, quantos anos ela terá quando eu tiver 34 anos?");
  $("#a").html("28");
  $("#b").html("17");
  $("#c").html("12");
}

function questao8(){
  $(".resp7").addClass("resp8");
  $(".resp8").removeClass("resp7");

  $("#numQuiz").html("8");
  $("#pergunta").html("Como falar com seu pai?");
  $("#a").html("Oi");
  $("#b").html("Com seu pai");
  $("#c").html("Olá");
}

function questao9(){
  $(".resp8").addClass("resp9");
  $(".resp9").removeClass("resp8");

  $("#numQuiz").html("9");
  $("#pergunta").html("Qual desses heróis é da Marvel?");
  $("#a").html("Batman");
  $("#b").html("Ciborgue");
  $("#c").html("Senhor Fantástico");
}

function questao10(){
  $(".resp9").addClass("resp10");
  $(".resp10").removeClass("resp9");

  $("#numQuiz").html("10");
  $("#pergunta").html("Qual desses heróis é da DC?");
  $("#a").html("Lanterna Verde");
  $("#b").html("Demolidor");
  $("#c").html("Cavaleiro da Lua");
}