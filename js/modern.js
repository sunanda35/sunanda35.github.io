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
    
    const setMenu = (open) => {
        navLinks.classList.toggle('active', open);
        hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        const icon = hamburger.querySelector('i');
        icon.classList.toggle('fa-bars', !open);
        icon.classList.toggle('fa-times', open);
    };

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            setMenu(!navLinks.classList.contains('active'));
        });
    }

    // Close mobile menu on link click
    document.querySelectorAll('.nav-links li a').forEach(link => {
        link.addEventListener('click', () => setMenu(false));
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

    // 6. UTM Tracking for Outbound Links
    const utmSource = 'sunanda35.github.io';
    const utmMedium = 'sunanda35.github.io';
    
    document.querySelectorAll('.track-outbound').forEach(link => {
        link.addEventListener('click', (e) => {
            const url = new URL(link.href);
            // Append UTM params if they don't exist
            if (!url.searchParams.has('utm_source')) {
                url.searchParams.set('utm_source', utmSource);
            }
            if (!url.searchParams.has('utm_medium')) {
                url.searchParams.set('utm_medium', utmMedium);
            }
            link.href = url.toString();
        });
    });
});
