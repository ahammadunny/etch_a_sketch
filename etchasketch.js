function doAction() { 
    const btnclick= document.querySelector('#btn');
    const input = document.getElementById('numberinput');
    let x = input.value;
    let text;
    if(isNaN(x) || x <1 || x >30) {
      alert("input not valid");
      return false;
    } else {
      alert( " number of squares per side is "+x);
    }
    
    var time = parseInt(input.value);
    var times=time*time;
    const darkenSquare = (e) => {
    let currentBrightness = e.target.dataset.brightness || 100;
    currentBrightness = parseInt(currentBrightness) - 10;
    if (currentBrightness >= 0) { 
        e.target.style.filter = `brightness(${currentBrightness}%)`;
        e.target.dataset.brightness = currentBrightness;
    }  
};

const lightenSquare = (e) => {
    let currentBrightness = e.target.dataset.brightness || 100;
    currentBrightness = parseInt(currentBrightness) + 10;

   if (currentBrightness <= 100) { 
        e.target.style.filter = `brightness(${currentBrightness}%)`;
        e.target.dataset.brightness = currentBrightness;
    } 
};

    const cdiv = document.querySelector('.container');
    cdiv.replaceChildren();
    for(var i = 1; i < times+1; i++) {
      var  div = document.createElement('div');
      div.innerText=i;
      div.classList.add('divc');
      div.style.flexBasis=100/time + '%';
     div.addEventListener('mouseover', (e) => {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var bgColor = "rgb(" + x + "," + y + "," + z + ")";
      e.target.style.background = bgColor;
     /* e.target.style.filter=`brightness(10%)`; */
    })
   div.addEventListener('click', darkenSquare); 
   div.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    lightenSquare(event);
});
      cdiv.appendChild(div);
    
    }

  } 
  /*
  function displayDate()
{
    document.getElementById("demo").innerHTML=Date(); 
   alert("Todays's date and time is ") * Date();
}
*/
  window.onload = function() {
    var btn = document.getElementById("myButton");
    btn.onclick = doAction;
}
