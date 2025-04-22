// DOM Elements
const header = document.querySelector('header');
const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section');

// Toggle mobile menu
menuToggle.addEventListener('click', () => {
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
});

// Close mobile menu when clicking a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuToggle.classList.remove('active');
        nav.classList.remove('active');
    });
});

// Scroll event for header styling
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.scrollY >= (sectionTop - 200)) {
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

// Typing effect for subtitle
document.addEventListener('DOMContentLoaded', () => {
    const typingElement = document.querySelector('.typing');
    const phrases = ['Full Stack Developer', 'Web Designer', 'Problem Solver', 'Code Enthusiast'];
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;
    
    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            typingElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50;
        } else {
            typingElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }
        
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typingSpeed = 1500; // Pause at the end
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before typing next phrase
        }
        
        setTimeout(type, typingSpeed);
    }
    
    type();
    
    // Initialize skill cards animation
    const skillCards = document.querySelectorAll('.skill-card');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    skillCards.forEach(card => {
        card.style.opacity = 0;
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
    
    // Project data
    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A full-featured online store with product catalog, shopping cart, and secure checkout.",
            image: "/placeholder.svg?height=200&width=400",
            tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "Portfolio Website",
            description: "A responsive portfolio website to showcase projects and skills.",
            image: "/placeholder.svg?height=200&width=400",
            tags: ["HTML", "CSS", "JavaScript"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "Task Management App",
            description: "A productivity application for managing tasks, projects, and deadlines.",
            image: "/placeholder.svg?height=200&width=400",
            tags: ["HTML", "CSS", "JavaScript", "Node.js", "MongoDB"],
            liveLink: "#",
            codeLink: "#"
        },
        {
            title: "Weather Dashboard",
            description: "Real-time weather information with forecast and location search.",
            image: "/placeholder.svg?height=200&width=400",
            tags: ["HTML", "CSS", "JavaScript", "API Integration"],
            liveLink: "#",
            codeLink: "#"
        }
    ];
    
    // Render projects
    const projectsGrid = document.querySelector('.projects-grid');
    
    if (projectsGrid) {
        projects.forEach(project => {
            const projectCard = document.createElement('div');
            projectCard.className = 'project-card';
            
            projectCard.innerHTML = `
                <div class="project-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                    </div>
                    <div class="project-links">
                        <a href="${project.liveLink}" class="project-link" target="_blank">Live Demo</a>
                        <a href="${project.codeLink}" class="project-link" target="_blank">View Code</a>
                    </div>
                </div>
            `;
            
            projectsGrid.appendChild(projectCard);
        });
    }
    
    // Form submission
    const contactForm = document.getElementById('contact-form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            // Get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Simple validation
            if (!name || !email || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Here you would normally send the form data to a server
            // For now, just show a success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');

window.addEventListener('scroll', () => {
    if (hero) {
        const scrollPosition = window.scrollY;
        hero.style.backgroundPosition = `center ${scrollPosition * 0.5}px`;
    }
});

// Add animation to elements when they come into view
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observerOptions = {
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, observerOptions);
    
    elements.forEach(element => {
        observer.observe(element);
    });
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});