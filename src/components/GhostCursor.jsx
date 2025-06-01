import { useEffect } from "react";

const GhostCursor = () => {
  useEffect(() => {
    // Create a div element for the custom cursor
    const cursor = document.createElement("div");
    cursor.id = "cursor";
    document.body.appendChild(cursor);

    // Apply CSS styles directly to the cursor
    cursor.style.position = "fixed";  // Fix the position relative to the viewport
    cursor.style.width = "30px";      // Increase cursor size for visibility
    cursor.style.height = "30px";     // Increase cursor size for visibility
    cursor.style.backgroundColor = "rgba(255, 255, 255, 0.7)";  // Semi-transparent white color
    cursor.style.borderRadius = "50%";  // Circular shape
    cursor.style.pointerEvents = "none";  // Ensure it doesn't interfere with clicks or elements
    cursor.style.transition = "transform 0.1s ease, opacity 0.2s ease";  // Smooth transition
    cursor.style.zIndex = "9999";  // Ensure it's above all other elements

    let mouseX = 0;
    let mouseY = 0;
    let ghostX = 0;
    let ghostY = 0;

    // Function to track mouse position
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    // Animation function to move the cursor smoothly
    const animate = () => {
      ghostX += (mouseX - ghostX) * 0.1;
      ghostY += (mouseY - ghostY) * 0.1;

      // Update the cursor position based on the animation
      cursor.style.transform = `translate(${ghostX}px, ${ghostY}px)`;

      // Continue the animation
      requestAnimationFrame(animate);
    };

    // Event listener for mouse movement
    window.addEventListener("mousemove", handleMouseMove);
    animate();

    // Cursor opacity fade effect when mouse is idle
    let cursorTimeout;
    document.addEventListener("mousemove", () => {
      cursor.style.opacity = "1"; // Make cursor fully visible when moving
      clearTimeout(cursorTimeout);
      cursorTimeout = setTimeout(() => {
        cursor.style.opacity = "0.5"; // Fade the cursor when idle
      }, 1000);
    });

    // Cleanup the cursor when the component is unmounted
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(cursor);  // Remove the custom cursor
    };
  }, []);

  return null;  // No need to render anything, the cursor is created dynamically
};

export default GhostCursor;
