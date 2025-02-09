function init() {	
  var words = document.getElementById('entryinput');
  alert(words.value);
  
  var out = document.getElementById('textoutput');
  out.innerHTML = words.value;
};

var a = document.getElementById('entrybutton');
a.addEventListener('click',init)