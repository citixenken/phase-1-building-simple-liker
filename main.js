// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!

function likesFunction(event) {
  mimicServerCall()
    .then(function () {
      if (event.target.textContent === EMPTY_HEART) {
        event.target.textContent = FULL_HEART; //change heart to full
        event.target.className = "activated-heart"; //add color to heart
      } else {
        event.target.textContent = EMPTY_HEART; //change heart to empty
        event.target.className = ""; //remove heart color
      }
    })
    .catch(function (error) {
      const errorModal = document.getElementById("modal");
      errorModal.className = ""; //display error modal
      errorModal.textContent = error; //display error message
      setTimeout(() => {
        errorModal.className = "hidden";
      }, 3000); //hide modal after 3 seconds
    });
}

const allHearts = document.querySelectorAll(".like-glyph");

for (const heart of allHearts) {
  heart.addEventListener("click", likesFunction);
}

//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url = "http://mimicServer.example.com", config = {}) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      let isRandomFailure = Math.random() < 0.2;
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
