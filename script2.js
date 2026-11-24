window.addEventListener('resize', () => {
    const donateImg = document.querySelector(".donateimg");
    
    if (donateImg) {
        donateImg.style.opacity = window.innerWidth > 400 ? 1 : 0;
    }
});