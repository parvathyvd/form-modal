//Dom elements selection
const btnSubmit = document.querySelector(".btn-submit");
const modal = document.querySelector(".modal");
const backdrop = document.querySelector(".backdrop");
const formResult = document.querySelector(".form-result");
const closeBtn = document.querySelector(".close");
const toolBox = document.querySelector(".tool-box");

//creating a User class for form

class User {
  constructor(name, email, phone, message) {
    this.name = name;
    this.email = email;
    this.phone = phone;
    this.message = message;
  }
  onSubmit() {
    formResult.innerHTML = `<p class="pink">${this.name}</p>
    <p class="pink">${this.email}</p>
    <p class="pink">${this.phone}</p>
    <p class="pink">${this.message ? this.message : ""}</p>`;
  }
}

// on form button submit click

btnSubmit.addEventListener("click", (e) => {
  e.preventDefault();
  const fname = document.querySelector("#fname").value;
  const email = document.querySelector("#email").value;
  const phone = document.querySelector("#phone").value;
  const message = document.querySelector("#message").value;

  if (!fname || !email || !phone) {
    formResult.innerHTML = `<p class="pink">Please add all the required fields</p>`;
    modal.classList.remove("hide");
    backdrop.classList.remove("hide");
    return;
  }
  modal.classList.remove("hide");
  backdrop.classList.remove("hide");
  const userOne = new User(fname, email, phone, message);
  userOne.onSubmit();
});

// hide backdrop and modal
const removeBackdropandModal = () => {
  modal.classList.add("hide");
  backdrop.classList.add("hide");
};
closeBtn.addEventListener("click", removeBackdropandModal);
backdrop.addEventListener("click", removeBackdropandModal);

// Toolbox class

class Toolbox {
  constructor(button) {
    this.button = button;
  }
  onToolbarClick() {
    formResult.innerHTML = `<p class="pink">You clicked on ${this.button}</p>`;
  }
}

// Click event on toolbox
toolBox.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    console.log();
    const button = new Toolbox(e.target.innerHTML);
    button.onToolbarClick();
    modal.classList.remove("hide");
    backdrop.classList.remove("hide");
  }
});
