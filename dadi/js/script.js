var myBtn1 = document.getElementById('my-btn');
myBtn1.addEventListener('click', function(){
  dado1 = Math.ceil(Math.random()* 6);
  dado2 = Math.ceil(Math.random()* 6);

  if (dado1 === 1){
    document.getElementById('pic-box').className = "";
    document.getElementById('pic-box').classList.add("uno");
  } else if (dado1 === 2){
    document.getElementById('pic-box').className = "";
    document.getElementById('pic-box').classList.add("due");
  } else if (dado1 === 3){
    document.getElementById('pic-box').className = "";
    document.getElementById('pic-box').classList.add("tre");
  } else if (dado1 === 4){
    document.getElementById('pic-box').className = "";
    document.getElementById('pic-box').classList.add("quattro");
  } else if (dado1 === 5){
    document.getElementById('pic-box').className = "";
    document.getElementById('pic-box').classList.add("cinque");
  } else {
    document.getElementById('pic-box').className = "";
    document.getElementById('pic-box').classList.add("sei");
  }

  if (dado2 === 1){
    document.getElementById('pic-box2').className = "";
    document.getElementById('pic-box2').classList.add("uno");
  } else if (dado2 === 2){
    document.getElementById('pic-box2').className = "";
    document.getElementById('pic-box2').classList.add("due");
  } else if (dado2 === 3){
    document.getElementById('pic-box2').className = "";
    document.getElementById('pic-box2').classList.add("tre");
  } else if (dado2 === 4){
    document.getElementById('pic-box2').className = "";
    document.getElementById('pic-box2').classList.add("quattro");
  } else if (dado2 === 5){
    document.getElementById('pic-box2').className = "";
    document.getElementById('pic-box2').classList.add("cinque");
  } else {
    document.getElementById('pic-box2').className = "";
    document.getElementById('pic-box2').classList.add("sei");
  }



  if(dado1 > dado2){
    document.getElementById('my-result').innerHTML = 'Hai vinto';
  } else if (dado1 < dado2){
    document.getElementById('my-result').innerHTML = 'Ha vinto computer';
  } else {
    document.getElementById('my-result').innerHTML = 'Pari';
  }
  
});
