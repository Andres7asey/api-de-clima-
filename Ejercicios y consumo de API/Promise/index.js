const loader = document.querySelector('.loader');
const content = document.querySelector('p');

const hello = 'Hello';
const world = 'World!';

// created Promise
const promise_function = () => new Promise((resolve, reject) => {
  const name = 'Juan'

  if (false) {
    setTimeout(function () {
      resolve(`${hello} ${world} my name is ${name}`);
    }, 3000)
  } else {
    reject('Error en la promesa');
  }

})

// call Promise

// promise_function()
//   .then(response => console.log(response))
//   .catch(error => console.log(error))
//   .finally(() => console.log('Finalizo la promesa'));

const promise_loader_function = () => new Promise((resolve, reject) => {
  let isTrue = true;
  let isFalse = false;
  if (isTrue) {
    setTimeout(function () {
      resolve(
        loader.classList.add('none'),
        content.style.display = 'block'
      );
    }, 5000)
  } else {
    reject(new Error('Error en cargar la promesa'))
  }
})

promise_loader_function()
  .then(() => console.log('Se cargó la promesa'))
  .catch(error => console.log(error))