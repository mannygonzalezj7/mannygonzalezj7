import { useEffect } from "react";

export default function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(
      ".style1, .style2, .style4, .style5"
    );

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.35 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => {
      elements.forEach((el) => observer.unobserve(el));
    };
  }, []);
}
