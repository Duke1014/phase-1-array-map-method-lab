const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = (input) => {
  return tutorials.map( line => {
    const tokens = line.split(' ');
    const capitalizedTokens =
      tokens.map( token => token.charAt(0).toUpperCase() + token.slice(1) );
    const response = capitalizedTokens.join(' ');
    return response;
  });
}


// const titleCased = (input) => {
//   return tutorials.map(function (tutorial) {
//     const newTutorials = tutorial.split(' ')
//     console.log(newTutorials)
//     const capitalizedTutorials = 
//     newTutorials.map((word) => {
//       word.charAt(0).toUpperCase() + word.slice(1)
//       // console.log(capitalizedTutorials)
//       const response = capitalizedTutorials.join(' ')
//       return response
//       // console.log(thing)
//       // return thing.join(' ').map ((word) => {
//       //   return word
//       // })
//     })
//   })
// }
// titleCased.join(' ')

// function titleCased() {
//   // const newArray = []

//   const newTutorials = tutorials.map(eachTutorial => {
//     return eachTutorial.split(' ');
//   })
  
  // for (let i = 0; i < newTutorials.length; i++) {
    // newText[i] = newText[i][0]
    
    // console.log(newTutorials[i][0][0].toUpperCase())
    // console.log(newTutorials[i][0])
   // newArray.push(newTutorials[0])
    // console.log(newTutorials)
  
// }

// we take each tutorial and .split(' ') each apart into separate words

// using a for loop (let i = 0; i < tutorials.length; i++),
// we take the first letter of each word, .toUpperCase() it, then blablablbalbalblablalblablabl



// expected strings:

// "What Does The This Keyword Mean?",
// "What Is The Constructor OO Pattern?",
// "Implementing Blockchain Web API",
// "The Test Driven Development Workflow",
// "What Is NaN And How Can We Check For It",
// "What Is The Difference Between StopPropagation And PreventDefault?",
// "Immutable State And Pure Functions",
// "What Is The Difference Between == And ===?",
// "What Is The Difference Between Event Capturing And Bubbling?",
// "What Is JSONP?"