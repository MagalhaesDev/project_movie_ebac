document.addEventListener("DOMContentLoaded", () => {
  const profileContainer = document.getElementById("profile-container");

  const apiUrl = "https://api.github.com/users/magalhaesdev";

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {

      profileContainer.innerHTML = `
              <img class="profile-avatar" src="https://avatars.githubusercontent.com/u/95831951?v=4" alt=".">
              <h1 class="profile-name">${data.name}</h1>
              <h2 class="profile-username">@${data.location}</h2>
              <ul class="numbers">
                  <li class="numbers-item">
                      <h4>Repositórios</h4>
                      ${data.public_repos}
                  </li>
                  <li class="numbers-item">
                      <h4>Seguidores</h4>
                      ${data.followers}
                  </li>
                  <li class="numbers-item">
                      <h4>Seguindo</h4>
                      ${data.following}
                  </li>
              </ul>
              <a href="${data.html_url}" class="profile-link">Ver no Github</a>
          `;
    })
    .catch((error) => {
      console.error("Erro na requisição:", error);
      profileContainer.innerHTML =
        "<p>Ocorreu um erro ao carregar os dados do GitHub.</p>";
    });
});
