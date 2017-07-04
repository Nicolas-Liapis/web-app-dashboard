const cross = document.getElementById('cross');

cross.addEventListener('click', function(){
  document.getElementById('demo').style.display = "none";
});

const cross1 = document.getElementById('cross1');

cross1.addEventListener('click', function(){
  document.getElementById('demo1').style.display = "none";
});

const cross2 = document.getElementById('cross2');

cross2.addEventListener('click', function(){
  document.getElementById('demo2').style.display = "none";
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
  document.getElementById('demo1').style.display = 'flex';
  document.getElementById('demo2').style.display = 'flex';
  document.getElementById('st1').style.display = "none";
});
