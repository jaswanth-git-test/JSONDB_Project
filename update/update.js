let myFormEl = document.getElementById("myForm");

let nameEl = document.getElementById("name");
let nameErrMsgEl = document.getElementById("nameErrMsg");

let emailEl = document.getElementById("email");
let emailErrMsgEl = document.getElementById("emailErrMsg");
let mobileEl = document.getElementById("mobile");
let mobileErrMsgEl = document.getElementById("mobileErrMsg");

let serialNoEl = document.getElementById("no");
let serialNoErrMsgEl = document.getElementById("SerialNoErrMsg");
nameEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    nameErrMsgEl.textContent = "Required*";
  } else {
    nameErrMsgEl.textContent = "";
  }
});

emailEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    emailErrMsgEl.textContent = "Required*";
  } else {
    emailErrMsgEl.textContent = "";
  }
});
mobileEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    mobileErrMsgEl.textContent = "Required*";
  } else {
    mobileErrMsgEl.textContent = "";
  }
});

serialNoEl.addEventListener("blur", function (event) {
  if (event.target.value === "") {
    serialNoErrMsgEl.textContent = "Required*";
  } else {
    serialNoErrMsgEl.textContent = "";
  }
});

myFormEl.addEventListener("submit", function(event){
  event.preventDefault();
});