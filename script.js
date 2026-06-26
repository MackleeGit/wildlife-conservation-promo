// Wait for the DOM to fully load before attaching events
document.addEventListener("DOMContentLoaded", function() {
    var video = document.getElementById("wildlife-video");
    var button = document.getElementById("toggle-button");

    // Toggle video play/pause and visibility
    button.addEventListener("click", function() {
        if (video.paused) {
            video.classList.remove("hidden");
            video.play();
        } else {
            video.pause();
            video.classList.add("hidden");
        }
    });
});
