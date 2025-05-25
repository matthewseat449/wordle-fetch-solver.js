// retrieves the correct solution from the current date's JSON file that the website loads
// logs the key value to 'solution' to the console, and also generates a JS alert with the correct solution

fetch('https://www.nytimes.com/svc/wordle/v2/2025-05-24.json')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    console.log('Wordle Data:', data);
    console.log('Solution:', data.solution);
    alert(`Today's Wordle solution is: ${data.solution}`);
  })
  .catch(error => {
    console.error('Error fetching Wordle data:', error);
  });
