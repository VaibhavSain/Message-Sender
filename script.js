const messInp = document.querySelector("#messInp");
const btn = document.querySelector(".btn");
const message = document.querySelector("#message");

btn.addEventListener("click", passInp);

function passInp() {
    message.value = messInp.value;
}

