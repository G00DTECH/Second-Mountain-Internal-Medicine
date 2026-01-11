/**
 * Second Mountain Internal Medicine, P.C.
 * Website JavaScript - Vanilla JS for optimal compatibility
 */

// ==========================================
// Mobile Menu Toggle
// ==========================================
const mobileMenuToggle = document.getElementById('mobileMenuToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        mobileMenuToggle.classList.toggle('active');

        // Animate hamburger menu
        const spans = mobileMenuToggle.querySelectorAll('span');
        if (navMenu.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            spans[0].style.transform = 'none';
            spans[1].style.opacity = '1';
            spans[2].style.transform = 'none';
        }
    });
}

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navMenu.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
        navMenu.classList.remove('active');
        const spans = mobileMenuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// ==========================================
// Smooth Scrolling for Anchor Links
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');

        // Don't prevent default for # only
        if (href === '#') {
            return;
        }

        const target = document.querySelector(href);

        if (target) {
            e.preventDefault();
            const navbarHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = target.offsetTop - navbarHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// Sticky Navigation - Add Shadow on Scroll
// ==========================================
const navbar = document.getElementById('navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add/remove shadow based on scroll position
    if (currentScroll > 50) {
        navbar.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }

    lastScroll = currentScroll;
});

// ==========================================
// Back to Top Button
// ==========================================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('visible');
    } else {
        backToTopButton.classList.remove('visible');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==========================================
// Form Validation & Submission
// ==========================================
const patientForm = document.getElementById('patientForm');
const referralForm = document.getElementById('referralForm');

// Patient Form Handler
if (patientForm) {
    patientForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(patientForm);
        const data = Object.fromEntries(formData);

        // Validate required fields
        const requiredFields = ['contactName', 'contactPhone', 'patientName', 'medicareType', 'situation'];
        let isValid = true;

        requiredFields.forEach(field => {
            const input = patientForm.querySelector(`[name="${field}"]`);
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--error)';
                input.focus();
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
        });

        if (!isValid) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Validate phone number
        const phoneRegex = /^[\d\s\-\(\)]+$/;
        if (!phoneRegex.test(data.contactPhone)) {
            showNotification('Please enter a valid phone number.', 'error');
            return;
        }

        // Validate email if provided
        if (data.contactEmail && !isValidEmail(data.contactEmail)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Success - In production, this would send to a HIPAA-compliant backend
        console.log('Patient Form Data:', data);
        showNotification('Thank you for your inquiry! We will contact you within 24 hours.', 'success');
        patientForm.reset();

        // Scroll to top of form to see success message
        patientForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// Provider Referral Form Handler
if (referralForm) {
    referralForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Get form data
        const formData = new FormData(referralForm);
        const data = Object.fromEntries(formData);

        // Validate required fields
        const requiredFields = [
            'providerName', 'providerOrganization', 'providerPhone', 'providerEmail',
            'refPatientName', 'refPatientPhone', 'refPatientAddress',
            'diagnosis', 'reasonForReferral'
        ];
        let isValid = true;

        requiredFields.forEach(field => {
            const input = referralForm.querySelector(`[name="${field}"]`);
            if (!input.value.trim()) {
                isValid = false;
                input.style.borderColor = 'var(--error)';
                input.focus();
            } else {
                input.style.borderColor = 'var(--border-color)';
            }
        });

        if (!isValid) {
            showNotification('Please fill in all required fields.', 'error');
            return;
        }

        // Validate email
        if (!isValidEmail(data.providerEmail)) {
            showNotification('Please enter a valid email address.', 'error');
            return;
        }

        // Success - In production, this would send to a HIPAA-compliant backend
        console.log('Referral Form Data:', data);
        showNotification('Referral received! We will contact you to confirm within 24 hours.', 'success');
        referralForm.reset();

        // Scroll to top of form to see success message
        referralForm.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ==========================================
// Helper Functions
// ==========================================

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show notification
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) {
        existingNotification.remove();
    }

    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        left: 50%;
        transform: translateX(-50%);
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-weight: 600;
        z-index: 10000;
        max-width: 90%;
        width: auto;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        animation: slideDown 0.3s ease;
    `;

    // Set color based on type
    if (type === 'success') {
        notification.style.backgroundColor = '#10b981';
        notification.style.color = '#ffffff';
    } else if (type === 'error') {
        notification.style.backgroundColor = '#dc2626';
        notification.style.color = '#ffffff';
    } else {
        notification.style.backgroundColor = '#2563eb';
        notification.style.color = '#ffffff';
    }

    // Add to DOM
    document.body.appendChild(notification);

    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 5000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideDown {
        from {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
        to {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
    }

    @keyframes slideUp {
        from {
            opacity: 1;
            transform: translateX(-50%) translateY(0);
        }
        to {
            opacity: 0;
            transform: translateX(-50%) translateY(-20px);
        }
    }
`;
document.head.appendChild(style);

// ==========================================
// Real-time Input Validation
// ==========================================
const allInputs = document.querySelectorAll('input, select, textarea');

allInputs.forEach(input => {
    input.addEventListener('blur', function() {
        if (this.hasAttribute('required') && !this.value.trim()) {
            this.style.borderColor = 'var(--error)';
        } else {
            this.style.borderColor = 'var(--border-color)';
        }

        // Email validation on blur
        if (this.type === 'email' && this.value && !isValidEmail(this.value)) {
            this.style.borderColor = 'var(--error)';
        }
    });

    input.addEventListener('input', function() {
        if (this.style.borderColor === 'var(--error)' || this.style.borderColor === 'rgb(220, 38, 38)') {
            if (this.value.trim()) {
                this.style.borderColor = 'var(--border-color)';
            }
        }
    });
});

// ==========================================
// Intersection Observer for Animations
// ==========================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe cards and sections for fade-in animation
const animatedElements = document.querySelectorAll('.card, .service-card, .faq-item, .why-item, .visit-phase');
animatedElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ==========================================
// Phone Number Formatting
// ==========================================
const phoneInputs = document.querySelectorAll('input[type="tel"]');

phoneInputs.forEach(input => {
    input.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 0) {
            if (value.length <= 3) {
                value = value;
            } else if (value.length <= 6) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            } else {
                value = value.slice(0, 3) + '-' + value.slice(3, 6) + '-' + value.slice(6, 10);
            }
        }

        e.target.value = value;
    });
});

// ==========================================
// Accessibility - Skip to Main Content
// ==========================================
const skipLink = document.createElement('a');
skipLink.href = '#home';
skipLink.className = 'skip-link';
skipLink.textContent = 'Skip to main content';
skipLink.style.cssText = `
    position: absolute;
    top: -40px;
    left: 0;
    background: var(--primary-color);
    color: white;
    padding: 8px;
    text-decoration: none;
    z-index: 100;
    transition: top 0.2s;
`;
skipLink.addEventListener('focus', function() {
    this.style.top = '0';
});
skipLink.addEventListener('blur', function() {
    this.style.top = '-40px';
});
document.body.insertBefore(skipLink, document.body.firstChild);

// ==========================================
// Print Friendly - Add Phone Numbers
// ==========================================
window.addEventListener('beforeprint', () => {
    // Add visible phone numbers for print
    const phoneLinks = document.querySelectorAll('a[href^="tel:"]');
    phoneLinks.forEach(link => {
        if (!link.dataset.originalText) {
            link.dataset.originalText = link.textContent;
        }
    });
});

// ==========================================
// Performance - Lazy Load Heavy Content
// ==========================================
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
} else {
    // Fallback for older browsers
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ==========================================
// Console Message for Developers
// ==========================================
console.log('%cSecond Mountain Internal Medicine, P.C.', 'color: #2563eb; font-size: 20px; font-weight: bold;');
console.log('%cWebsite built with accessibility and performance in mind.', 'color: #059669; font-size: 14px;');
console.log('%cFor support or inquiries, call: 207-492-4642', 'color: #4b5563; font-size: 12px;');

// ==========================================
// Check for JavaScript Support
// ==========================================
document.documentElement.classList.remove('no-js');
document.documentElement.classList.add('js');

// ==========================================
// Service Worker Registration (for PWA capabilities)
// ==========================================
if ('serviceWorker' in navigator) {
    // Uncomment when ready to implement PWA
    // window.addEventListener('load', () => {
    //     navigator.serviceWorker.register('/service-worker.js')
    //         .then(registration => console.log('SW registered'))
    //         .catch(err => console.log('SW registration failed'));
    // });
}

// ==========================================
// Google Analytics Integration Point
// ==========================================
// Add your Google Analytics tracking code here when ready
// Example:
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());
// gtag('config', 'GA_MEASUREMENT_ID');

console.log('Second Mountain Internal Medicine website loaded successfully!');
