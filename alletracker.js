function displayChecked() {
    var resultDiv = document.getElementById('myPopup');
    var resultContent = resultDiv.querySelector('.popup-content');
    resultContent.innerHTML = '<h2>Checked Items:</h2>' + replacedValues.join('<br>');
    resultDiv.classList.add("show");
  }