

var save_button = document.getElementById('save');

save_button.addEventListener('click', function() {
  // checkboxes
  var switch1 = document.getElementById('checkbox1');
  localStorage.setItem('switch1', switch1.checked);

  var switch2 = document.getElementById('checkbox2');
  localStorage.setItem('switch2', switch2.checked);

  // timezone
  var timezone = document.getElementById('time');
  localStorage.setItem('timezone', time.value);
});

function load() {
  // checkboxes
// var check1 = localStorage.getItem('switch1');
 var check1 = JSON.parse(localStorage.getItem('switch1'));

 document.getElementById('checkbox1').checked = check1;

 var check2 = JSON.parse(localStorage.getItem('switch2'));

 document.getElementById('checkbox2').checked = check2;


  // timezone
  var timezone = localStorage.getItem('timezone');
  if (timezone) {
    document.getElementById('time').value = timezone;
  }
};

var cancel_button = document.getElementById('cancel');

cancel_button.addEventListener('click', function() {
  location.reload();
  localStorage.clear();
});

load();
