function playVideo() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'flex';
    iframe.src = "https://www.youtube.com/embed/rPmLIusS1bI?si=P3fBZWUArFm1gj2c"; // Thêm autoplay
}

function closeModal() {
    const modal = document.getElementById('video-modal');
    const iframe = document.getElementById('modal-video');
    
    modal.style.display = 'none';
    iframe.src = ''; 
}
