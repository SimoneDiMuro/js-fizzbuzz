const container = document.querySelector(".container");

for (let i = 1; i <= 100; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    container.innerHTML += "<div class ='block fizzbuzz'> FizzBuzz </div>";
  } else if (i % 3 == 0) {
    container.innerHTML += "<div class ='block fizz'> Fizz </div>";
  } else if (i % 5 == 0) {
    container.innerHTML += "<div class ='block buzz'> Buzz </div>";
  } else {
    container.innerHTML += "<div class ='block'>" + i + "</div>";
  }
}
