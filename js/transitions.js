// Page transition animation on navigation click
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('a[href*=".html"]');
  
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // Don't prevent default for external links or if it's the current page
      const href = this.getAttribute('href');
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      
      if (href && href.includes('.html') && href !== currentPage && !this.classList.contains('nav-logo')) {
        e.preventDefault();
        
        // Fade out the current page
        document.body.style.animation = 'fadeOut 0.5s ease-in-out forwards';
        
        // Navigate after fade completes
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
});
