// GitHub API se projects fetch karna
async function fetchProjects() {
    try {
        const response = await fetch('https://api.github.com/users/vivan0788/repos?sort=updated');
        const repos = await response.json();
        const container = document.getElementById('project-container');
        container.innerHTML = '';

        repos.slice(0, 6).forEach(repo => {
            const card = `
                <div class="card">
                    <h3>${repo.name}</h3>
                    <p>${repo.description || "No description available"}</p>
                    <a href="${repo.html_url}" target="_blank" style="color: #00adb5;">View Repo →</a>
                </div>
            `;
            container.innerHTML += card;
        });
    } catch (error) {
        console.error("Error fetching repos:", error);
    }
}

fetchProjects();
