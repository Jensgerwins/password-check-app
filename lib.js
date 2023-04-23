export function pwequal(pw1, pw2) {
    const areEqual = pw1 === pw2;
    return areEqual;
}





export function App() {

    const pw1Value = document.querySelector("#pw1");
    const pw2Value = document.querySelector("#pw2");
    const pwBtn = document.querySelector("#pw-button");
    const pwText = document.querySelector("#pwtext");


    function isPwEqual() {
        const check = pwequal(pw1Value.value, pw2Value.value);
        if (check) {
            pwText.innerText = "✅";
        } else {
            pwText.innerText = "❌"
        }

    }


    pwBtn.addEventListener("click", isPwEqual);


}
