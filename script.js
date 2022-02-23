let calendar = document.querySelector('input[type="date"]');
calendar.value = "2022-02-23";

function start(){
  let numberOfCurrency = document.getElementById("number").value;
  let selectedCurrency = document.getElementById("currency").value;
  let numberOfFirst = document.querySelector(".first-currency");
  let numberOfSecond = document.querySelector(".second-currency");
  let numberOfThird = document.querySelector(".third-currency");
  let numberOfFourth = document.querySelector(".fourth-currency");
  let sum;
  
  if(numberOfCurrency  == ""){
    e.preventDefault
  }
  else if(numberOfCurrency < 0) {
    alert("Введите положительное число"); 
  }
  else {
    function getRandom(min, max) {
      if(calendar.value > '2022-02-23'){
        alert("Нельзя выбрать дату, следующую за 23.02.2022");
        e.preventDefault
      }
      else if(calendar.value === '2022-02-23'){
        sum = (numberOfCurrency*min).toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      }
      else{
        value = (Math.random() * (max - min) + min).toFixed(2);
        sum = (numberOfCurrency*value).toFixed(2).replace(/(\d)(?=(\d\d\d)+([^\d]|$))/g, '$1 ');
      }
    }

    switch(selectedCurrency) {
      case 'BYN':  
        getRandom(0.39, 0.43)
        numberOfFirst.innerHTML = `${sum + " USD"}`; 
        
        getRandom(0.34, 0.37);
        numberOfSecond.innerHTML = `${sum + " EUR"}`; 
        
        getRandom(2.46, 2.71);
        numberOfThird.innerHTML = `${sum + " CNY"}`; 
        
        getRandom(29.30, 32.23);
        numberOfFourth.innerHTML = `${sum + " RUB"}`; 
        
        break;
      case 'USD':   
        getRandom(2.5846, 2.84);
        numberOfFirst.innerHTML = `${sum + " BYN"}`; 
        
        getRandom(0.88, 0.97);
        numberOfSecond.innerHTML = `${sum + " EUR"}`; 
        
        getRandom(6.31, 6.94);
        numberOfThird.innerHTML = `${sum + " CNY"}`; 
  
        getRandom(75.10, 82.61);
        numberOfFourth.innerHTML = `${sum + " RUB"}`; 
        break;
      case 'EUR':    
        getRandom(2.92, 3.21);
        numberOfFirst.innerHTML = `${sum + " BYN"}`; 
        
        getRandom(1.14, 1.25);
        numberOfSecond.innerHTML = `${sum + " USD"}`; 
        
        getRandom(7.18, 7.9);
        numberOfThird.innerHTML = `${sum + " CNY"}`; 
        
        getRandom(85.47, 94.02);
        numberOfFourth.innerHTML = `${sum + " RUB"}`; 
        break;
      case 'CNY':  
        getRandom(0.41, 0.45);
        numberOfFirst.innerHTML = `${sum + " BYN"}`; 
        
        getRandom(1.16, 1.28);
        numberOfSecond.innerHTML = `${sum + " USD"}`; 
        
        getRandom(0.14, 0.15);
        numberOfThird.innerHTML = `${sum + " EUR"}`; 
        
        getRandom(11.90, 13.09);
        numberOfFourth.innerHTML = `${sum + " RUB"}`; 
        break;
      case 'RUB':  
        getRandom(0.0341, 0.0375);
        numberOfFirst.innerHTML = `${sum + " BYN"}`; 
        
        getRandom(0.0133, 0.0146);
        numberOfSecond.innerHTML = `${sum + " USD"}`;
  
        getRandom(0.0117, 0.01287);
        numberOfThird.innerHTML = `${sum + " EUR"}`; 
  
        getRandom(0.0841, 0.0925);
        numberOfFourth.innerHTML = `${sum + " CNY"}`; 
        break;
      default:
        break;
    }
  }
}

window.onkeyup = function (event) {
  if (event.which == 13 || event.keyCode == 13) {
    start();
  }
}


// 5 555 555
//numberOfCurrency = document.getElementById("number").value;
//document.getElementById('number').value = numberOfCurrency.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " "); 
//console.log(numberOfCurrency)