// ===== Mobile Menu Toggle =====
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('mobile-open');
            const icon = mobileMenuBtn.querySelector('i');
            if (navLinks.classList.contains('mobile-open')) {
                icon.classList.remove('fa-bars');
                icon.classList.add('fa-times');
                // Apply mobile menu styles
                navLinks.style.display = 'flex';
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '60px';
                navLinks.style.left = '0';
                navLinks.style.right = '0';
                navLinks.style.background = '#fff';
                navLinks.style.padding = '16px';
                navLinks.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                navLinks.style.gap = '4px';
            } else {
                icon.classList.remove('fa-times');
                icon.classList.add('fa-bars');
                navLinks.style.display = '';
                navLinks.style.flexDirection = '';
                navLinks.style.position = '';
                navLinks.style.top = '';
                navLinks.style.left = '';
                navLinks.style.right = '';
                navLinks.style.background = '';
                navLinks.style.padding = '';
                navLinks.style.boxShadow = '';
                navLinks.style.gap = '';
            }
        });
    }

    // ===== Smooth scroll for anchor links =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    // ===== Form submission =====
    const form = document.querySelector('.hero-form form');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = form.querySelector('input[type="text"]').value;
            const phone = form.querySelector('input[type="tel"]').value;

            if (!name || !phone) {
                alert('Please fill in your name and phone number.');
                return;
            }

            // Show success message
            const btn = form.querySelector('.btn-request');
            const originalText = btn.textContent;
            btn.textContent = '✓ Request Submitted!';
            btn.style.background = '#16a34a';
            btn.disabled = true;

            setTimeout(() => {
                btn.textContent = originalText;
                btn.style.background = '';
                btn.disabled = false;
                form.reset();
            }, 3000);
        });
    }

    // ===== Navbar scroll effect =====
    window.addEventListener('scroll', () => {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 10) {
            navbar.style.boxShadow = '0 2px 12px rgba(0,0,0,0.12)';
        } else {
            navbar.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
        }
    });

    // ===== Animate stats on scroll =====
    const observerOptions = {
        threshold: 0.3,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe animated elements
    document.querySelectorAll('.stat-card, .feature-card, .country-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.5s ease';
        observer.observe(el);
    });

    // Stagger animation for children
    document.querySelectorAll('.stats-container, .features-grid, .country-cards').forEach(container => {
        const children = container.children;
        Array.from(children).forEach((child, index) => {
            child.style.transitionDelay = `${index * 0.1}s`;
        });
    });

    // ===== DYNAMIC MODALS CREATION & BUTTON HANDLERS =====
    // Inject Global Modals into DOM
    if (!document.getElementById('medicoSessionModal')) {
        const modalHtml = `
            <!-- BOOK FREE SESSION / COUNSELLING MODAL -->
            <div class="medico-modal-overlay" id="medicoSessionModal">
                <div class="medico-modal">
                    <button class="modal-close-btn" data-close="medicoSessionModal"><i class="fas fa-times"></i></button>
                    <div class="modal-header">
                        <span class="badge badge-red"><i class="fas fa-calendar-check"></i> 1-on-1 Mentorship</span>
                        <h3 id="modalTitle">Book Free Counselling Session</h3>
                        <p id="modalDesc">Speak with Dr. Sachin Singh and senior medical counsellors to map your realistic admission chances.</p>
                    </div>
                    <form class="modal-form" id="sessionModalForm">
                        <div class="modal-input-group">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Candidate's Full Name" required>
                        </div>
                        <div class="modal-input-group">
                            <i class="fas fa-phone"></i>
                            <input type="tel" placeholder="Mobile Number" required>
                        </div>
                        <div class="modal-input-group">
                            <i class="fas fa-chart-line"></i>
                            <input type="text" placeholder="Expected / Actual NEET Score">
                        </div>
                        <div class="modal-input-group">
                            <i class="fas fa-graduation-cap"></i>
                            <select>
                                <option value="MBBS India">Interested in MBBS India</option>
                                <option value="MBBS Abroad">Interested in MBBS Abroad</option>
                                <option value="BDS">BDS (Dental)</option>
                                <option value="BVSc">BVSc (Veterinary)</option>
                                <option value="BAMS/BHMS">AYUSH (BAMS / BHMS)</option>
                            </select>
                        </div>
                        <button type="submit" class="modal-submit-btn">Confirm Free Session</button>
                    </form>
                </div>
            </div>

            <!-- PROSPECTUS DOWNLOAD MODAL -->
            <div class="medico-modal-overlay" id="prospectusModal">
                <div class="medico-modal">
                    <button class="modal-close-btn" data-close="prospectusModal"><i class="fas fa-times"></i></button>
                    <div class="modal-header">
                        <span class="badge badge-green"><i class="fas fa-file-pdf"></i> 2026 Directory</span>
                        <h3>Download Official Admissions Guide</h3>
                        <p>Get the complete 53-page guide with NIRF rankings, cutoff scores, and fee structures sent instantly to your phone/email.</p>
                    </div>
                    <form class="modal-form" id="prospectusForm">
                        <div class="modal-input-group">
                            <i class="fas fa-user"></i>
                            <input type="text" placeholder="Candidate's Name" required>
                        </div>
                        <div class="modal-input-group">
                            <i class="fas fa-envelope"></i>
                            <input type="email" placeholder="Email Address" required>
                        </div>
                        <div class="modal-input-group">
                            <i class="fas fa-phone"></i>
                            <input type="tel" placeholder="WhatsApp / Mobile Number" required>
                        </div>
                        <button type="submit" class="modal-submit-btn" style="background:var(--primary-navy);">Download Free PDF</button>
                    </form>
                </div>
            </div>

            <!-- TOAST NOTIFICATION CONTAINER -->
            <div class="medico-toast" id="medicoToast">
                <i class="fas fa-check-circle"></i>
                <span id="toastMsg">Thank you! Your request has been registered.</span>
            </div>
        `;
        document.body.insertAdjacentHTML('beforeend', modalHtml);
    }

    // Modal Control Functions
    const sessionModal = document.getElementById('medicoSessionModal');
    const prospectusModal = document.getElementById('prospectusModal');
    const toast = document.getElementById('medicoToast');
    const toastMsg = document.getElementById('toastMsg');

    function showToast(msg) {
        if (!toast) return;
        toastMsg.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3500);
    }

    function openModal(modal) {
        if (modal) modal.classList.add('active');
    }

    function closeModal(modal) {
        if (modal) modal.classList.remove('active');
    }

    // Modal Close Buttons
    document.querySelectorAll('.modal-close-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.dataset.close;
            closeModal(document.getElementById(targetId));
        });
    });

    document.querySelectorAll('.medico-modal-overlay').forEach(overlay => {
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                closeModal(overlay);
            }
        });
    });

    // Make ALL "Book Free Session", "Call Now", "Get Callback", and CTAs active
    document.querySelectorAll('.btn-book-session, .btn-hero-cta, .btn-request-callback').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.tagName === 'A' && btn.getAttribute('href') === '#') {
                e.preventDefault();
            }
            openModal(sessionModal);
        });
    });

    document.querySelectorAll('.call-now, .call-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.getAttribute('href') === '#' || btn.getAttribute('href') === 'tel:') {
                e.preventDefault();
                openModal(sessionModal);
            }
        });
    });

    document.querySelectorAll('.msg-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(sessionModal);
        });
    });

    // Prospectus & PDF Download Buttons
    document.querySelectorAll('a[href*="Prospectus"], a[href*="prospectus"], .btn-get-pdf, .btn-download').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            openModal(prospectusModal);
        });
    });

    // Handle Form Submissions
    const sessionForm = document.getElementById('sessionModalForm');
    if (sessionForm) {
        sessionForm.addEventListener('submit', (e) => {
            e.preventDefault();
            closeModal(sessionModal);
            showToast('✓ Free Session Booked! Our Senior Counsellor will call you shortly.');
            sessionForm.reset();
        });
    }

    const prospectusForm = document.getElementById('prospectusForm');
    if (prospectusForm) {
        prospectusForm.addEventListener('submit', (e) => {
            e.preventDefault();
            closeModal(prospectusModal);
            showToast('✓ PDF Sent! Check your WhatsApp/Email for the Directory.');
            prospectusForm.reset();
        });
    }

    // Handle any generic forms across all pages (e.g. sidebar forms, callback forms)
    document.querySelectorAll('form').forEach(f => {
        if (f.id !== 'sessionModalForm' && f.id !== 'prospectusForm') {
            f.addEventListener('submit', (e) => {
                e.preventDefault();
                showToast('✓ Request Submitted! We will get in touch with you.');
                f.reset();
            });
        }
    });
});
