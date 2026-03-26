
    // Router & SPA logic
    class PortfolioRouter {
        constructor() {
            this.views = {
                'home': 'home-view',
                'about': 'about-view',
                'skills': 'skills-view',
                'projects': 'projects-view',
                'contact': 'contact-view'
            };
            this.init();
        }

        init() {
            // Navigation click handling
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', (e) => {
                    e.preventDefault();
                    const viewKey = link.getAttribute('data-view');
                    if (viewKey && this.views[viewKey]) {
                        this.navigateTo(viewKey);
                        this.closeMobileMenu();
                    }
                });
            });

            // Mobile toggle
            const toggleBtn = document.getElementById('menuToggle');
            const navMenu = document.getElementById('navLinks');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', () => {
                    navMenu.classList.toggle('active');
                });
            }

            window.addEventListener('popstate', () => this.loadViewFromHash());
            this.loadViewFromHash();

            // Contact form handler
            const form = document.getElementById('contact-form');
            if (form) {
                form.addEventListener('submit', (e) => {
                    e.preventDefault();
                    const name = document.getElementById('name').value;
                    const email = document.getElementById('email').value;
                    if (name && email) {
                        alert(`Thank you ${name}! Your message has been received. I'll respond within 24 hours at ${email}.`);
                        form.reset();
                    } else {
                        alert('Please fill in name and email.');
                    }
                });
            }
        }

        closeMobileMenu() {
            const navMenu = document.getElementById('navLinks');
            if (navMenu) navMenu.classList.remove('active');
        }

        navigateTo(viewKey) {
            window.history.pushState({}, '', `#${viewKey}`);
            this.loadViewFromHash();
        }

        loadViewFromHash() {
            let hash = window.location.hash.substring(1) || 'home';
            if (!this.views[hash]) hash = 'home';
            const activeViewId = this.views[hash];
            // Hide all views
            document.querySelectorAll('.view').forEach(view => {
                view.classList.remove('active');
            });
            const currentView = document.getElementById(activeViewId);
            if (currentView) currentView.classList.add('active');

            // Update active class on nav links
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('data-view') === hash) {
                    link.classList.add('active');
                }
            });
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        new PortfolioRouter();
    });
