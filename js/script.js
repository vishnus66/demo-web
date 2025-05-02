// ===== MOBILE MENU TOGGLE =====
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('active');
    });
});

// ===== STICKY HEADER =====
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 50);
});

// ===== ACTIVE NAVIGATION LINKS ON SCROLL =====
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (pageYOffset >= sectionTop - 100) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').substring(1) === current) {
            link.classList.add('active');
        }
    });
});

// ===== SKILLS PROGRESS BARS ANIMATION =====
const skillsSection = document.querySelector('.skills');
const progressBars = document.querySelectorAll('.skill-progress');

function showProgress() {
    progressBars.forEach(progressBar => {
        const value = progressBar.dataset.progress;
        progressBar.style.width = value;
    });
}

window.addEventListener('scroll', () => {
    const sectionPos = skillsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight / 1.3;
    
    if (sectionPos < screenPos) {
        showProgress();
    }
});

// ===== TYPED TEXT ANIMATION =====
const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Blockchain Developer', 'Web Developer', 'App Developer','Animator'];
const typingDelay = 100;
const erasingDelay = 50;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
    if (charIndex < textArray[textArrayIndex].length) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        if (!cursorSpan.classList.contains('typing')) {
            cursorSpan.classList.add('typing');
        }
        typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        cursorSpan.classList.remove('typing');
        textArrayIndex++;
        if (textArrayIndex >= textArray.length) textArrayIndex = 0;
        setTimeout(type, typingDelay + 1100);
    }
}

// Start the typing animation when the page loads
document.addEventListener('DOMContentLoaded', () => {
    if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ===== PROJECT FILTERING =====
const filterBtns = document.querySelectorAll('.filter-btn');
const projectCards = document.querySelectorAll('.project-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remove active class from all buttons
        filterBtns.forEach(filterBtn => {
            filterBtn.classList.remove('active');
        });
        
        // Add active class to the clicked button
        btn.classList.add('active');
        
        const filterValue = btn.dataset.filter;
        
        projectCards.forEach(card => {
            if (filterValue === 'all' || card.dataset.category === filterValue) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// ===== BACK TO TOP BUTTON =====
const backToTopBtn = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopBtn.classList.add('active');
    } else {
        backToTopBtn.classList.remove('active');
    }
});

backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===== CONTACT FORM SUBMISSION =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Simple validation
    if (name.trim() === '' || email.trim() === '' || subject.trim() === '' || message.trim() === '') {
        alert('Please fill in all fields');
        return;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Your message has been sent successfully!');
    
    // Reset form
    contactForm.reset();
});

// ===== SMOOTH SCROLLING FOR INTERNAL LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// ===== PAGE LOADING ANIMATION =====
window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    if (loader) {
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
    }
});

// ===== SCROLL REVEAL ANIMATION =====
// Initialize animation on scroll for elements
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (elementPosition < windowHeight - 100) {
            element.classList.add('animated');
        }
    });
}

// Initial check for elements in viewport
window.addEventListener('load', animateOnScroll);

// Check for elements on scroll
window.addEventListener('scroll', animateOnScroll); 