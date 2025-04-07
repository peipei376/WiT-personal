/**
 * Candidate description page specific script
 */

document.addEventListener('DOMContentLoaded', function() {
  // Add candidate description page specific JavaScript functionality here
  
  // For example, handle vote button events
  const voteButton = document.querySelector('[data-component="primary-button"]');
  if (voteButton) {
    voteButton.addEventListener('click', function() {
      // Voting logic can be implemented here
      console.log('Vote button clicked');
    });
  }
  
  // Recategorize button events
  const recategorizeButton = document.querySelector('[data-component="secondary-button"]');
  const popup = document.getElementById('popup-overlay');
  const closeBtn = document.getElementById('close-popup-btn');
  const selectedOption = document.querySelector(".selected-option");
  const optionsList = document.querySelector(".options-list");


  if (recategorizeButton) {
    recategorizeButton.addEventListener('click', function() {
      // Recategorize logic can be implemented here
      console.log('Recategorize button clicked');
    });
  }

  if (recategorizeButton && popup) {
    recategorizeButton.addEventListener('click', function() {
      console.log('Recategorize button clicked');
      popup.style.display = 'flex'; // 显示弹窗
    });
  }
  
  if (closeBtn && popup) {
    closeBtn.addEventListener('click', function() {
      popup.style.display = 'none'; // 关闭弹窗
    });
  }


  popup.addEventListener('click', function(event) {
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  });

  selectedOption.addEventListener("click", () => {
    optionsList.classList.toggle("hidden");
  });

  document.querySelectorAll(".option").forEach(option => {
    option.addEventListener("click", (e) => {
      selectedOption.textContent = e.target.textContent;
      optionsList.classList.add("hidden");
    });
  });

});





