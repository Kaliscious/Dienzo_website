
document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu functionality
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
  const navbar = document.querySelector('.navbar');
  
  if (mobileMenuBtn) {
    // Create mobile nav if it doesn't exist
    let mobileNav = document.querySelector('.mobile-nav');
    
    if (!mobileNav) {
      mobileNav = document.createElement('div');
      mobileNav.className = 'mobile-nav';
      
      // Clone nav links from desktop nav
      const navLinks = document.querySelector('.nav-links');
      if (navLinks) {
        const clonedLinks = navLinks.cloneNode(true);
        mobileNav.appendChild(clonedLinks);
      }
      
      navbar.appendChild(mobileNav);
    }
    
    mobileMenuBtn.addEventListener('click', function() {
      mobileNav.classList.toggle('active');
      
      // Toggle menu button appearance
      const spans = this.querySelectorAll('span');
      if (mobileNav.classList.contains('active')) {
        spans[0].style.transform = 'translateY(9px) rotate(45deg)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'translateY(-9px) rotate(-45deg)';
      } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
    
    // Close mobile menu when clicking anywhere else
    document.addEventListener('click', function(event) {
      if (!navbar.contains(event.target) && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        const spans = mobileMenuBtn.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
      }
    });
  }

  // Add fade-in animation to sections
  const sections = document.querySelectorAll('section, .page-container');
  sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
      section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      section.style.opacity = '1';
      section.style.transform = 'translateY(0)';
    }, 100);
  });
});
