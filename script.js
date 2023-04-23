const pw1Value = document.querySelector("#pw1");
const pw2Value = document.querySelector("#pw2");
const pwBtn = document.querySelector("#pw-button");
const pwText = document.querySelector("#pwtext");


function isPwEqual() {
    const pwText1 = pw1Value.value;
    const pwText2 = pw2Value.value;
    if (pwText1 === pwText2) {
        pwText.innerText = "✅";
    } else {
        pwText.innerText = "❌"
    }

}
pwBtn.addEventListener("click", isPwEqual);