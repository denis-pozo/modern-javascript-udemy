document.querySelector('.get-jokes').addEventListener('click', getJokes);
const url = "http://api.icndb.com/jokes/random";

function getJokes(e) {
  const number = document.querySelector('input[type="number"]').value;
  console.log(number);

  const xhr = new XMLHttpRequest();
  xhr.open('GET', `${url}/${number}`, true);
  xhr.onload = function() {
    if(this.status === 200) {
      const response = JSON.parse(this.responseText);
      console.log(response);
      let output = '';
      if(response.type === 'success') {
        response.value.forEach(function(joke) {
          output += `<li>${joke.joke}</li>`;
          console.log(output);
        });

      } else {
        output += '<li>Something went wrong</li>';
      }

      document.querySelector('.jokes').innerHTML = output;
    }
  }

  xhr.send();
  e.preventDefault();
}
