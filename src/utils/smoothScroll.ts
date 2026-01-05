/**
 * Smooth scroll to a specific element or position
 */
export function smoothScrollTo(target: string | number, offset: number = 100) {
  if (typeof target === 'number') {
    // Scroll to position
    window.scrollTo({
      top: target,
      behavior: 'smooth'
    });
  } else {
    // Scroll to element
    const element = document.querySelector(target);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }
}

/**
 * Enable smooth scroll for all anchor links
 */
export function enableSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (this: HTMLElement, e: Event) {
      e.preventDefault();
      const href = this.getAttribute('href');
      if (href && href !== '#') {
        smoothScrollTo(href);
      }
    });
  });
}
