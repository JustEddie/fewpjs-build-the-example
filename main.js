// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = "♡";
const FULL_HEART = "♥";

// Your JavaScript code goes here!
document.getElementById("modal").classList.add("hidden");

document.querySelectorAll(".like-glyph").forEach((heart) => {
  heart.addEventListener("click", function () {
    mimicServerCall()
      .then(function () {
        if (heart.innerHTML === EMPTY_HEART) {
          heart.innerHTML = FULL_HEART;
          heart.classList.add("activated-heart")
          alert("you liked it!")
        } else {
          heart.innerHTML = EMPTY_HEART;
          heart.classList.remove("activated-heart")
          alert("you don't like it?")
        }
      })
      .catch((err) => {
        document.getElementById("modal").classList.remove("hidden");
        document.getElementById("modal-message").innerText = err.message;
        setTimeout(function(){document.getElementById("modal").classList.add("hidden")},3000)
      });
  });
});

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
