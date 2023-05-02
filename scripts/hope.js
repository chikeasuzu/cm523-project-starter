window.onload = function() {

    // Get the current page's URL
    var currentUrl = window.location.pathname;

    // Check which page the user is on and set the corresponding heading to be bold
    if (currentUrl.includes("home.html")) {
    document.getElementById("homeheading").style.color = "#000000";
    } else if (currentUrl.includes("haute.html")) {
    document.getElementById("hauteheading").style.color = "#000000";
    } else if (currentUrl.includes("history.html")) {
    document.getElementById("historyheading").style.color = "#000000";
    } else if (currentUrl.includes("hope.html")) {
    document.getElementById("hopeheading").style.color = "#000000";
    }

    document.getElementById("homeheading").addEventListener("click", function() {
        window.location.href = "home.html";
    });
    
    document.getElementById("hauteheading").addEventListener("click", function() {
        window.location.href = "haute.html";
    });
    
    document.getElementById("historyheading").addEventListener("click", function() {
        window.location.href = "history.html";
    });
    
    document.getElementById("hopeheading").addEventListener("click", function() {
        window.location.href = "hope.html";
    });
    
    document.getElementById("hautebanner").addEventListener("click", function() {
        window.location.href = "haute.html";
    });
    
    document.getElementById("historybanner").addEventListener("click", function() {
        window.location.href = "history.html";
    });
    
    document.getElementById("hopebanner").addEventListener("click", function() {
        window.location.href = "hope.html";
    });

    document.getElementById("hhlogo").addEventListener("click", function() {
        window.location.href = "home.html";
    });
    
    var slideIndex = 1;
    showSlides(slideIndex);
    
    function showSlides(n) {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        var dots = document.getElementsByClassName("dot");
        if (n > slides.length) {slideIndex = 1}
        if (n < 1) {slideIndex = slides.length}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex-1].style.display = "block";
        dots[slideIndex-1].className += " active";
    }
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}