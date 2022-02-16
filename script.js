//нельзя вводить отрицат

function start(){
  let numberOfCurrency = document.getElementById("number").value;
  let selectedCurrency = document.getElementById("currency").value;
  let numberOfFirst = document.querySelector(".first-currency");
  let numberOfSecond = document.querySelector(".second-currency");
  let numberOfThird = document.querySelector(".third-currency");
  let numberOfFourth = document.querySelector(".fourth-currency");
  let sum;
  switch(selectedCurrency) {
    case 'BYN':  
      //2.5846 USD
      sum = numberOfCurrency/2.5846;
      sum = sum.toFixed(2)+ " USD";
      numberOfFirst.innerHTML = `${sum}`; 
      //2.9306 EUR
      sum = numberOfCurrency/2.9306;
      sum = sum.toFixed(2)+ " EUR";
      numberOfSecond.innerHTML = `${sum}`; 
      //0.41 CNY
      sum = numberOfCurrency/0.41;
      sum = sum.toFixed(2)+ " CNY";
      numberOfThird.innerHTML = `${sum}`; 
      //3.4052 RUB
      sum = numberOfCurrency/3.4052*100;
      sum = sum.toFixed(2)+ " RUB";
      numberOfFourth.innerHTML = `${sum}`; 
      break;
    case 'USD':   
      //BYN
      sum = numberOfCurrency*2.5846;
      sum = sum.toFixed(2)+ " BYN";
      numberOfFirst.innerHTML = `${sum}`; 
      //EUR
      sum = numberOfCurrency*0.88;
      sum = sum.toFixed(2)+ " EUR";
      numberOfSecond.innerHTML = `${sum}`; 
      //CNY
      sum = numberOfCurrency*6.31;
      sum = sum.toFixed(2)+ " CNY";
      numberOfThird.innerHTML = `${sum}`; 
      //RUB
      sum = numberOfCurrency*75.10;
      sum = sum.toFixed(2)+ " RUB";
      numberOfFourth.innerHTML = `${sum}`; 
      break;
    case 'EUR':    
      //BYN
      sum = numberOfCurrency*2.92;
      sum = sum.toFixed(2)+ " BYN";
      numberOfFirst.innerHTML = `${sum}`; 
      //USD
      sum = numberOfCurrency*1.14;
      sum = sum.toFixed(2)+ " USD";
      numberOfSecond.innerHTML = `${sum}`; 
      //CNY
      sum = numberOfCurrency*7.18;
      sum = sum.toFixed(2)+ " CNY";
      numberOfThird.innerHTML = `${sum}`; 
      //RUB
      sum = numberOfCurrency*85.47;
      sum = sum.toFixed(2)+ " RUB";
      numberOfFourth.innerHTML = `${sum}`; 
      break;
    case 'CNY':  
      //BYN
      sum = numberOfCurrency*0.41;
      sum = sum.toFixed(2)+ " BYN";
      numberOfFirst.innerHTML = `${sum}`; 
      //USD
      sum = numberOfCurrency*1.16;
      sum = sum.toFixed(2)+ " USD";
      numberOfSecond.innerHTML = `${sum}`; 
      //EUR
      sum = numberOfCurrency*0.14;
      sum = sum.toFixed(2)+ " EUR";
      numberOfThird.innerHTML = `${sum}`; 
      //RUB
      sum = numberOfCurrency*11.90;
      sum = sum.toFixed(2)+ " RUB";
      numberOfFourth.innerHTML = `${sum}`; 
      break;
    case 'RUB':  
      //BYN
      sum = numberOfCurrency*3.41/100;
      sum = sum.toFixed(2)+ " BYN";
      numberOfFirst.innerHTML = `${sum}`; 
      //USD
      sum = numberOfCurrency*1.33/100;
      sum = sum.toFixed(2)+ " USD";
      numberOfSecond.innerHTML = `${sum}`; 
      //CNY
      sum = numberOfCurrency*1.17/100;
      sum = sum.toFixed(2)+ " EUR";
      numberOfThird.innerHTML = `${sum}`; 
      //CNY
      sum = numberOfCurrency*8.41/100;
      sum = sum.toFixed(2)+ " CNY";
      numberOfFourth.innerHTML = `${sum}`; 
      break;
    default:
      break;
  }
}

window.onkeyup = function (event) {
  if (event.which == 13 || event.keyCode == 13) {
    start();
  }
}
