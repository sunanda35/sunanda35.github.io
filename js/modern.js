document.addEventListener('DOMContentLoaded', () => {
    // Header background on scroll
    const hdr = document.getElementById('hdr');
    const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Scroll reveal
    const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(e => {
            if (!e.isIntersecting) return;
            e.target.classList.add('in');
            obs.unobserve(e.target);
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.reveal').forEach(el => io.observe(el));

    // UTM tagging on outbound links
    const src = 'sunanda35.github.io';
    document.querySelectorAll('.track-outbound').forEach(link => {
        link.addEventListener('click', () => {
            try {
                const url = new URL(link.href);
                if (url.protocol.startsWith('http')) {
                    if (!url.searchParams.has('utm_source')) url.searchParams.set('utm_source', src);
                    if (!url.searchParams.has('utm_medium')) url.searchParams.set('utm_medium', 'portfolio');
                    link.href = url.toString();
                }
            } catch (_) { /* mailto etc. */ }
        });
    });
});
