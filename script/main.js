console.log('go to the frigde');
console.log('open the frigde');
console.log('search for the sausage');
console.log('take sausage');
console.log('close the frigde');

const Fridge = document.querySelector('select[name="fridge"]');
const elShelf = document.querySelector('select[name="shelf"]');
const elStatus = document.querySelector('.status > span');
const elStatus2 = document.querySelector('.status2 > span');

const run = () => {
    const valueFridge = Fridge.value;
    const valueShelf = elShelf.value;

    if(valueFridge === 'close') {
        elStatus.innerHTML = 'close';
        return;
    }
    if(valueFridge === 'open') {
        elStatus.innerHTML = 'open';
        
    }
    if(valueShelf === 'shelf 1') {
        elStatus2.innerHTML = 'Ковбаси нема, є тільки кошаче їдло';
        return;
    }
    //else {
        //elStatus2.insertAdjacentHTML('afterend', elStatus2);
        //elStatus2.insertAdjacentHTML('afterend', '<br>');
    //}
    if(valueShelf === 'shelf 2') {
        elStatus2.innerHTML = 'Ковбаса є, але спочатку нагодуй кицю';
        return;
    }
    //if(valueShelf === 'shelf 1') {
        //let cat = document.querySelector('select[name="cat"]');
        //cat.innerHTML = 'Киця - МЯУ!';
    //}
    //if(valueFridge === 'close', valueFridge === 'open') {
        //let cat = document.querySelector('div[name="cat"]');
        //cat.innerHTML = 'Киця - МЯУ!';
        //return;
    //}
    if(valueFridge === 'open') {
        let div = document.createElement('div');
        div.innerHTML = 'Киця - МЯУ!';
        document.body.after(div);
        setTimeout(() => div.remove(), 5000);
    }
}
run();
Fridge.addEventListener('change', run);
elShelf.addEventListener('change', run);