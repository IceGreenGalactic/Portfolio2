
  
  export const updateActiveNavOnScroll = (sections, setActiveNav) => {
    const onScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
  
      for (const section of sections) {
        const element = document.querySelector(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveNav(section);
            break;
          }
        }
      }
    };
  
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll); 
  };
  