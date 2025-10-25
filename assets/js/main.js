/**
 * Tech Career Guides - Main JavaScript
 * Interactive features and enhancements
 */

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initMobileMenu();
    initSmoothScrolling();
    initNewsletterSignup();
    initTableOfContents();
    initCodeCopy();
});

/**
 * Mobile Menu Toggle
 */
function initMobileMenu() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenuToggle && mainNav) {
        mobileMenuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            mobileMenuToggle.classList.toggle('active');

            // Animate hamburger menu
            const spans = mobileMenuToggle.querySelectorAll('span');
            if (mainNav.classList.contains('active')) {
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
}

/**
 * Smooth Scrolling for Anchor Links
 */
function initSmoothScrolling() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                e.preventDefault();
                const headerHeight = document.querySelector('.site-header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });

                // Close mobile menu if open
                const mainNav = document.querySelector('.main-nav');
                const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
                if (mainNav && mainNav.classList.contains('active')) {
                    mainNav.classList.remove('active');
                    mobileMenuToggle.classList.remove('active');
                }
            }
        });
    });
}

/**
 * Newsletter Signup (Mock Implementation)
 */
function initNewsletterSignup() {
    const newsletterForm = document.getElementById('newsletter-submit');
    const emailInput = document.getElementById('newsletter-email');

    if (newsletterForm && emailInput) {
        newsletterForm.addEventListener('click', function() {
            const email = emailInput.value.trim();

            if (validateEmail(email)) {
                // Mock signup - in real implementation, send to backend
                showNotification('Thank you for subscribing! Check your email for confirmation.', 'success');
                emailInput.value = '';
            } else {
                showNotification('Please enter a valid email address.', 'error');
            }
        });

        // Allow Enter key submission
        emailInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                newsletterForm.click();
            }
        });
    }
}

/**
 * Table of Contents Generation and Navigation
 */
function initTableOfContents() {
    const tocContainer = document.querySelector('.table-of-contents');
    const headings = document.querySelectorAll('h2, h3, h4');

    if (tocContainer && headings.length > 0) {
        const tocList = document.createElement('ul');
        tocList.className = 'toc-list';

        let currentLevel = 2;
        let currentList = tocList;

        headings.forEach((heading, index) => {
            const level = parseInt(heading.tagName.charAt(1));
            const text = heading.textContent.trim();
            const id = heading.id || `heading-${index}`;

            // Ensure heading has an ID
            heading.id = id;

            const listItem = document.createElement('li');
            listItem.className = `toc-item toc-level-${level}`;

            const link = document.createElement('a');
            link.href = `#${id}`;
            link.textContent = text;
            link.className = 'toc-link';

            listItem.appendChild(link);

            // Handle nesting
            if (level > currentLevel) {
                const subList = document.createElement('ul');
                subList.className = 'toc-sublist';
                currentList.lastElementChild.appendChild(subList);
                currentList = subList;
            } else if (level < currentLevel) {
                // Go up the hierarchy
                for (let i = level; i < currentLevel; i++) {
                    currentList = currentList.parentElement.closest('ul');
                }
            }

            currentList.appendChild(listItem);
            currentLevel = level;
        });

        tocContainer.appendChild(tocList);

        // Add smooth scrolling to TOC links
        const tocLinks = tocContainer.querySelectorAll('.toc-link');
        tocLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    const headerHeight = document.querySelector('.site-header').offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
}

/**
 * Code Block Copy Functionality
 */
function initCodeCopy() {
    const codeBlocks = document.querySelectorAll('.code-block');

    codeBlocks.forEach(block => {
        // Add copy button
        const copyButton = document.createElement('button');
        copyButton.className = 'copy-button';
        copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyButton.title = 'Copy to clipboard';

        copyButton.addEventListener('click', function() {
            const code = block.querySelector('code') || block.querySelector('pre');
            const text = code.textContent || code.innerText;

            navigator.clipboard.writeText(text).then(() => {
                copyButton.innerHTML = '<i class="fas fa-check"></i> Copied!';
                copyButton.classList.add('copied');

                setTimeout(() => {
                    copyButton.innerHTML = '<i class="fas fa-copy"></i> Copy';
                    copyButton.classList.remove('copied');
                }, 2000);
            }).catch(() => {
                showNotification('Failed to copy code. Please copy manually.', 'error');
            });
        });

        block.style.position = 'relative';
        block.appendChild(copyButton);
    });
}

/**
 * Email Validation
 */
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
 * Notification System
 */
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());

    // Create new notification
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i class="fas ${getNotificationIcon(type)}"></i>
            <span>${message}</span>
        </div>
        <button class="notification-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;

    document.body.appendChild(notification);

    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentElement) {
            notification.remove();
        }
    }, 5000);
}

function getNotificationIcon(type) {
    const icons = {
        success: 'fa-check-circle',
        error: 'fa-exclamation-circle',
        warning: 'fa-exclamation-triangle',
        info: 'fa-info-circle'
    };
    return icons[type] || icons.info;
}

/**
 * Utility Functions
 */

// Debounce function for performance
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

// Check if element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Lazy loading for images (if needed)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

/**
 * Performance Monitoring (Optional)
 */
function initPerformanceMonitoring() {
    // Monitor page load performance
    window.addEventListener('load', () => {
        if ('performance' in window) {
            const perfData = performance.getEntriesByType('navigation')[0];
            const pageLoadTime = perfData.loadEventEnd - perfData.fetchStart;

            // Log or send to analytics
            console.log(`Page load time: ${pageLoadTime}ms`);
        }
    });
}

/**
 * Accessibility Enhancements
 */
function initAccessibility() {
    // Add skip to main content link
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.className = 'skip-link';
    skipLink.textContent = 'Skip to main content';
    document.body.insertBefore(skipLink, document.body.firstChild);

    // Add aria-labels where needed
    const dropdownToggles = document.querySelectorAll('.dropdown-toggle');
    dropdownToggles.forEach(toggle => {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-haspopup', 'true');
    });
}

/**
 * Error Handling
 */
window.addEventListener('error', function(e) {
    console.error('JavaScript error:', e.error);
    // Could send to error tracking service
});

window.addEventListener('unhandledrejection', function(e) {
    console.error('Unhandled promise rejection:', e.reason);
    // Could send to error tracking service
});