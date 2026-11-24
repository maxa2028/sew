window.addEventListener('resize', () => {
    const donateImg = document.querySelector(".donateimg");
    
    if (donateImg) {
        donateImg.style.opacity = window.innerWidth > 400 ? 1 : 0;
    }
});
var myVideo = document.getElementById("video1"); 
function playPause() { 
  if (myVideo.muted) 
    myVideo.muted = false; 
  else 
    myVideo.muted = true; 
} 