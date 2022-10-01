let button = document.querySelector(".calc");
button.addEventListener("click", Calculate);

function Calculate() {
    let height = document.getElementById("h-value").value;
    let weight = document.getElementById("w-value").value;

    let result = (weight / (height * height * 0.0001));
    let ideal = 24.9 * (height * height * 0.0001);

    if (!+result) {
        document.querySelector(".bmi-result").textContent = "";
        document.querySelector(".condition-result").textContent = "";
        document.querySelector(".w-ideal").textContent = "";
        alert("Erro! Digite apenas valores numéricos!");
    } else {
        if (result < 18.5) {
            document.querySelector(".bmi-result").textContent = result;
            document.querySelector(".condition-result").textContent = "Magreza";
            document.querySelector(".w-ideal").textContent = 18.5 * (height * height * 0.0001);
        } else if (result >= 18.5 && result < 25) {
            document.querySelector(".bmi-result").textContent = result;
            document.querySelector(".condition-result").textContent = "Normal";
            document.querySelector(".w-ideal").textContent = "";
        } else if (result >= 25 && result < 30) {
            document.querySelector(".bmi-result").textContent = result;
            document.querySelector(".condition-result").textContent = "Sobrepeso";
            document.querySelector(".w-ideal").textContent = ideal;
        } else if (result >= 30 && result < 35) {
            document.querySelector(".bmi-result").textContent = result;
            document.querySelector(".condition-result").textContent = "Obesidade grau I";
            document.querySelector(".w-ideal").textContent = ideal;
        } else if (result >= 35 && result < 40) {
            document.querySelector(".bmi-result").textContent = result;
            document.querySelector(".condition-result").textContent = "Obesidade grau II";
            document.querySelector(".w-ideal").textContent = ideal;
        } else {
            document.querySelector(".bmi-result").textContent = result;
            document.querySelector(".condition-result").textContent = "Obesidade grau III";
            document.querySelector(".w-ideal").textContent = ideal;
        }
    }
}