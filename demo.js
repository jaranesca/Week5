"use strict";

// When the window is loaded, set up initial configurations.
window.onload = function () {
  initializeGiftIdeasDropdown();
  configureEventHandlers();
};
function initializeGiftIdeasDropdown() {
  let gifts = [
    { idea: "A house", value: "Gift1" },
    { idea: "A vacation", value: "Gift2" },
    { idea: "A rose", value: "Gift3" },
    { idea: "A photoalbum", value: "Gift4" },
  ];

  const dropdown = document.getElementById("giftIdeas");
  gifts.forEach((gift) => {
    let option = new Option(gift.idea, gift.value);
    dropdown.appendChild(option);
  });
}
function configureEventHandlers() {
  const giftList = document.getElementById("giftIdeas");
  giftList.value = "Gift4"; // Set a default value if applicable.
  giftList.onchange = displaySelectedGift; // Assign handler for change event.
}

// Displays the selected gift in the 'message' element.
function displaySelectedGift() {
  const giftList = document.getElementById("giftIdeas");
  const selectedValue = giftList.value;
  document.getElementById("message").innerText = selectedValue;
}

// (Optional) Function to clear filters, if required by the application.
function clearFilters() {
  const giftList = document.getElementById("giftIdeas");
  const searchField = document.getElementById("mySearchField");
  giftList.value = null; // Reset dropdown.
  searchField.value = ""; // Clear any text in the search field.
}