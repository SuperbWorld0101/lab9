function init() {	
  var words = document.getElementById('entryinput');
  alert("Xueying Sun: "+words.value);
  
  var out = document.getElementById('textoutput');
  out.innerHTML = words.value;
};

var a = document.getElementById('entrybutton');
a.addEventListener('click',init)