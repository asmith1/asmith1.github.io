document.addEventListener('DOMContentLoaded', function() {
  const wheel = document.getElementById('wheel');
  const spinButton = document.getElementById('spin-button');
  let isSpinning = false;

  spinButton.addEventListener('click', function() {
    if (isSpinning) return;
    
    isSpinning = true;
    spinButton.disabled = true;
    
    // Generate a random number of full rotations (3-6) plus a random angle
    const spins = 3 + Math.random() * 3; // 3-6 full rotations
    const randomAngle = Math.random() * 360; // Random final position
    const totalRotation = spins * 360 + randomAngle;
    
    // Apply the rotation
    wheel.style.transform = `rotate(${totalRotation}deg)`;
    
    // Calculate which section the wheel lands on
    // The pointer is at the top (0 degrees), so we need to account for the rotation
    // Each section is 90 degrees (360 / 4)
    const normalizedAngle = (360 - (totalRotation % 360)) % 360;
    let selectedSection;
    
    if (normalizedAngle >= 0 && normalizedAngle < 90) {
      selectedSection = 1; // Echad
    } else if (normalizedAngle >= 90 && normalizedAngle < 180) {
      selectedSection = 2; // Shtayim
    } else if (normalizedAngle >= 180 && normalizedAngle < 270) {
      selectedSection = 3; // Shalosh
    } else {
      selectedSection = 4; // Arba
    }
    
    // Re-enable button after animation completes
    setTimeout(function() {
      isSpinning = false;
      spinButton.disabled = false;
      
      // Optional: Show result
      const sectionNames = {
        1: 'Echad (1)',
        2: 'Shtayim (2)',
        3: 'Shalosh (3)',
        4: 'Arba (4)'
      };
      console.log('Selected: ' + sectionNames[selectedSection]);
    }, 4000); // Match the CSS transition duration
  });
});
