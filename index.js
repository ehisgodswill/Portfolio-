const welcome= document.getElementById('welcome');
const main = document.getElementById('main');
main.style.display = 'none'
setTimeout(()=>{
    welcome.style.display='none';
    main.style.display = 'block'
}, 6000)

//above code to hide the welcome page