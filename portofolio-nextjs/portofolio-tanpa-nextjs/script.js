document.addEventListener('DOMContentLoaded', function() {

    // ======== 1. ANIMASI TYPING (HERO) ========
    // Pastikan library Typed.js sudah ter-load di HTML
    if (typeof Typed !== 'undefined') {
        if (document.querySelector('.typing-effect')) {
            var options = {
                strings: [
                    'Web Developer.',
                    'Security Enthusiast.',
                    'Data Analyst.',
                    'Mobile Developer.'
                ],
                typeSpeed: 50,
                backSpeed: 30,
                backDelay: 2000,
                startDelay: 500,
                loop: true,
                showCursor: false
            };
            var typed = new Typed('.typing-effect', options);
        }
    } else {
        console.error('Typed.js library is not loaded.');
    }

    // ======== 2. ANIMASI FADE-IN SAAT SCROLL ========
    const fadeElements = document.querySelectorAll('[data-fade]');
    
    // Periksa apakah IntersectionObserver didukung
    if ('IntersectionObserver' in window) {
        const fadeObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    fadeObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1 });

        fadeElements.forEach(el => fadeObserver.observe(el));
    } else {
        // Fallback untuk browser lama: langsung tampilkan saja
        fadeElements.forEach(el => el.classList.add('is-visible'));
    }

    // ======== 3. SCROLL SPY (NAVBAR AKTIF) ========
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-links a');

    if ('IntersectionObserver' in window && navLinks.length > 0 && sections.length > 0) {
        const spyObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    navLinks.forEach(link => {
                        link.classList.remove('active');
                        // Pastikan link.getAttribute('href') tidak null
                        if (link.getAttribute('href') === `#${id}`) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { 
            rootMargin: '-50% 0px -50% 0px' // Aktif saat di tengah layar
        });

        sections.forEach(section => spyObserver.observe(section));
    }
    
    // ======== 4. NAVBAR SEMBUNYI SAAT SCROLL ========
    let lastScrollTop = 0;
    const navbar = document.querySelector('.navbar');

    if (navbar) { // Pastikan navbar ada
        // Ambil tinggi navbar dari CSS, jika gagal, gunakan 80
        let navHeight;
        try {
            // Ini cara dinamis mengambil nilai dari root
            navHeight = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--nav-height'), 10) || 80;
        } catch (e) {
            navHeight = 80; // Fallback jika gagal
        }

        window.addEventListener('scroll', function() {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            
            // --- INI BAGIAN YANG DIPERBAIKI ---
            if (scrollTop > lastScrollTop && scrollTop > navHeight) { 
                // Scroll ke bawah & sudah melewati navbar
                navbar.style.top = `-${navHeight}px`; // Gunakan nilai navHeight
            } else {
                // Scroll ke atas
                navbar.style.top = '0';
            }
            // --- AKHIR PERBAIKAN ---

            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Untuk Mac/iOS bouncing
        }, false);
    }

});