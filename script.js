
function updateVideo() {
    // Get the input value
    const videoId = document.getElementById('videoId').value;

    // Update the iframe src attribute
    const iframe = document.getElementById('youtubePlayer');
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
}
document.addEventListener('DOMContentLoaded', (event) => {
    const yearSpan = document.getElementById('copyright');
    const currentYear = new Date().getFullYear();
    yearSpan.innerHTML = `&copy; ${currentYear} Coding by: Ra Vattra`;
});