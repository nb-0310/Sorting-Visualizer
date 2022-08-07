async function selection(){
    console.log('In selection()');
    const bar = document.querySelectorAll(".bar");
    for(let i = 0; i < bar.length; i++){
        console.log('In ith loop');
        let min_index = i;
        bar[i].style.background = 'blue';
        for(let j = i+1; j < bar.length; j++){
            console.log('In jth loop');
            bar[j].style.background = 'red';

            await wait(delay);
            if(parseInt(bar[j].style.height) < parseInt(bar[min_index].style.height)){
                console.log('In if condition height comparision');
                if(min_index !== i){
                    bar[min_index].style.background = 'cyan';
                }
                min_index = j;
            } 
            else{
                bar[j].style.background = 'cyan';
            }   
        }
        await wait(delay);
        swap(bar[min_index], bar[i]);
        bar[min_index].style.background = 'cyan';
        bar[i].style.background = 'green';
    }
}

const selectionSortbtn = document.querySelector(".selectionSort");
selectionSortbtn.addEventListener('click', async function(){
    await selection();
});