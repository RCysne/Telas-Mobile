
  const minorAdult = document.querySelector('.minorAdult');
  const sumAdult = document.querySelector('.sumAdult');
  const countAdult = document.querySelector('.countAdult');

  const minorChild = document.querySelector('.minorChild');
  const sumChild = document.querySelector('.sumChild');
  const countChild = document.querySelector('.countChild');

  const sumDiary = document.querySelector('.sumDiary');
  const minorDiary = document.querySelector('.minorDiary');
  const countDiary = document.querySelector('.countDiary');

  const totalDiarys = document.querySelector('.totalDiarys');

  const promoCode = document.querySelector('#promoCode').value;
  const btnApply = document.querySelector('#btnApply');


  let countNumberAdult = 0;
  let countNumberChild = 0;
  let countNumberDiary = 0;
  let totalNumberDiarys = 0;
  
  
  sumAdult.addEventListener('click', () => {
  countNumberAdult++;
  countAdult.innerHTML = countNumberAdult;
})


  minorAdult.addEventListener('click', () => {
    if(countNumberAdult === 0) {
      return;
    }
    countNumberAdult--;
    countAdult.innerHTML = countNumberAdult;
    
  })


sumChild.addEventListener('click', () => {
  countNumberChild++;
  countChild.innerHTML = countNumberChild;
})


minorChild.addEventListener('click', () => {
  if(countNumberChild === 0) {
    return;
  }  
  countNumberChild--;
  countChild.innerHTML = countNumberChild;
})


sumDiary.addEventListener('click', () => {
  countNumberDiary++;
  countDiary.innerHTML = countNumberDiary;
  total();
})


minorDiary.addEventListener('click', () => {
  if(countNumberDiary === 0) {
    return;
  }

  countNumberDiary--;
  countDiary.innerHTML = countNumberDiary;
  total();
  
})


function total() {
  totalNumberDiarys = countNumberDiary * 400;
  totalDiarys.innerHTML = totalNumberDiarys;
}


btnApply.addEventListener('click', () => {

  // totalDiarys.innerHTML = (totalNumberDiarys*promoCode)/100
  
})
