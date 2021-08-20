const btns = document.querySelectorAll('.btn-container button');
const display = document.querySelector('.main-container input');

const addDisplay = (n) => display.value += n;
const clearDisplay = () => display.value = '';
const deleteOne = () => display.value = display.value.slice(0, -1);
const resolve = () => display.value = eval(display.value);

btns.forEach((e)=>{
    e.addEventListener('click', () =>{
        if(e.classList.contains('btn-num')) addDisplay(e.innerText);
        if(e.classList.contains('btn-clear')) clearDisplay();
        if(e.classList.contains('btn-del')) deleteOne();
        if(e.classList.contains('btn-resol')) resolve();
    })
});
