
import teams from './teamsInfo.js';

var container = document.getElementById("grupo");

function displayTeams(arrayTeams) {
  
  for (const team of arrayTeams) {
    let card = document.createElement("div");
    card.className = "item";
    card.innerHTML += `
            <div class="accordion"> 
            <img src=${team.logo} />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>
            <div class="accordion-header">
              <img src=${team.logo} alt="${team.name} Logo" />
              <h2>${team.name}</h2>
            </div>
            <div class="accordion-body">
              <ul>
                <li>Fundation</li>
                <li>${team.information.fundation}</li>
                <li>Stadium</li>
                <li>${team.information.stadium}</li>
                <li>Championships</li>
                <li>${team.information.championships}</li>
              </ul>
              <p>
                  ${team.information.info}
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa consectetur nisi debitis aut ipsa eaque iusto ipsum, accusantium ullam vitae eius perferendis reiciendis quis fugit consequatur iste modi earum.
                  Nisi placeat officiis accusantium quia, eos voluptates aliquam assumenda vero atque inventore repellendus voluptas facilis culpa cum harum, eligendi iusto quidem error, ducimus qui magni maiores? Pariatur veritatis necessitatibus mollitia.
                  Odit reprehenderit quos fugiat dolor dicta ad officia error asperiores enim totam! Praesentium minima dolore eos, commodi sed mollitia, esse nulla voluptas voluptatum vero illum eveniet repellendus vel ullam nam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa consectetur nisi debitis aut ipsa eaque iusto ipsum, accusantium ullam vitae eius perferendis reiciendis quis fugit consequatur iste modi earum.
                  Nisi placeat officiis accusantium quia, eos voluptates aliquam assumenda vero atque inventore repellendus voluptas facilis culpa cum harum, eligendi iusto quidem error, ducimus qui magni maiores? Pariatur veritatis necessitatibus mollitia.
                  Odit reprehenderit quos fugiat dolor dicta ad officia error asperiores enim totam! Praesentium minima dolore eos, commodi sed mollitia, esse nulla voluptas voluptatum vero illum eveniet repellendus vel ullam nam.
                  Nisi placeat officiis accusantium quia, eos voluptates aliquam assumenda vero atque inventore repellendus voluptas facilis culpa cum harum, eligendi iusto quidem error, ducimus qui magni maiores? Pariatur veritatis necessitatibus mollitia.
                  Odit reprehenderit quos fugiat dolor dicta ad officia error asperiores enim totam! Praesentium minima dolore eos, commodi sed mollitia, esse nulla voluptas voluptatum vero illum eveniet repellendus vel ullam nam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa consectetur nisi debitis aut ipsa eaque iusto ipsum, accusantium ullam vitae eius perferendis reiciendis quis fugit consequatur iste modi earum.
                  Nisi placeat officiis accusantium quia, eos voluptates aliquam assumenda vero atque inventore repellendus voluptas facilis culpa cum harum, eligendi iusto quidem error, ducimus qui magni maiores? Pariatur veritatis necessitatibus mollitia.
                  Odit reprehenderit quos fugiat dolor dicta ad officia error asperiores enim totam! Praesentium minima dolore eos, commodi sed mollitia, esse nulla voluptas voluptatum vero illum eveniet repellendus vel ullam nam.
                  Nisi placeat officiis accusantium quia, eos voluptates aliquam assumenda vero atque inventore repellendus voluptas facilis culpa cum harum, eligendi iusto quidem error, ducimus qui magni maiores? Pariatur veritatis necessitatibus mollitia.
                  Odit reprehenderit quos fugiat dolor dicta ad officia error asperiores enim totam! Praesentium minima dolore eos, commodi sed mollitia, esse nulla voluptas voluptatum vero illum eveniet repellendus vel ullam nam.
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci culpa consectetur nisi debitis aut ipsa eaque iusto ipsum, accusantium ullam vitae eius perferendis reiciendis quis fugit consequatur iste modi earum.
                  Nisi placeat officiis accusantium quia, eos voluptates aliquam assumenda vero atque inventore repellendus voluptas facilis culpa cum harum, eligendi iusto quidem error, ducimus qui magni maiores? Pariatur veritatis necessitatibus mollitia.
                  Odit reprehenderit quos fugiat dolor dicta ad officia error asperiores enim totam! Praesentium minima dolore eos, commodi sed mollitia, esse nulla voluptas voluptatum vero illum eveniet repellendus vel ullam nam.a
                  
              </p>
            </div>
          </div>
            `;

    container.appendChild(card)
  } 
}

displayTeams(teams)