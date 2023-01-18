
export  function f1(){
  const script = document.createElement('script');
  script.innerHTML="$('.js-range-slider').ionRangeSlider({type: 'double',grid: true,min: 0,max: 1000,from: 200,to: 800,prefix: '$'})"
  document.body.appendChild(script);
}
