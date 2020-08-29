/**** scripts de teste *****/

//alert ('aleluia!!!');
var beep = new Audio();


function som(vr_tipo){
    
    
  switch (vr_tipo) {
    

    case 1: 
        beep.src = "som\\COW_1.wav";
        break;
    case 2:
        beep.src = "som\\HORSE.wav";
        break;
    case 3: 
        beep.src = "som\\DOG_1.wav";
        break;
    case 4: 
        beep.src = "som\\PIG.wav";
        break;
    case 5:
        beep.src = "som\\MONKEY_1.wav";
        break;
    case 6: 
        beep.src = "som\\CAT.wav";
        break;
    case 7: 
        beep.src = "som\\Leaobvo.wav";
        break;
    case 8:
        beep.src = "som\\GOATS.wav";
        break;
    default: alert (indeterminado);
        break
    
  }
  
    
    beep.play();

  //  alert("tipo:" + vr_tipo);

  //  check = true;

  //  alert ('vaca!!!' + beep.src);
}

/*
function soundThunder(){
    beep.src = "Thunder_Crack.mp3";
    beep.play();
    check = true;
}*/

function mudaimagem(){
    document.getElementById("31").src="imagem/cow-2896329_1920.jpg";
  //  alert("trocou");
    
}

function voltaimagem(){
    document.getElementById("31").src="imagem/bonobos-2481776_1280.jpg";
  //  alert("trocou");
  console.log("trocou mesmo");
    
}