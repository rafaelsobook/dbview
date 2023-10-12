function observeAndToggleClass(selector, className) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      entry.target.classList.toggle(className, entry.isIntersecting);
    });
  });

  const elements = document.querySelectorAll(selector);
  elements.forEach(el => observer.observe(el));
}

observeAndToggleClass('.hidden', 'show');
observeAndToggleClass('.hiddenn', 'showw');
