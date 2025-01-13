export function parallax(node, speed = 0.5) {
    let scrollY = 0; // Store scroll position reactively
  
    // Update transform on scroll using $effect
    $effect(() => {
      node.style.transform = `translateY(${scrollY * speed}px)`;
    });
  
    // Update scrollY reactively using window.scrollY
    $: scrollY = window.scrollY;
  
    // Cleanup function for destroying the parallax effect
    return {
      destroy() {
        window.removeEventListener("scroll", () => {}); // Empty listener to avoid errors
      },
    };
  }