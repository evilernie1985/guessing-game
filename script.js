var h1 = document.querySelector('h1')
var body = document.querySelector('body')

// var userIn = parseInt(prompt('pls enter your guess'))

// **Update: Button added to start game;
// issues: 1) re-starting game does not generate new random number only page re-load does
<<<<<<< HEAD
document.getElementById('startBtn').addEventListener('click', getUser, getRandomIntInclusive)

function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
}

var ans = getRandomIntInclusive(1, 5)
console.log(ans)

// if (newAns !== ans) {
//   ans = newAns
// }
console.log(ans)

// var state = false
// to get start game button, end game button, restart

=======
document.getElementById('startBtn').addEventListener('click', setTimeout(getUser, 1000))
document.getElementById('startBtn').addEventListener('click', restart)


function getRandomIntInclusive (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min // The maximum is inclusive and the minimum is inclusive
}

var ans = getRandomIntInclusive(1, 5)
console.log(ans)

>>>>>>> 885fde4cd4aead84511ec5aa4f5884d552690770
function higherOrLower (userIn, ans) {
  if (userIn !== ans) {
    if (userIn > ans) {
      h1.innerText = 'lower pls'
      return setTimeout(getUser, 1000)
    } else if (userIn < ans) {
      h1.innerText = 'higher pls'
      return setTimeout(getUser, 1000)
    }
  }
  body.style.backgroundColor = 'green'
<<<<<<< HEAD
=======
  h1.innerText = 'Game Won'
>>>>>>> 885fde4cd4aead84511ec5aa4f5884d552690770
}

// **Update: Modified getUser to end game on 'cancel' and 'empty prompt'.
function getUser () {
  var userIn = prompt('key in n')
  if (userIn === '' || userIn === null) { return } else if (userIn !== ans) { return higherOrLower(userIn, ans) } else if (userIn == ans) { console.log('you won') } else { return }
  // return higherOrLower(userIn, ans)
}

<<<<<<< HEAD
=======
function restart () {
  h1.innerText = 'please key in a number to start guessing'
  body.style.backgroundColor = 'rgb(150, 75, 27)'
  setTimeout(getUser, 1000)
  ans = getRandomIntInclusive(1, 5)
  console.log(ans)
}

>>>>>>> 885fde4cd4aead84511ec5aa4f5884d552690770
// function should get input,
// check and change css
// decide if should loop back to get input
// setTimeout(getUser, 1000) **Update:removed to prevent auto-start upon page load**
