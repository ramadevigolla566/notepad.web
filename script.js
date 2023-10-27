let userInput=document.getElementById('userInput');
let pencile=document.getElementById('pencile');
let allItems=document.getElementById('allItems');

pencile.addEventListener('click',function(){
    allItems.innerHTML=''
})
userInput.addEventListener('keydown',function(event){
    if(event.key == "Enter"){
        allList();
    }
})
function allList(){
    let h2=document.createElement('h3');
    h2.innerHTML="-"+userInput.value;
    h2.addEventListener('click',function(){
        h2.style.textDecoration='line-through'
    })
    allItems.insertAdjacentElement('beforeend',h2)
    userInput.value='';
}
