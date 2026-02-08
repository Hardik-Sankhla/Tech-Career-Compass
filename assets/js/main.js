// Tech Career Compass - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Theme Toggle
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;
    
    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    if (themeToggle) {
        themeToggle.addEventListener('click', function() {
            const theme = html.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            
            html.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }
    
    function updateThemeIcon(theme) {
        const icon = document.querySelector('.theme-icon');
        if (icon) {
            icon.textContent = theme === 'light' ? '🌙' : '☀️';
        }
    }
    
    // Mobile Menu Toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
    
    // Smooth Scroll for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '#!') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerOffset = 80;
                    const elementPosition = target.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Active Navigation Highlighting
    const navLinks = document.querySelectorAll('.nav-link');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        if (currentPath.startsWith(linkPath) && linkPath !== '/') {
            link.classList.add('active');
        } else if (currentPath === '/' && linkPath === '/') {
            link.classList.add('active');
        }
    });
    
    // Copy Code Button for Code Blocks
    document.querySelectorAll('pre code').forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-code';
        button.textContent = 'Copy';
        button.setAttribute('aria-label', 'Copy code to clipboard');
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
        
        button.addEventListener('click', async function() {
            const code = block.textContent;
            try {
                await navigator.clipboard.writeText(code);
                button.textContent = 'Copied!';
                button.classList.add('copied');
                
                setTimeout(() => {
                    button.textContent = 'Copy';
                    button.classList.remove('copied');
                }, 2000);
            } catch (err) {
                button.textContent = 'Failed';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            }
        });
    });
    
    // Utility: Debounce Function
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // External Links - Open in New Tab
    document.querySelectorAll('a[href^="http"]').forEach(link => {
        if (!link.href.includes(window.location.hostname)) {
            link.setAttribute('target', '_blank');
            link.setAttribute('rel', 'noopener noreferrer');
        }
    });
    
    // Table of Contents Active Highlighting
    const tocLinks = document.querySelectorAll('#toc a');
    if (tocLinks.length > 0) {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                const id = entry.target.getAttribute('id');
                const tocLink = document.querySelector(`#toc a[href="#${id}"]`);
                
                if (entry.isIntersecting && tocLink) {
                    tocLinks.forEach(link => link.classList.remove('active'));
                    tocLink.classList.add('active');
                }
            });
        }, {
            rootMargin: '-80px 0px -80% 0px'
        });
        
        document.querySelectorAll('.docs-body h2, .docs-body h3, .docs-body h4').forEach(heading => {
            observer.observe(heading);
        });
    }
    
    // Back to Top Button
    const backToTop = document.createElement('button');
    backToTop.innerHTML = '↑';
    backToTop.className = 'back-to-top';
    backToTop.setAttribute('aria-label', 'Back to top');
    backToTop.style.cssText = `
        position: fixed;
        bottom: 24px;
        right: 24px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background: var(--primary);
        color: white;
        border: none;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: var(--transition);
        font-size: 20px;
        z-index: 99;
        box-shadow: var(--shadow-lg);
    `;
    
    document.body.appendChild(backToTop);
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 400) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
    
    backToTop.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
