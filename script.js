// const generateLove = document.getElementById('love');
// const randomLoveDisplay = document.getElementById('showlove');


// function generateRandomLove() {
  
//   let randomNum = Math.floor(Math.random() * 100) + 1;

//   // Display the random number in the paragraph element
//   randomLoveDisplay.textContent = 'Your Love percentage is: ' + randomNum;
// }

// // Add event listener to the button
// generateLove.addEventListener('click', generateRandomLove);

function calculateLove() {
  let person1 = document.getElementById('person1').value.trim();
  let person2 = document.getElementById('person2').value.trim();

  if (person1 === '' || person2 ===''){
    alert('please enter the number of both people');
    return;
  }
  
  let loveScore = Math.floor(Math.random()*101);
  let result = document.getElementById('result');
  result.innerHTML = <p>${person1} and ${person2} have a love score of ${loveScore}%</p>
}

