document.addEventListener('DOMContentLoaded', function() {
  const wheel = document.getElementById('wheel');
  const spinButton = document.getElementById('spin-button');
  let isSpinning = false;
  // Cumulative rotation: CSS transitions interpolate from the previous transform to
  // the new one. Setting a fresh "absolute" ~1000–2000deg each spin only changes the
  // delta from the last rest angle—often a small angle, or backward if the new
  // value is smaller than the current one.
  let currentRotation = 0;

  spinButton.addEventListener('click', function() {
    if (isSpinning) return;
    
    isSpinning = true;
    spinButton.disabled = true;
    
    // Add random full rotations (3-6) plus a random angle on top of where we already are
    const spins = 3 + Math.random() * 3; // 3-6 full rotations
    const randomAngle = Math.random() * 360; // Random final position
    const delta = spins * 360 + randomAngle;
    currentRotation += delta;
    
    wheel.style.transform = `rotate(${currentRotation}deg)`;
    
    // Re-enable button after animation completes
    setTimeout(function() {
      isSpinning = false;
      spinButton.disabled = false;
      
    }, 4000); // Match the CSS transition duration
  });
});
