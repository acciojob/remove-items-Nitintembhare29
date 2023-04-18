//your JS code here. If required.
// get the dropdown list and button elements
  const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.querySelector('input[type="button"]');

  // add a click event listener to the button
  removeButton.addEventListener('click', () => {
    // When the button is clicked, the selected color is 
	// removed from the dropdown list using the remove method.
	  colorSelect.remove(colorSelect.selectedIndex);
    
  });