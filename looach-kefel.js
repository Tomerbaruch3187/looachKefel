function changeBGToBlack() {
    const root = document.querySelector(':root');
    root.style.setProperty('--mainColor', '#9BA3EB');
    root.style.setProperty('--alternativeColor', 'white');
}

function changeBGToWhite() {
    const root = document.querySelector(':root');
    root.style.setProperty('--mainColor', '#F0EEED');
    root.style.setProperty('--alternativeColor', 'black');
}

for (let x = 0; x <= 10; x++) {
    for (let y = 0; y <= 10; y++) {
        const span = document.createElement('span');
        span.innerHTML = x * y;
        const message = x + ' * ' + y + ' = ' + x * y;
        span.setAttribute('mytitle', message);
        document.body.appendChild(span);

        if (x == 0) {
            span.innerHTML = x + y;
            span.classList.add('highlighted');
            span.onclick = function () {
                num2 = y;
                showResult()
            };
        }

        if (y == 0) {
            span.innerHTML = x + y;
            span.classList.add('highlighted');
            span.onclick = function () {
                num1 = x;
                showResult()
            };
        }



        if (x == 0 && y == 0) {
            span.innerHTML = '❌';
        }
    }
    document.body.appendChild(document.createElement('br'));
}


// לעבור על הקוד

let num1;
let num2;


function showResult() {
    cellCleaning();

    if (num1 != null && num2 != null) {
        const result = num1 * num2;
        const resultSpan = document.querySelector(`span[mytitle = "${num1} * ${num2} = ${result}"]`);
        resultSpan.classList.add('selectedNumber');

        num1 = null;
        num2 = null;
    };
};

function cellCleaning() {
    const selectedNumber = document.querySelector('.selectedNumber');
    if (selectedNumber != null) {
        selectedNumber.classList.remove('selectedNumber');
    };
};

// לעבור על הקוד