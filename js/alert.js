const cross = document.getElementById('cross');

cross.addEventListener('click', function(){
  document.getElementById('demo').style.display = "none";
  document.getElementById('st1').style.display = "none";
});

function message() {
  if (document.getElementById('userSearch').value.trim() == '') {
    alert('Please add a user name.');
  } else if (document.getElementById('textarea').value.trim() == '') {
    alert('Please add a message.');

    } else {
      alert('Message was sent.');
    }
};

const bell = document.getElementById('bell');

bell.addEventListener('click', function(){
  if (document.getElementById('st1').style.display == 'none') {
    alert('You have no alerts.');
  } else {
    alert('You have one alert.');
  }
});

function select() {
  var targetElement = event.target;

  $( ".select" ).siblings().css( "background-color", "white");
  $( ".select" ).siblings().css( "color", "#5c5e60");
  $( ".select" ).siblings().css( "border", "none");

  targetElement.style.backgroundColor = '#48dd7a';
  targetElement.style.color = 'white';
  targetElement.style.border = '4px solid #48dd7a';
  targetElement.style.borderRadius = '5px';

};
