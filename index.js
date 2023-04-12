const menu=document.querySelector('.burger');
const menuList=document.querySelector('.nave');
menu.addEventListener('click',()=>{
    menuList.classList.toggle('show-menu');
})