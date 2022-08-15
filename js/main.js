let mobileMenuBtn = document.getElementById('ham-menu-btn');
mobileMenuBtn.addEventListener('click',()=>{
        if(mobileMenuBtn.classList.contains('is-active')){
            mobileMenuBtn.classList.remove('is-active')
        } else {
            mobileMenuBtn.classList.add('is-active')
        }
    })