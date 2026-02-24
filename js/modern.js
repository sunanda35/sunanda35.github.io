document.addEventListener('DOMContentLoaded', () => {
    // 1. Custom Cursor Glow
    const cursorGlow = document.querySelector('.cursor-glow');
    
    if (cursorGlow && window.matchMedia("(pointer: fine)").matches) {
        document.addEventListener('mousemove', (e) => {
            cursorGlow.style.left = `${e.clientX}px`;
            cursorGlow.style.top = `${e.clientY}px`;
        });
        
        // Hide glow when leaving window
        document.addEventListener('mouseleave', () => {
            cursorGlow.style.display = 'none';
        });
        document.addEventListener('mouseenter', () => {
            cursorGlow.style.display = 'block';
        });
    } else if (cursorGlow) {
        cursorGlow.style.display = 'none'; // Disable on touch devices
    }

    // 2. Navigation Scroll Effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 3. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    
    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const icon = hamburger.querySelector('i');
            if (navLinks.classList.contains('active')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                const icon = hamburger.querySelector('i');
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
            }
        });
    });

    // 4. Scroll Reveal (Intersection Observer)
    const faders = document.querySelectorAll('.fade-in');
    
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('appear');
            observer.unobserve(entry.target);
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 5. Typing Effect for Subtitle
    const typingElement = document.querySelector('.typing-effect');
    if (typingElement) {
        const textToType = typingElement.innerText;
        typingElement.innerText = '';
        typingElement.style.borderRight = '2px solid var(--accent)';
        typingElement.style.paddingRight = '5px';
        
        let i = 0;
        function typeWriter() {
            if (i < textToType.length) {
                typingElement.innerHTML += textToType.charAt(i);
                i++;
                setTimeout(typeWriter, Math.random() * 50 + 30); // Random delay between 30-80ms
            } else {
                // Blink cursor effect after typing finishes
                setInterval(() => {
                    typingElement.style.borderColor = typingElement.style.borderColor === 'transparent' ? 'var(--accent)' : 'transparent';
                }, 500);
            }
        }
        
        // Start typing after a short delay
        setTimeout(typeWriter, 1000);
    }
});
