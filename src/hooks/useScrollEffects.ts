import { useEffect } from 'react';

export function useScrollEffects() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const revealEls = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));

    if (prefersReducedMotion) {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    } else if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
      );
      revealEls.forEach((el) => observer.observe(el));

      const header = document.querySelector('.site-header');
      const onScroll = () => {
        if (!header) return;
        if (window.scrollY > 12) header.classList.add('is-scrolled');
        else header.classList.remove('is-scrolled');
      };
      window.addEventListener('scroll', onScroll, { passive: true });
      onScroll();

      return () => {
        observer.disconnect();
        window.removeEventListener('scroll', onScroll);
      };
    } else {
      revealEls.forEach((el) => el.classList.add('is-visible'));
    }
  }, []);
}
