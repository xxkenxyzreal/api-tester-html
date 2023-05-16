const linkInput = document.getElementById('linkInput');
const fetchDataButton = document.getElementById('fetchDataButton');
const resultContainer = document.getElementById('resultContainer');

fetchDataButton.addEventListener('click', () => {
  const apiUrl = linkInput.value;
  if (apiUrl) {
    fetch(apiUrl)
      .then(response => response.json())
      .then(data => {
        resultContainer.innerText = JSON.stringify(data);
      })
      .catch(error => {
        resultContainer.innerText = 'An error occurred while fetching data.';
      });
  } else {
    resultContainer.innerText = 'Please enter a valid API link.';
  }
});
