var a = prompt('Podaj zmienną a:');
var b = prompt('Podaj zmienną b:');
var c = (a * a) - (2 * a * b) + (b * b);

if (c>0) {
    alert('Wynik jest dodatni');
  } else if (c<0) {
  alert('Wynik jest ujemny');
  } else {
  alert('Wynik to zero');
  }