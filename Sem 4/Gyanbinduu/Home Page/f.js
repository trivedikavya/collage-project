function showPopupf() {
    document.getElementById('popupf').style.display = 'flex';
  }

  function closePopupf() {
    document.getElementById('popupf').style.display = 'none';
  }

  function showThankYouf() {
    document.getElementById('thankYouMsgf').style.display = 'block';
    setTimeout(() => {
      closePopupf();
    }, 2000);
    return true; // Allows the form to submit
  }

  window.onclick = function(event) {
    const popup = document.getElementById('popupf');
    if (event.target === popup) {
      popup.style.display = 'none';
    }
  }