let arraySize = document.querySelector('#size_input');

arraySize.addEventListener('input', () => {
    console.log(arraySize.value, typeof(arraySize.value));

    createNewArray(parseInt(arraySize.value));
});

let array = [];

createNewArray();

function createNewArray(noOfBars = 60) {
    deleteBars();

    let array = [];

    for (let i = 0; i < noOfBars; i++) {
        array.push(Math.floor(Math.random() * 200) + 1);
    }
    console.log(array);

    let bars = document.querySelector('#bars');

    for (let i = 0; i < noOfBars; i++) {
        let bar = document.createElement('div');
        bar.style.height = `${array[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deleteBars() {
    let bars = document.querySelector('#bars');
    bars.innerHTML = '';
}

let newArr = document.querySelector('.newArray');

newArr.addEventListener('click', () => {
    console.log('From newArray ' + arraySize.value);
    console.log('From newArray ' + delay.value);
    createNewArray(parseInt(arraySize.value));
});

let delay = 260;
let speed = document.querySelector('#speed_input');

speed.addEventListener('input', () => {
    console.log(speed.value, typeof(speed.value));
    delay = 320 - parseInt(speed.value);
});

function wait(time) {
    return new Promise(res => {
        setTimeout(() => {res('')},
        time);
    });
}

function swap(e1, e2) {
    let temp = e1.style.height;
    e1.style.height = e2.style.height;
    e2.style.height = temp;
}