
async function partitionLomuto(bar, l, r){
    console.log('In partitionLomuto()');
    let i = l - 1;
    
    bar[r].style.background = 'red';
    for(let j = l; j <= r - 1; j++){
        console.log('In partitionLomuto for j');
        
        bar[j].style.background = 'yellow';
        
        await wait(delay);

        if(parseInt(bar[j].style.height) < parseInt(bar[r].style.height)){
            console.log('In partitionLomuto for j if');
            i++;
            swap(bar[i], bar[j]);
            
            bar[i].style.background = 'orange';
            if(i != j) bar[j].style.background = 'orange';
            
            await wait(delay);
        }
        else{
            
            bar[j].style.background = 'pink';
        }
    }
    i++; 
    
    await wait(delay);
    swap(bar[i], bar[r]); 
    console.log(`i = ${i}`, typeof(i));
    
    bar[r].style.background = 'pink';
    bar[i].style.background = 'green';

    
    await wait(delay);
    
    
    for(let k = 0; k < bar.length; k++){
        if(bar[k].style.background != 'green')
            bar[k].style.background = 'cyan';
    }

    return i;
}

async function quickSort(bar, l, r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await partitionLomuto(bar, l, r);
        await quickSort(bar, l, pivot_index - 1);
        await quickSort(bar, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <bar.length && r <bar.length){
            bar[r].style.background = 'green';
            bar[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function(){
    let bar = document.querySelectorAll('.bar');
    let l = 0;
    let r = bar.length - 1;
    await quickSort(bar, l, r);
});