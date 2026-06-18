// Select DOM elements
const cameraInput = document.getElementById('cameraInput');
const galleryInput = document.getElementById('galleryInput');
const previewGrid = document.getElementById('previewGrid');

// Core function to handle and display images
function handleImageChange(event) {
  const files = event.target.files;
  
  if (files) {
    Array.from(files).forEach((file) => {
      // Create image element
      const img = document.createElement('img');
      img.src = URL.createObjectURL(file);
      img.className = 'preview-img';
      
      // Append to the grid
      previewGrid.appendChild(img);
    });
  }
}

// Attach event listeners to inputs
cameraInput.addEventListener('change', handleImageChange);
galleryInput.addEventListener('change', handleImageChange);