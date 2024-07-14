export const navigationHighlighter = () => {
  const links = document.querySelectorAll('a[href^="#"]');
  const sections = document.querySelectorAll("section[id]");

  const removeHighlight = () => {
    links.forEach((link) => link.classList.remove("highlight"));
  };

  const addHighlight = (id) => {
    const link = document.querySelector(`a[href="#${id}"]`);
    if (link) {
      link.classList.add("highlight");
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          removeHighlight();
          addHighlight(entry.target.id);
        }
      });
    },
    {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }
  );

  sections.forEach((section) => {
    observer.observe(section);
  });

  return () => {
    sections.forEach((section) => {
      observer.unobserve(section);
    });
  };
};
