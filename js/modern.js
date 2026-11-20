// Header rule on scroll
const hdr = document.getElementById('hdr');
const onScroll = () => hdr.classList.toggle('scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Copy email
document.querySelectorAll('[data-copy]').forEach(btn => {
    const label = btn.textContent;
    btn.addEventListener('click', async () => {
        try {
            await navigator.clipboard.writeText(btn.dataset.copy);
            btn.textContent = 'Copied';
        } catch (_) {
            btn.textContent = 'Copy failed, select the address';
        }
        btn.classList.add('done');
        setTimeout(() => { btn.textContent = label; btn.classList.remove('done'); }, 2000);
    });
});

// UTM tagging on outbound http(s) links
document.querySelectorAll('.track-outbound').forEach(link => {
    link.addEventListener('click', () => {
        try {
            const url = new URL(link.href, location.href);
            if (!url.protocol.startsWith('http') || url.host === location.host) return;
            if (!url.searchParams.has('utm_source')) url.searchParams.set('utm_source', 'sunanda35.github.io');
            if (!url.searchParams.has('utm_medium')) url.searchParams.set('utm_medium', 'portfolio');
            link.href = url.toString();
        } catch (_) { /* ignore */ }
    });
});
