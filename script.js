document.addEventListener("DOMContentLoaded", function () {

    const body = document.body;

    let currentDeg = 252.03;
    let direction = 1;

    function updateBackground() {
        body.style.background = `linear-gradient(${currentDeg}deg, #821751 8.23%, #2F60B0 113.51%)`;
    }

    const interval = setInterval(function () {
        currentDeg += 2 * direction;

        updateBackground();

        if (currentDeg >= 622.03) {
            currentDeg = 252.03;
        }
    }, 50); 
    
    const images = document.querySelectorAll('.icon');

    images.forEach(function (imgElement) {
        imgElement.addEventListener("mouseover", function () {
            imgElement.style.transform = "scale(1.5)";
        });

        imgElement.addEventListener("mouseout", function () {
            imgElement.style.transform = "scale(1)";
        });
    });
});