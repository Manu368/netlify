

// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;
// let animationInterval; 

// function resetGame() {
//     // Clear selected options and their styles
    

//     // Reset image display
//     a.style.display = 'none';
//     b.style.display = 'none';

//     // Clear image names
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
// }



// // Variable to hold the interval reference

// // Show the first slide and add the 'active' class
// slides[currentSlide].classList.add('active');
// for (let i = 1; i < slides.length; i++) {
//     slides[i].classList.remove('active'); // Remove 'active' class from other slides
// }

// function showNextSlide() {
//     slides[currentSlide].classList.remove('active'); // Remove 'active' class from the current slide
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active'); // Add 'active' class to the next slide
// }

// // Function to start the animation with a given interval
// function startAnimation(interval) {
//     animationInterval = setInterval(showNextSlide, interval);
// }

// function stopAnimation() {
//     clearInterval(animationInterval); // Stop the animation
// }

// // Get your HTML elements
// const rockOption = document.getElementById('rocks');
// const paperOption = document.getElementById('papers');
// const scissorsOption = document.getElementById('scissors');
// const playButton = document.getElementById('button02');
// const spinner = document.getElementById('spinner');
// const a = document.getElementById("aa");
// const b = document.getElementById("bb");
// const c = document.getElementById("versus");
// const res = document.getElementById("manu");

// let selectedOption = null; 

// function selectOption(optionElement) {
//     if (selectedOption) {
//         selectedOption.classList.remove('selected');
//     }
//     selectedOption = optionElement;
//     selectedOption.classList.add('selected');
// }

// function showSlideshow() {
//     const slideshow = document.querySelector('.slideshow');
//     slideshow.style.display = 'block';
    
    
// }


// showSlideshow();

// window.addEventListener('load', () => {
//     showSlideshow();
//     startAnimation(1000);
//     c.style.display = "none";
// });

// // Click event handlers for the image options
// rockOption.addEventListener('click', () => {
//     selectOption(rockOption);
//     a.style.display = "none";
//     b.style.display = "none";
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
//     c.style.display = "none";
//     showSlideshow();
//     resetGame();
//      // Show the slideshow animation
//     // ...
// });

// paperOption.addEventListener('click', () => {
//     selectOption(paperOption);
//     a.style.display = "none";
//     b.style.display = "none";
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
//     showSlideshow();
//     resetGame();
//     c.style.display = "none";// Show the slideshow animation
//     // ...
// });

// scissorsOption.addEventListener('click', () => {
//     selectOption(scissorsOption);
//     showSlideshow(); 
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
//     a.style.display = "none";
//     b.style.display = "none";
//     resetGame();
//     c.style.display = "none";// Show the slideshow animation
//     // ...
// });



// // Click event handler for the play button
// playButton.addEventListener('click', () => {
//     if (!selectedOption) {
//         alert("Please Select any Option first");
//     } else {
//         // Add spinner animation classes
//         playButton.classList.add('loading');
//         playButton.textContent = 'Playing...';
//         spinner.style.display = 'block';
//         a.style.display = "none";
//         b.style.display = "none";
//         c.style.display = "none";

//         showSlideshow();

//         startAnimation(1000); // Start initial animation with 1-second interval

//         setTimeout(() => {
//             stopAnimation(); // Stop initial animation after 5 seconds
//             startAnimation(500); // Start animation with 0.5-second interval

//             setTimeout(() => {
//                 // Stop increased speed animation after 5 seconds
//                 stopAnimation();
//                 // Display a random image
//                 const randomIndex = Math.floor(Math.random() * slides.length);
//                 slides[currentSlide].classList.remove('active');
//                 currentSlide = randomIndex;
//                 slides[currentSlide].classList.add('active');

//                 // Set the source of the random image
//                 a.src = slides[currentSlide].querySelector('img').src;


//                 // Set the source of the user-selected image
//                 b.src = selectedOption.querySelector('img').src;

//                 // Show the images
//                 a.style.display = 'block';
//                 b.style.display = 'block';
//                 c.style.display = 'block';
                
            



//                 // Hide the slideshow
//                 const slideshow = document.querySelector('.slideshow');
//                 slideshow.style.display = 'none';


//                 if (a.style.display === 'block' && b.style.display === 'block') {
//                     setTimeout(() => {
//                         // Determine the winner
//                         if (a.src === b.src) {
//                             resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692877514/aa-removebg-preview_btrjsi.png";
//                         } else if (
//                             (a.src === "https://xaxino.eu/assets/templates/basic//images/play/rock.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/paper.png") ||
//                             (a.src === "https://xaxino.eu/assets/templates/basic//images/play/scissors.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/rock.png") ||
//                             (a.src === "https://xaxino.eu/assets/templates/basic//images/play/paper.png" && b.src === ("https://xaxino.eu/assets/templates/basic//images/play/scissors.png"))
//                         ) {
//                             resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-win-neon-signs-style-text-vector-removebg-preview_thyqjb.png";
//                         } else {
//                             resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png";
//                         }
                        

//                         // Show the result in the popup
//                     const resultDisplay = document.getElementById('resultDisplay');
//                     const resultTextElement = document.getElementById('resultImage');
//                     resultTextElement.src = resultText; 
//                     resultDisplay.style.display = 'block';


                    

//                     }, 1000); // Delayed execution of the result text
//                 }
//                 // Remove spinner animation classes
//                 playButton.classList.remove('loading');
//                 playButton.textContent = 'Play Now';
//                 spinner.style.display = 'none';
//                 setTimeout(function(){
//                     $('#exampleModal').modal('show');
//                 }, 1500);
                
//             }, 4500); 
//         }, 4500);
//     }
// });







// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;
// let animationInterval; 

// function resetGame() {
//     // Clear selected options and their styles

//     // Reset image display
//     a.style.display = 'none';
//     b.style.display = 'none';

//     // Clear image names
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
// }

// // Variable to hold the interval reference

// // Show the first slide and add the 'active' class
// slides[currentSlide].classList.add('active');
// for (let i = 1; i < slides.length; i++) {
//     slides[i].classList.remove('active'); // Remove 'active' class from other slides
// }

// function showNextSlide() {
//     slides[currentSlide].classList.remove('active'); // Remove 'active' class from the current slide
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active'); // Add 'active' class to the next slide
// }

// // Function to start the animation with a given interval
// function startAnimation(interval) {
//     animationInterval = setInterval(showNextSlide, interval);
// }

// function stopAnimation() {
//     clearInterval(animationInterval); // Stop the animation
// }

// // Get your HTML elements
// const rockOption = document.getElementById('rocks');
// const paperOption = document.getElementById('papers');
// const scissorsOption = document.getElementById('scissors');
// const playButton = document.getElementById('button02');
// const spinner = document.getElementById('spinner');
// const a = document.getElementById("aa");
// const b = document.getElementById("bb");
// const c = document.getElementById("versus");
// const res = document.getElementById("manu");

// let selectedOption = null; 

// function selectOption(optionElement) {
//     if (selectedOption) {
//         selectedOption.classList.remove('selected');
//     }
//     selectedOption = optionElement;
//     selectedOption.classList.add('selected');
// }

// function showSlideshow() {
//     const slideshow = document.querySelector('.slideshow');
//     slideshow.style.display = 'block';
// }

// showSlideshow();

// window.addEventListener('load', () => {
//     showSlideshow();
//     startAnimation(1000);
//     c.style.display = "none";
// });

// // Click event handlers for the image options
// rockOption.addEventListener('click', () => {
//     selectOption(rockOption);
//     a.style.display = "none";
//     b.style.display = "none";
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
//     c.style.display = "none";
//     showSlideshow();
//     resetGame();
//      // Show the slideshow animation
//     // ...
// });

// paperOption.addEventListener('click', () => {
//     selectOption(paperOption);
//     a.style.display = "none";
//     b.style.display = "none";
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
//     showSlideshow();
//     resetGame();
//     c.style.display = "none";// Show the slideshow animation
//     // ...
// });

// scissorsOption.addEventListener('click', () => {
//     selectOption(scissorsOption);
//     showSlideshow(); 
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
//     a.style.display = "none";
//     b.style.display = "none";
//     resetGame();
//     c.style.display = "none";// Show the slideshow animation
//     // ...
// });

// // Timer variables
// const timerElement = document.getElementById('timer02');
// let countdown = 150;
// let timerInterval;

// // Input field and image options
// const inputField = document.querySelector('.form01');

// // Function to start the timer
// function startTimer() {
//     timerInterval = setInterval(() => {
//         countdown--;
//         timerElement.textContent = countdown;

//         if (countdown <= 10) {
//             inputField.disabled = true; // Disable input field
//             rockOption.removeEventListener('click', handleImageSelection);
//             paperOption.removeEventListener('click', handleImageSelection);
//             scissorsOption.removeEventListener('click', handleImageSelection);
//         }

//         if (countdown === 0) {
//             clearInterval(timerInterval); // Stop the timer
//             handleGamePlay(); // Trigger the game logic
//         }
//     }, 1000); // Update the countdown every 1 second
// }

// // Function to handle image selection
// function handleImageSelection(event) {
//     if (countdown > 10) {
//         const clickedOption = event.currentTarget;

//         // Remove the selected class from all options
//         rockOption.classList.remove('selected');
//         paperOption.classList.remove('selected');
//         scissorsOption.classList.remove('selected');

//         // Add the selected class to the clicked option
//         clickedOption.classList.add('selected');

//         selectedOption = clickedOption;
//     }
// }

// // Add a click event listener to each image option
// rockOption.addEventListener('click', handleImageSelection);
// paperOption.addEventListener('click', handleImageSelection);
// scissorsOption.addEventListener('click', handleImageSelection);

// // Function to handle the game play logic
// function handleGamePlay() {
//     if (!selectedOption) {
//         alert("Please Select any Option first");
//     } else {
//         // Add spinner animation classes
//         playButton.classList.add('loading');
//         playButton.textContent = 'Playing...';
//         spinner.style.display = 'block';
//         a.style.display = "none";
//         b.style.display = "none";
//         c.style.display = "none";

//         showSlideshow();

//         startAnimation(1000); // Start initial animation with 1-second interval

//         setTimeout(() => {
//             stopAnimation(); // Stop initial animation after 5 seconds
//             startAnimation(500); // Start animation with 0.5-second interval

//             setTimeout(() => {
//                 // Stop increased speed animation after 5 seconds
//                 stopAnimation();
//                 // Display a random image
//                 const randomIndex = Math.floor(Math.random() * slides.length);
//                 slides[currentSlide].classList.remove('active');
//                 currentSlide = randomIndex;
//                 slides[currentSlide].classList.add('active');

//                 // Set the source of the random image
//                 a.src = slides[currentSlide].querySelector('img').src;

//                 // Set the source of the user-selected image
//                 b.src = selectedOption.querySelector('img').src;

//                 // Show the images
//                 a.style.display = 'block';
//                 b.style.display = 'block';
//                 c.style.display = 'block';

//                 // Hide the slideshow
//                 const slideshow = document.querySelector('.slideshow');
//                 slideshow.style.display = 'none';

//                 if (a.style.display === 'block' && b.style.display === 'block') {
//                     setTimeout(() => {
//                         // Determine the winner
//                         let resultText;
//                         if (a.src === b.src) {
//                             resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692877514/aa-removebg-preview_btrjsi.png";
//                         } else if (
//                             (a.src === "https://xaxino.eu/assets/templates/basic//images/play/rock.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/paper.png") ||
//                             (a.src === "https://xaxino.eu/assets/templates/basic//images/play/scissors.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/rock.png") ||
//                             (a.src === "https://xaxino.eu/assets/templates/basic//images/play/paper.png" && b.src === ("https://xaxino.eu/assets/templates/basic//images/play/scissors.png"))
//                         ) {
//                             resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-win-neon-signs-style-text-vector-removebg-preview_thyqjb.png";
//                         } else {
//                             resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png";
//                         }

//                         // Show the result in the popup
//                         const resultDisplay = document.getElementById('resultDisplay');
//                         const resultTextElement = document.getElementById('resultImage');
//                         resultTextElement.src = resultText; 
//                         resultDisplay.style.display = 'block';

//                     }, 1000); // Delayed execution of the result text
//                 }
//                 // Remove spinner animation classes
//                 playButton.classList.remove('loading');
//                 playButton.textContent = 'Play Now';
//                 spinner.style.display = 'none';
//                 setTimeout(function(){
//                     $('#exampleModal').modal('show');
//                 }, 1500);

//             }, 4500); 
//         }, 4500);
//     }
// };

// // Initialize the timer and enable input/selection
// startTimer();







// const slides = document.querySelectorAll('.slide');
// let currentSlide = 0;
// let animationInterval;

// function resetGame() {
//     // Clear selected options and their styles

//     // Reset image display
//     a.style.display = 'none';
//     b.style.display = 'none';

//     // Clear image names
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
// }

// // Variable to hold the interval reference

// // Show the first slide and add the 'active' class
// slides[currentSlide].classList.add('active');
// for (let i = 1; i < slides.length; i++) {
//     slides[i].classList.remove('active'); // Remove 'active' class from other slides
// }

// function showNextSlide() {
//     slides[currentSlide].classList.remove('active'); // Remove 'active' class from the current slide
//     currentSlide = (currentSlide + 1) % slides.length;
//     slides[currentSlide].classList.add('active'); // Add 'active' class to the next slide
// }

// // Function to start the animation with a given interval
// function startAnimation(interval) {
//     animationInterval = setInterval(showNextSlide, interval);
// }

// function stopAnimation() {
//     clearInterval(animationInterval); // Stop the animation
// }

// // Get your HTML elements
// const rockOption = document.getElementById('rocks');
// const paperOption = document.getElementById('papers');
// const scissorsOption = document.getElementById('scissors');
// const playButton = document.getElementById('button02');
// const spinner = document.getElementById('spinner');
// const a = document.getElementById("aa");
// const b = document.getElementById("bb");
// const c = document.getElementById("versus");
// const res = document.getElementById("manu");

// let selectedOption = null;

// function selectOption(optionElement) {
//     if (selectedOption) {
//         selectedOption.classList.remove('selected');
//     }
//     selectedOption = optionElement;
//     selectedOption.classList.add('selected');
// }

// function showSlideshow() {
//     const slideshow = document.querySelector('.slideshow');
//     slideshow.style.display = 'block';
// }

// showSlideshow();

// window.addEventListener('load', () => {
//     showSlideshow();
//     startAnimation(1000);
//     c.style.display = "none";
// });

// // Click event handlers for the image options
// rockOption.addEventListener('click', () => {
//     if (isImageSelectionEnabled()) {
//         selectOption(rockOption);
//         a.style.display = "none";
//         b.style.display = "none";
//         document.getElementById('handNameA').textContent = "";
//         document.getElementById('handNameB').textContent = "";
//         c.style.display = "none";
//         showSlideshow();
//         resetGame();
//     }
//     // Show the slideshow animation
//     // ...
// });

// paperOption.addEventListener('click', () => {
//     if (isImageSelectionEnabled()) {
//         selectOption(paperOption);
//         a.style.display = "none";
//         b.style.display = "none";
//         document.getElementById('handNameA').textContent = "";
//         document.getElementById('handNameB').textContent = "";
//         showSlideshow();
//         resetGame();
//         c.style.display = "none"; // Show the slideshow animation
//         // ...
//     }
// });

// scissorsOption.addEventListener('click', () => {
//     if (isImageSelectionEnabled()) {
//         selectOption(scissorsOption);
//         showSlideshow();
//         document.getElementById('handNameA').textContent = "";
//         document.getElementById('handNameB').textContent = "";
//         a.style.display = "none";
//         b.style.display = "none";
//         resetGame();
//         c.style.display = "none"; // Show the slideshow animation
//         // ...
//     }
// });

// // Timer variables
// const timerElement = document.getElementById('timer02');
// let countdown = 20;
// let timerInterval;

// // Input field and image options
// const inputField = document.querySelector('.form01');

// // Function to check if image selection is enabled
// function isImageSelectionEnabled() {
//     return countdown <= 20 && countdown >= 10
//     ;
// }

// // Function to start the timer
// // Function to start the timer
// function startTimer() {
//     timerInterval = setInterval(() => {
//         countdown--;
//         timerElement.textContent = countdown;

//         if (countdown <= 10) {
//             inputField.disabled = true; // Disable input field
//             rockOption.removeEventListener('click', handleImageSelection);
//             paperOption.removeEventListener('click', handleImageSelection);
//             scissorsOption.removeEventListener('click', handleImageSelection);
//             timerElement.style.color = 'red'; 
//             document.getElementById("timer01").style.color = 'red';

//             var elementsToFade = document.querySelectorAll('.input-group, .butn03, .button02, .asia01');
//             elementsToFade.forEach(function (element) {
//               element.classList.add('opacity-05');
//             });
//         }

//         if (countdown === 0) {
//             clearInterval(timerInterval); // Stop the timer
//             handleGamePlay(); // Trigger the game logic
//         }

//         if (countdown === 10) {
//             // Start animation when the timer reaches 10 seconds
//             startAnimation(1000);
//         }
//     }, 1000); // Update the countdown every 1 second
// }

// // Function to handle image selection
// function handleImageSelection(event) {
//     if (isImageSelectionEnabled()) {
//         const clickedOption = event.currentTarget;

//         // Remove the selected class from all options
//         rockOption.classList.remove('selected');
//         paperOption.classList.remove('selected');
//         scissorsOption.classList.remove('selected');

//         // Add the selected class to the clicked option
//         clickedOption.classList.add('selected');

//         selectedOption = clickedOption;
//     }
// }

// // Add a click event listener to each image option
// rockOption.addEventListener('click', handleImageSelection);
// paperOption.addEventListener('click', handleImageSelection);
// scissorsOption.addEventListener('click', handleImageSelection);

// // Function to handle the game play logic
// // Function to handle the game play logic
// function handleGamePlay() {
//     if (!selectedOption) {
//         alert("Please Select any Option first");
//     } else {
//         // Add spinner animation classes
        
//         spinner.style.display = 'block';
//         a.style.display = "none";
//         b.style.display = "none";
//         c.style.display = "none";

//         showSlideshow();

//         // startAnimation(1000); // Start initial animation with 1-second interval

//         setTimeout(() => {
//             stopAnimation(); // Stop initial animation after 5 seconds
//             // startAnimation(500); // Start animation with 0.5-second interval

//             setTimeout(() => {
//                 // Stop increased speed animation after 5 seconds
//                 stopAnimation();
//                 // Display a random image
//                 const randomIndex = Math.floor(Math.random() * slides.length);
//                 slides[currentSlide].classList.remove('active');
//                 currentSlide = randomIndex;
//                 slides[currentSlide].classList.add('active');

//                 // Set the source of the random image
//                 a.src = slides[currentSlide].querySelector('img').src;

//                 // Set the source of the user-selected image
//                 b.src = selectedOption.querySelector('img').src;

//                 // Show the images
//                 a.style.display = 'block';
//                 b.style.display = 'block';
//                 c.style.display = 'block';

//                 // Hide the slideshow
//                 const slideshow = document.querySelector('.slideshow');
//                 slideshow.style.display = 'none';

//                 // Delay the result display by 1 second
//                 setTimeout(() => {
//                     // Determine the winner
//                     let resultText;
//                     if (a.src === b.src) {
//                         resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692877514/aa-removebg-preview_btrjsi.png";
//                     } else if (
//                         (a.src === "https://xaxino.eu/assets/templates/basic//images/play/rock.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/paper.png") ||
//                         (a.src === "https://xaxino.eu/assets/templates/basic//images/play/scissors.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/rock.png") ||
//                         (a.src === "https://xaxino.eu/assets/templates/basic//images/play/paper.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/scissors.png")
//                     ) {
//                         resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-win-neon-signs-style-text-vector-removebg-preview_thyqjb.png";
//                     } else {
//                         resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png";
//                     }

//                     // Show the result in the popup
//                     const resultDisplay = document.getElementById('resultDisplay');
//                     const resultTextElement = document.getElementById('resultImage');
//                     resultTextElement.src = resultText;
//                     resultDisplay.style.display = 'block';
//                 }, 1000); // Delayed execution of the result text

//                 // Remove spinner animation classes
//                 playButton.classList.remove('loading');
//                 playButton.textContent = 'Play Now';
//                 spinner.style.display = 'none';
//                 setTimeout(function () {
//                     $('#exampleModal').modal('show');
//                 }, 1500);

//             }, 1000);
//         }, 500);
//     }
// }

// const ab = document.getElementById("close02");
// ab.addEventListener("click", function () {
//     countdown = 20; // Reset the countdown to its initial value
//     timerElement.textContent = countdown; // Update the timer display
//     startTimer();

//     // Clear selected options and their styles
//     const selectedOptions = document.querySelectorAll('.selected');
//     selectedOptions.forEach(function (option) {
//         option.classList.remove('selected');
//     });

//     // Reset image display
//     a.style.display = 'none';
//     b.style.display = 'none';

//     // Clear image names
//     document.getElementById('handNameA').textContent = "";
//     document.getElementById('handNameB').textContent = "";
//     document.getElementById("versus").style.display = "none";
//     timerElement.style.color = ""; 
//     document.getElementById("timer01").style.color = "";

//     // Reset selected option
//     selectedOption = null;

//     // Show the slideshow immediately
//     showSlideshow();
// });

// // Initialize the timer and enable input/selection
// startTimer();



const slides = document.querySelectorAll('.slide');
let currentSlide = 0;
let animationInterval;

function resetGame() {
    // Clear selected options and their styles

    // Reset image display
    a.style.display = 'none';
    b.style.display = 'none';

    // Clear image names
    document.getElementById('handNameA').textContent = "";
    document.getElementById('handNameB').textContent = "";
}

// Variable to hold the interval reference

// Show the first slide and add the 'active' class
slides[currentSlide].classList.add('active');
for (let i = 1; i < slides.length; i++) {
    slides[i].classList.remove('active'); // Remove 'active' class from other slides
}

function showNextSlide() {
    slides[currentSlide].classList.remove('active'); // Remove 'active' class from the current slide
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active'); // Add 'active' class to the next slide
}

// Function to start the animation with a given interval
function startAnimation(interval) {
    animationInterval = setInterval(showNextSlide, interval);
}

function stopAnimation() {
    clearInterval(animationInterval); // Stop the animation
}

// Get your HTML elements
const rockOption = document.getElementById('rocks');
const paperOption = document.getElementById('papers');
const scissorsOption = document.getElementById('scissors');
const playButton = document.getElementById('button02');
const spinner = document.getElementById('spinner');
const a = document.getElementById("aa");
const b = document.getElementById("bb");
const c = document.getElementById("versus");
const res = document.getElementById("manu");

let selectedOption = null;

// Get the <select> element
const selectElement = document.getElementById('inputState');

// Get the <span> element
const betAmountDisplay = document.getElementById('betAmountDisplay');

// Add an event listener to the <select> element
selectElement.addEventListener('change', function () {
    // Get the selected option
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    
    // Get the data-balance attribute value from the selected option
    const balance = selectedOption.getAttribute('data-balance');
    
    // Update the text of the <span> element
    betAmountDisplay.textContent = balance + ' Rupees';
});


function selectOption(optionElement) {
    if (selectedOption) {
        selectedOption.classList.remove('selected');
    }
    selectedOption = optionElement;
    selectedOption.classList.add('selected');
}

function showSlideshow() {
    const slideshow = document.querySelector('.slideshow');
    slideshow.style.display = 'block';
}

showSlideshow();

window.addEventListener('load', () => {
    showSlideshow();
    startAnimation(1000);
    c.style.display = "none";
});

// Click event handlers for the image options
rockOption.addEventListener('click', () => {
    if (isImageSelectionEnabled()) {
        selectOption(rockOption);
        a.style.display = "none";
        b.style.display = "none";
        document.getElementById('handNameA').textContent = "";
        document.getElementById('handNameB').textContent = "";
        c.style.display = "none";
        showSlideshow();
        resetGame();
    }
    // Show the slideshow animation
    // ...
});

paperOption.addEventListener('click', () => {
    if (isImageSelectionEnabled()) {
        selectOption(paperOption);
        a.style.display = "none";
        b.style.display = "none";
        document.getElementById('handNameA').textContent = "";
        document.getElementById('handNameB').textContent = "";
        showSlideshow();
        resetGame();
        c.style.display = "none"; // Show the slideshow animation
        // ...
    }
});

scissorsOption.addEventListener('click', () => {
    if (isImageSelectionEnabled()) {
        selectOption(scissorsOption);
        showSlideshow();
        document.getElementById('handNameA').textContent = "";
        document.getElementById('handNameB').textContent = "";
        a.style.display = "none";
        b.style.display = "none";
        resetGame();
        c.style.display = "none"; // Show the slideshow animation
        // ...
    }
});

// Timer variables
const timerElement = document.getElementById('timer02');
let countdown = 20;
let timerInterval;

// Function to check if image selection is enabled
function isImageSelectionEnabled() {
    return countdown <= 20 && countdown >= 10;
}

// Function to start the timer
function startTimer() {
    timerInterval = setInterval(() => {
        countdown--;
        timerElement.textContent = countdown;

        if (countdown <= 10) {
            timerElement.style.color = 'red';
            document.getElementById("timer01").style.color = 'red';

            var elementsToFade = document.querySelectorAll('.input-group, .butn03, .button02, .asia01');
            elementsToFade.forEach(function (element) {
                element.classList.add('opacity-05');
            });
        }

        if (countdown === 0) {
            clearInterval(timerInterval); // Stop the timer
            handleGamePlay(); // Trigger the game logic
        }

        if (countdown === 10) {
            // Start animation when the timer reaches 10 seconds
            startAnimation(1000);
        }
    }, 1000); // Update the countdown every 1 second
}

// Function to handle image selection
function handleImageSelection(event) {
    if (isImageSelectionEnabled()) {
        const clickedOption = event.currentTarget;

        // Remove the selected class from all options
        rockOption.classList.remove('selected');
        paperOption.classList.remove('selected');
        scissorsOption.classList.remove('selected');

        // Add the selected class to the clicked option
        clickedOption.classList.add('selected');

        selectedOption = clickedOption;
    }
}

// Add a click event listener to each image option
rockOption.addEventListener('click', handleImageSelection);
paperOption.addEventListener('click', handleImageSelection);
scissorsOption.addEventListener('click', handleImageSelection);

// Function to handle the game play logic
function handleGamePlay() {
    if (!selectedOption) {
        alert("Please Select any Option first");
    } else {
        // Add spinner animation classes
        spinner.style.display = 'block';
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        showSlideshow();

        setTimeout(() => {
            stopAnimation();
            setTimeout(() => {
                stopAnimation();
                // Display a random image
                const randomIndex = Math.floor(Math.random() * slides.length);
                slides[currentSlide].classList.remove('active');
                currentSlide = randomIndex;
                slides[currentSlide].classList.add('active');

                // Set the source of the random image
                a.src = slides[currentSlide].querySelector('img').src;

                // Set the source of the user-selected image
                b.src = selectedOption.querySelector('img').src;

                // Show the images
                a.style.display = 'block';
                b.style.display = 'block';
                c.style.display = 'block';

                // Hide the slideshow
                const slideshow = document.querySelector('.slideshow');
                slideshow.style.display = 'none';

                setTimeout(() => {
                    // Determine the winner
                    let resultText;
                    if (a.src === b.src) {
                        resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692877514/aa-removebg-preview_btrjsi.png";
                    } else if (
                        (a.src === "https://xaxino.eu/assets/templates/basic//images/play/rock.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/paper.png") ||
                        (a.src === "https://xaxino.eu/assets/templates/basic//images/play/scissors.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/rock.png") ||
                        (a.src === "https://xaxino.eu/assets/templates/basic//images/play/paper.png" && b.src === "https://xaxino.eu/assets/templates/basic//images/play/scissors.png")
                    ) {
                        resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-win-neon-signs-style-text-vector-removebg-preview_thyqjb.png";
                    } else {
                        resultText = "https://res.cloudinary.com/dqrttxm5s/image/upload/v1692874693/you-lose-comic-speech-bubble-cartoon-game-assets-vector-9673681-removebg-preview_dowzhf.png";
                    }

                    // Show the result in the popup
                    const resultDisplay = document.getElementById('resultDisplay');
                    const resultTextElement = document.getElementById('resultImage');
                    resultTextElement.src = resultText;
                    resultDisplay.style.display = 'block';
                }, 1000);

                // Remove spinner animation classes
                playButton.classList.remove('loading');
                playButton.textContent = 'Play Now';
                spinner.style.display = 'none';
                setTimeout(function () {
                    $('#exampleModal').modal('show');
                }, 1500);

            }, 1000);
        }, 500);
    }
}

const ab = document.getElementById("close02");
ab.addEventListener("click", function () {
    countdown = 20;
    timerElement.textContent = countdown;
    startTimer();

    // Clear selected options and their styles
    const selectedOptions = document.querySelectorAll('.selected');
    selectedOptions.forEach(function (option) {
        option.classList.remove('selected');
    });

    var elementsToFade = document.querySelectorAll('.input-group, .butn03, .button02, .asia01');
    elementsToFade.forEach(function (element) {
        element.classList.remove('opacity-05');
    });

    // Reset image display
    a.style.display = 'none';
    b.style.display = 'none';

    // Clear image names
    document.getElementById('handNameA').textContent = "";
    document.getElementById('handNameB').textContent = "";
    document.getElementById("versus").style.display = "none";
    timerElement.style.color = "";
    document.getElementById("timer01").style.color = "";

    // Reset selected option
    selectedOption = null;

    // Show the slideshow immediately
    showSlideshow();
});

// Initialize the timer and enable input/selection
startTimer();
