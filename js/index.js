//sticky header
window.addEventListener('scroll', () =>{
    if(window.pageYOffset > 160){
        document.getElementById('main').setAttribute('class', 'sticky');
    }
    else{
        document.getElementById('main').removeAttribute('class', 'sticky');
    }
});

