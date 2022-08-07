async function bubble() {
    console.log('In Bubble func...');
    let bar = document.querySelectorAll('.bar');
    for (let i = 0; i < bar.length - 1; i++) {
        for (let j = 0; j < bar.length - i - 1; j++) {
            bar[j].style.background = 'blue';
            bar[j + 1].style.background = 'blue';

            if(parseInt(bar[j].style.height) > parseInt(bar[j + 1].style.height)) {
                await wait(delay);
                swap(bar[j], bar[j + 1]);
            }

            bar[j].style.background = '#fff';
            bar[j + 1].style.background = '#fff';
        }
        bar[bar.length - i - 1].style.background = 'green';
    }
    bar[0].style.background = 'green';
}

let bubSort = document.querySelector('.bubbleSort');

bubSort.addEventListener('click', async function() {
    await bubble();
})