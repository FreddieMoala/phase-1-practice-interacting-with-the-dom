function timer() {
  return setInterval(function () {
    const counter = document.getElementById('counter');
    const count = parseInt(counter.innerText);
    counter.innerText = count + 1;
  }, 1000);
}

let isDisabled = false;
let interval = timer(); 
const pauseBtn = document.getElementById('pause');
pauseBtn.addEventListener('click', () => {
  if (isDisabled) {
    isDisabled = false;
    interval = timer();
    pauseBtn.innerText = 'pause';
  } else {
    isDisabled = true;
    clearInterval(interval);
    pauseBtn.innerText = 'resume';
  }
  const buttons = document.getElementsByTagName('button');
  for (let button of buttons) {
    if (button.id !== 'pause') {
      button.disabled = isDisabled;
    }
  }
});

const minusBtn = document.querySelector('#minus');
const plusBtn = document.querySelector('#plus');
const heartBtn = document.querySelector('#heart');

const counter = document.querySelector('#counter');

minusBtn.addEventListener('click', () => {
  counter.innerText = parseInt(counter.innerText) - 1;
});

plusBtn.addEventListener('click', () => {
    counter.innerText = parseInt(counter.innerText) + 1;
    });


let likeCounts = {};

heartBtn.addEventListener('click', () => {
  const counterValue = counter.innerText;
  if (!likeCounts[counterValue]) {
    likeCounts[counterValue] = 0;
  }
  likeCounts[counterValue]++;
  
  const likes = document.querySelector('.likes');
  const like = document.createElement('li');
  like.innerText = `${counterValue} has been liked ${likeCounts[counterValue]} times`;
  likes.appendChild(like);
});

const commentForm = document.querySelector('#comment-form');
const commentInput = document.querySelector('#comment-input');
const comments = document.querySelector('#list');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const comment = document.createElement('p');
  comment.innerText = commentInput.value;
  comments.appendChild(comment);
  commentInput.value = '';
} );