

const nav = document.querySelector('#nav_principal')
const brand = document.querySelector('.navbar-brand');
const toggler = document.querySelector('.navbar-toggler');
if(window.innerWidth <= 991 ){
    toggler.style.display = 'none';
    brand.style.color='#f8f9fa';
}else{
    brand.style.color='#343a40';
}

window.addEventListener('scroll' , ()=>{    
    if(window.pageYOffset == 0){
        nav.style.background='transparent';
        brand.style.color='#343a40';
        if(window.innerWidth <= 991 ){
            toggler.style.display = 'none';
            brand.style.color='#f8f9fa';
        }
    }else{
        nav.style.background='#343a40';
        brand.style.color='#f8f9fa';
        if(window.innerWidth <= 991 ){
            toggler.style.display = 'block';
        }
    }
} )







