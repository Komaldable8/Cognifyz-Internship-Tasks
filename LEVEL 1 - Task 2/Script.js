const colors = ['blue', 'green', 'purple', 'orange', 'pink', 'yellow'];
let colorIndex = 0;

function changecolor() {
    const button = document.querySelector('.color-button');
    button.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length;
}

function displaygreeting() {
    const now = new Date();
    const hours = now.getHours();
    let greeting;

    if (hours < 12) {
        greeting = "Good Morning!";
    } else if (hours < 18) {
        greeting = "Good Afternoon!";
    } else {
        greeting = "Good Evening!";
    }

    document.getElementById('greetingMessage').innerText = greeting;
    document.getElementById('greetingModel').style.display = 'flex';
}

function closeModel() {
    document.getElementById('greetingModel').style.display = 'none';
}

function calculateSum() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Please fill out both fields.");
        return;
    }

    document.getElementById('result').innerText = num1 + num2;
}
