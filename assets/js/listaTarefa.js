const btnAdd = document.getElementById('btn-add');
const inputItem = document.querySelector('.input-container input');
const listItem = document.querySelector('.list-item');

btnAdd.addEventListener('click', () =>{
    checkInput(inputItem.value);
});

function checkInput(item){
    if(!item) return;
    addItem(item);
    inputItem.value = '';
    inputItem.focus();
};

function addItem(item){
    const div = `<div class="item">
                    <p>${item}</p>
                    <i class="material-icons btn-icon" id="btn-del">delete</i>
                </div>`;
    
    listItem.innerHTML += div;
    checkList(listItem.childElementCount);
    btnDelete();
};

function btnDelete(){
    document.querySelectorAll('#btn-del').forEach((btn)=>{
        btn.addEventListener('click', () =>{
            btn.parentElement.remove();
            checkList(listItem.childElementCount);
        });
    });
};

const checkList = (list) => {
    list === 0? listItem.style.display = 'none' : listItem.style.display = 'block';
    saveItems();
};

function saveItems(){
    const items = listItem.querySelectorAll('p');
    const itemsSaved = [];

    for(let i of items) itemsSaved.push(i.innerHTML);

    const itemJSON = JSON.stringify(itemsSaved);
    localStorage.setItem('item', itemJSON);
    console.log(itemJSON)
};

function backItemsSaved(){
    const itemsSaved = localStorage.getItem('item');
    const itemsList = JSON.parse(itemsSaved);
    for(let items of itemsList) addItem(items);
};

inputItem.addEventListener('keypress', (e) => {
    if(e.key === "Enter") checkInput(inputItem.value);
});

backItemsSaved();
