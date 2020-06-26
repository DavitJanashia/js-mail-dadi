var emailBtn = document.getElementById('my-email-btn');
var emailRlt = document.getElementById('my-email-result');
var emailArray = ['uno@', 'due@', 'tre@'];
console.log(emailArray);

emailBtn.addEventListener('click', function(){
  var emailInput = document.getElementById('my-email-input').value;
  var emailPresete = false;

  for (var i = 0; i < emailInput.length; i++){
    if (emailInput == emailArray[i]){
      emailPresete = true;
    }
  }

  if (emailPresete == true){
    emailRlt.innerHTML = 'Email inserita é presente';
  } else{
    emailRlt.innerHTML = 'Email inserita é assente';
  }

});
