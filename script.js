//your JS code here. If required.
// get the dropdown list and button elements
  const colorSelect = document.getElementById('colorSelect');
  const removeButton = document.querySelector('input[type="button"]');

  // add a click event listener to the button
  removeButton.addEventListener('click', () => {
    // get the selected option
    const selectedColor = colorSelect.options[colorSelect.selectedIndex];
    
    // remove the selected option
    selectedColor.remove();
  });