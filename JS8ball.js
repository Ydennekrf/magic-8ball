/// sets a function to check if the user input is a string or not///

function checkString(val){
    if(typeof val === 'string'){
      return true;
    }
    return console.log('Invalid input.')
}

///user inputs name///

var userName = 'Fraser'

/// switch statement checks if input is a string and responds accordingly ///

switch (checkString(userName)){
  case true: console.log('Hello,' + userName + ', what is your question?');
  break;
  case false: console.log('Invalid input.');
  break;
}

/// user asks question to 8 ball ///

const userQuestion = 'Am i the best?'

/// switch statement checks if input is a string and responds accordingly ///

switch (checkString(userQuestion)){
  case true: console.log(userName + ' The Magic 8 ball will now answer: ' + userQuestion);
  break;
  case false: console.log('Invalid input.')
}

/// this math statement creates a random number generator to automate the 8 balls response///

var randomNumber = Math.floor(Math.random()*8);
let eightBall = ''

switch (randomNumber){
  case 0: eightBall = 'It is certain.';
  break;
  case 1: eightBall = 'It is decidedly so';
  break;
  case 2: eightBall = 'Reply hazy try again';
  break;
  case 3: eightBall = 'Cannot predict now';
  break;
  case 4: eightBall = 'Do not count on it';
  break;
  case 5: eightBall = 'My sources say no';
  break;
  case 6: eightBall = 'Outlook not so good';
  break;
  case 7: eightBall = 'Signs point to yes';
  break;
  }

/// prints the 8 balls response to the console ///

  console.log(`From the mirky depths of the magic 8 ball's core comes an answer`)
  console.log(eightBall)
