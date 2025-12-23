// ============================================
// JBIN PROJECT - MAIN JAVASCRIPT
// Core functionality for navigation and interactions
// ============================================

document.addEventListener('DOMContentLoaded', function() {
  
  // ============================================
  // NAVIGATION
  // ============================================
  
  const navbar = document.querySelector('.navbar');
  const navbarToggle = document.querySelector('.navbar-toggle');
  const navbarMenu = document.querySelector('.navbar-menu');
  const navbarLinks = document.querySelectorAll('.navbar-link');
  
  // Sticky navbar on scroll
  let lastScroll = 0;
  window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
  });
  
  // Mobile menu toggle
  if (navbarToggle) {
    navbarToggle.addEventListener('click', function() {
      navbarMenu.classList.toggle('active');
      this.classList.toggle('active');
      
      // Animate hamburger icon
      const spans = this.querySelectorAll('span');
      if (this.classList.contains('active')) {
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
  
  // Close mobile menu when clicking a link
  navbarLinks.forEach(link => {
    link.addEventListener('click', function() {
      if (window.innerWidth <= 768) {
        navbarMenu.classList.remove('active');
        navbarToggle.classList.remove('active');
        
        const spans = navbarToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  });
  
  // Highlight active page in navigation
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navbarLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });
  
  // ============================================
  // SMOOTH SCROLLING
  // ============================================
  
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      if (href !== '#' && href !== '') {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          const offsetTop = target.offsetTop - 80; // Account for fixed navbar
          window.scrollTo({
            top: offsetTop,
            behavior: 'smooth'
          });
        }
      }
    });
  });
  
  // ============================================
  // SCROLL ANIMATIONS
  // ============================================
  
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };
  
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);
  
  // Observe elements with fade-in class
  document.querySelectorAll('.fade-in').forEach(el => {
    observer.observe(el);
  });
  
  // ============================================
  // ACCORDION (for FAQ sections)
  // ============================================
  
  const accordionHeaders = document.querySelectorAll('.accordion-header');
  
  accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
      const accordionItem = this.parentElement;
      const accordionBody = accordionItem.querySelector('.accordion-body');
      const isActive = accordionItem.classList.contains('active');
      
      // Close all accordions
      document.querySelectorAll('.accordion-item').forEach(item => {
        item.classList.remove('active');
        item.querySelector('.accordion-body').style.maxHeight = null;
      });
      
      // Open clicked accordion if it wasn't active
      if (!isActive) {
        accordionItem.classList.add('active');
        accordionBody.style.maxHeight = accordionBody.scrollHeight + 'px';
      }
    });
  });
  
  // ============================================
  // UTILITY FUNCTIONS
  // ============================================
  
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
  
  // Throttle function for scroll events
  function throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }
  
});

// ============================================
// CSS ANIMATIONS (add to components.css)
// ============================================

// Add this CSS for fade-in animations:
/*
.fade-in {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.fade-in.animate-in {
  opacity: 1;
  transform: translateY(0);
}
*/
