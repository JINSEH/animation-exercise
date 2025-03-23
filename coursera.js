// This is for the product showcase, when hovering, it will transition from first image to second image smoothly.
for (let i = 1; i <= 8; i++) {
  const container = document.querySelector(`.product${i}`);
  const firstimg = document.querySelector(`.product${i}img`);
  const secondimg = document.querySelector(`.productimg${i}_1`);

  if (container) {
    container.style.cursor = 'pointer';
    container.style.position = 'relative';
  }

  if (firstimg) {
    firstimg.style.transition = 'opacity 0.5s ease-in-out';
    firstimg.style.position = 'relative';
    firstimg.style.top = '0';
    firstimg.style.left = '0';
  }
  
  if (secondimg) {
    secondimg.style.transition = 'opacity 0.5s ease-in-out';
    secondimg.style.position = 'absolute';
    secondimg.style.top = '0';
    secondimg.style.left = '0';
    secondimg.style.opacity = '0';
  }

  setupHoverEffect(container, firstimg, secondimg);
}

//This function is linked to product showcase, changing the opacity of first img to 0 and then changing the second img to 1. This allows switching of img 1 to 2. 
function setupHoverEffect(container, firstimg, secondimg) {
  container.addEventListener("mouseover", () => {
    firstimg.style.opacity = '0';
    secondimg.style.opacity = '1';
  });

  container.addEventListener("mouseout", () => {
    secondimg.style.opacity = '0';
    firstimg.style.opacity = '1';
  });
}