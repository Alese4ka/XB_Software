function start(){
  let numberOfCurrency = document.getElementById("number").value;
  let selectedCurrency = document.getElementById("currency").value;
  let numberOfFirst = document.querySelector(".first-currency");
  let numberOfSecond = document.querySelector(".second-currency");
  let numberOfThird = document.querySelector(".third-currency");
  let numberOfFourth = document.querySelector(".fourth-currency");
  let sum;

  //при клике на date вызываем эту функцию и передаем ее значение в start
  
  if(numberOfCurrency < 0) {
    numberOfFirst.innerHTML = `${"Введите положительное число"}`; 
  }
  else {
    function getRandom(min, max) {
      value = (Math.random() * (max - min) + min).toFixed(2);
      sum = (numberOfCurrency*value).toFixed(2);
    }
    //сгенерировать раз и навсегда, а не каждый раз

    switch(selectedCurrency) {
      case 'BYN':  
      //если дата текущая  то 0.39 курс
      // выше нельзя
      //ниже то самая нижняя дата
        getRandom(0.39, 0.43)
        numberOfFirst.innerHTML = `${sum + " USD"}`; 
  
        getSumOfCurrency(0.34);
        numberOfSecond.innerHTML = `${sum + " EUR"}`; 
        
        getSumOfCurrency(2.46);
        numberOfThird.innerHTML = `${sum + " CNY"}`; 
        
        getSumOfCurrency(29.30);
        numberOfFourth.innerHTML = `${sum + " RUB"}`; 
        break;
      case 'USD':   
        getSumOfCurrency(2.5846);
        numberOfFirst.innerHTML = `${sum + " BYN"}`; 
        
        getSumOfCurrency(0.88);
        numberOfSecond.innerHTML = `${sum + " EUR"}`; 
        
        getSumOfCurrency(6.31);
        numberOfThird.innerHTML = `${sum + " CNY"}`; 
  
        getSumOfCurrency(75.10);
        numberOfFourth.innerHTML = `${sum + " RUB"}`; 
        break;
      case 'EUR':    
        getSumOfCurrency(2.92);
        numberOfFirst.innerHTML = `${sum + " BYN"}`; 
        
        getSumOfCurrency(1.14);
        numberOfSecond.innerHTML = `${sum + " USD"}`; 
        
        getSumOfCurrency(7.18);
        numberOfThird.innerHTML = `${sum + " CNY"}`; 
        
        getSumOfCurrency(85.47);
        numberOfFourth.innerHTML = `${sum + " RUB"}`; 
        break;
      case 'CNY':  
        getSumOfCurrency(0.41);
        numberOfFirst.innerHTML = `${sum + " BYN"}`; 
        
        getSumOfCurrency(1.16);
        numberOfSecond.innerHTML = `${sum + " USD"}`; 
        
        getSumOfCurrency(0.14);
        numberOfThird.innerHTML = `${sum + " EUR"}`; 
        
        getSumOfCurrency(11.90);
        numberOfFourth.innerHTML = `${sum + " RUB"}`; 
        break;
      case 'RUB':  
        getSumOfCurrency(0.0341);
        numberOfFirst.innerHTML = `${sum + " BYN"}`; 
        
        getSumOfCurrency(0.0133);
        numberOfSecond.innerHTML = `${sum + " USD"}`;
  
        getSumOfCurrency(0.0117);
        numberOfThird.innerHTML = `${sum + " EUR"}`; 
  
        getSumOfCurrency(0.0841);
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
