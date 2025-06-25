async function searchMovie() {
  const title = document.getElementById("movieInput").value.trim();
  const apiKey = "18ee1ea5";

  if (!title) {
    alert("Please enter a movie title!");
    return;
  }

  const response = await fetch(`https://www.omdbapi.com/?t=${encodeURIComponent(title)}&apikey=${apiKey}`);
  const data = await response.json();

  const resultDiv = document.getElementById("result");
  if (data.Response === "False") {
    resultDiv.innerHTML = `<p>❌ Movie not found!</p>`;
  } else {
    resultDiv.innerHTML = `
      <h2>${data.Title} (${data.Year})</h2>
      <img src="${data.Poster}" alt="Poster" height="300"/>
      <p><strong>Genre:</strong> ${data.Genre}</p>
      <p><strong>Plot:</strong> ${data.Plot}</p>
      <p><strong>IMDB Rating:</strong> ${data.imdbRating}</p>
    `;
  }
}
