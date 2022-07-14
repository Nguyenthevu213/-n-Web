const navBar = document.querySelector('.ps-fl')
const bodySc = document.querySelector('body')
bodySc.onscroll = ()=>{
    if(window.scrollY >= 200){
        navBar.style.backgroundColor = '#000'
        navBar.style.zIndex = '9999'
    }else{
        navBar.style.backgroundColor = ''

    }
}