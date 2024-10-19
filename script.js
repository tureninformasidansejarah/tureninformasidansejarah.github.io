        function autoScroll() {
            setTimeout(() => {
                window.scrollBy(0, 5); // Scroll down by 1px
                console.log("Auto scroll executed"); // Debugging log
            }, 100); // 1000 milliseconds = 1 second delay
        }
// Start auto scroll after loading
window.addEventListener('load', autoScroll);

window.addEventListener('load', () => {
    // Hide the loading screen
    document.getElementById('loadingScreen').style.display = 'none';
});

document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.parallax-layer');
    const totalImages = images.length;
    let loadedImages = 0;

    // Function to hide the loading screen
    function hideLoadingScreen() {
        const loadingScreen = document.getElementById('loadingScreen');
        loadingScreen.classList.add('hidden');
        setTimeout(() => {
            loadingScreen.style.display = 'none';
        }, 500); // Fade-out effect
    }

    // Check when each image is loaded
    images.forEach(image => {
        const img = new Image();
        img.src = image.src;

        img.onload = function() {
            loadedImages++;
            if (loadedImages === totalImages) {
                hideLoadingScreen();
            }
        };

        img.onerror = function() {
            // Handle error loading image
            loadedImages++;
            if (loadedImages === totalImages) {
                hideLoadingScreen();
            }
        };
    });
});


// Smooth scroll to the next section when the button is clicked
document.querySelector('.scroll-button1').addEventListener('click', function() {
    const section = document.getElementById('section1');

    // Scroll to the section smoothly first
    section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Aligns the top of the section to the top of the viewport
    });

    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = -850; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});

document.querySelector('.scroll-button2').addEventListener('click', function() {
    const section = document.getElementById('section2');
    section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Aligns the top of the section to the top of the viewport
    });

    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = 0; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});

document.querySelector('.navbut1').addEventListener('click', function() {
    const section = document.getElementById('section3');
    section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Aligns the top of the section to the top of the viewport
    });

    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = -600; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});

document.querySelector('.navbut2').addEventListener('click', function() {
    const section = document.getElementById('section3');
    section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Aligns the top of the section to the top of the viewport
    });

    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = -600; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});

document.querySelector('.navbut3').addEventListener('click', function() {
    const section = document.getElementById('section3');
    section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Aligns the top of the section to the top of the viewport
    });

    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = -600; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});


    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = -600; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});

document.querySelector('.square-button1').addEventListener('click', function() {
    const section = document.getElementById('section4');
    section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Aligns the top of the section to the top of the viewport
    });

    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = -40; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});

document.querySelector('.square-button2').addEventListener('click', function() {
    const section = document.getElementById('section5');
    section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Aligns the top of the section to the top of the viewport
    });

    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = 100; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});

document.querySelector('.square-button3').addEventListener('click', function() {
    const section = document.getElementById('section6');
    section.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling effect
        block: 'start' // Aligns the top of the section to the top of the viewport
    });

    // Adjust the scroll position by adding an offset (e.g., -850)
    const offset = -50; // Adjust this value as needed
    const sectionTop = section.getBoundingClientRect().top + window.scrollY; // Get the current top position of the section
    smoothScrollTo(sectionTop + offset, 2000); // Set duration to 2000ms (2 seconds)
});


// Function to smoothly scroll to a specific position
function smoothScrollTo(targetY, duration) {
    const startY = window.scrollY; // Current scroll position
    const distance = targetY - startY; // Distance to scroll
    let startTime = null;

    // Animation function
    function animation(currentTime) {
        if (startTime === null) startTime = currentTime; // Initialize start time
        const timeElapsed = currentTime - startTime; // Time elapsed since animation started
        const progress = Math.min(timeElapsed / duration, 1); // Calculate progress

        // Easing function (ease-in-out)
        const ease = easeInOutQuad(progress);
        window.scrollTo(0, startY + distance * ease); // Scroll to the current position

        if (progress < 1) requestAnimationFrame(animation); // Continue animation until duration is reached
    }

    requestAnimationFrame(animation); // Start the animation
}

// Easing function for smooth scroll (ease-in-out)
function easeInOutQuad(t) {
    return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

// Parallax scrolling effect
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const layer1 = document.querySelector('.layer-1'); 
    const layer2 = document.querySelector('.layer-2'); 
    const layer3 = document.querySelector('.layer-3'); 
    const layer4 = document.querySelector('.layer-4'); 
    const layer5 = document.querySelector('.layer-5'); 

    // Parallax speed adjustment
    layer1.style.transform = 'translateY(' + (scrollPosition * 0.9 - 500) + 'px)';
    layer2.style.transform = 'translateY(' + (scrollPosition * 0.7 - 500) + 'px)';
    layer3.style.transform = 'translateY(' + (scrollPosition * 0.5 - 500) + 'px)';
    layer4.style.transform = 'translateY(' + (scrollPosition * 0.3 - 500) + 'px)';
    layer5.style.transform = 'translateY(' + (scrollPosition * 0.1 - 500) + 'px)';

    // Add opacity effect
    let opacityValue = 1 - (scrollPosition / 1000);
    if (opacityValue < 0) opacityValue = 0;

    layer2.style.opacity = opacityValue;
    document.querySelector('.scroll-button1').style.opacity = opacityValue; // Fixed selector
});

// IntersectionObserver logic for visibility animation
function setupIntersectionObserver(targetClass, delay = 0) {
    const target = document.querySelector(targetClass);
    if (!target) return; // Safeguard if the target isn't found

    let timeoutId; // Declare timeout ID to handle delayed entry

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add a delay if provided
                clearTimeout(timeoutId);
                timeoutId = setTimeout(() => {
                    target.classList.add('visible');
                    target.classList.remove('hidden');
                    console.log(target)
                }, delay);
            } else {
                clearTimeout(timeoutId); // Clear the timeout if the element leaves view
                target.classList.remove('visible');
                target.classList.add('hidden');
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, { threshold: 0.1 });
    observer.observe(target);
}

// Hover effects for buttons
function setupButtonHover(buttonClass, fadeOverlayClass, textOverlayClass, descOverlayClass) {
    const button = document.querySelector(buttonClass);
    const fadeOverlay = document.querySelector(fadeOverlayClass);
    const textOverlay = document.querySelector(textOverlayClass);
    const descOverlay = document.querySelector(descOverlayClass);

    if (button && fadeOverlay && textOverlay) {
        button.addEventListener('mouseenter', () => {
            fadeOverlay.classList.add('hovered');
            textOverlay.classList.add('hovered');
            descOverlay.classList.add('hovered');
        });
        button.addEventListener('mouseleave', () => {
            fadeOverlay.classList.remove('hovered');
            textOverlay.classList.remove('hovered');
            descOverlay.classList.remove('hovered');
        });
    }
}

// Setup intersection observers and button hover effects
document.addEventListener('DOMContentLoaded', function () {
    setupIntersectionObserver('.Square');        // No delay
    setupIntersectionObserver('.Square_1', 500); // 0.5s delay
    setupIntersectionObserver('.Square_2', 1000); // 1s delay
    setupIntersectionObserver('.gambarturiantapada', 500)
    setupIntersectionObserver('.turiantapada_h1', 100)
    setupIntersectionObserver('.turiantapada_p', 100)
    setupIntersectionObserver('.title_wisata')
    setupIntersectionObserver('.keterangan_wisata',300)
    setupIntersectionObserver('.container_hori1_sec5',500)
    setupIntersectionObserver('.title_umkm')
    setupIntersectionObserver('.keterangan_umkm',300)
    setupIntersectionObserver('.greenboxbg2', 500)
     

    // Setup hover for buttons
    setupButtonHover('.square-button1', '.fade-overlay1', '.text-overlay1', '.desc-overlay1');
    setupButtonHover('.square-button2', '.fade-overlay2', '.text-overlay2', '.desc-overlay2');
    setupButtonHover('.square-button3', '.fade-overlay3', '.text-overlay3', '.desc-overlay3');

    // Initialize the first slide
    showSlides(currentSlideIndex);
});

// Slider logic with fade animation
let currentSlideIndex = 0;
let slides = document.querySelectorAll('.slide');
let dots = document.querySelectorAll('.dot');

function showSlides(n) {
    // Ensure the correct number of slides and dots are present
    if (slides.length !== dots.length) {
        console.error('Mismatch between slides and dots.');
        return;
    }

    if (n >= slides.length) currentSlideIndex = 0;
    if (n < 0) currentSlideIndex = slides.length - 1;

    slides.forEach((slide, index) => {
        slide.classList.remove('active', 'fade');
        dots[index].classList.remove('active-dot');
    });

    slides[currentSlideIndex].classList.add('active', 'fade');
    dots[currentSlideIndex].classList.add('active-dot');
}

function changeSlide(n) {
    currentSlideIndex += n;
    showSlides(currentSlideIndex);
}

function currentSlide(n) {
    currentSlideIndex = n;
    showSlides(currentSlideIndex);
}

// Add fade animation via CSS
const style = document.createElement('style');
style.textContent = `
.fade {
    opacity: 0;
    animation: fadeIn 0.8s forwards;
}

@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}
`;
document.head.appendChild(style);

// Initialize the first slide
document.addEventListener('DOMContentLoaded', function () {
    showSlides(currentSlideIndex);
});
