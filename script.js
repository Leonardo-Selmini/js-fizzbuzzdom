let text = '';
// loop per stampare i numeri da 1 a 100
for (let i = 1; i <= 100; i++) {
  // controllo che funzioni
  console.log(i);
  // itero text
  if (i % 15 == 0) {
    text += `<div class="box fizz-buzz">BuzzFizz</div>`;
  } else if (i % 5 == 0) {
    text += `<div class="box buzz">Buzz</div>`;
  } else if (i % 3 == 0) {
    text += `<div class="box fizz">Fizz</div>`;
  } else {
    text += `<div class="box">${i}</div>`;
  }
}
// seleziono il mio container e ci printo dentro i box
document.getElementById('box-container').innerHTML = text
