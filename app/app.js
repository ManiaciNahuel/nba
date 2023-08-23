var accdr = document.getElementsByClassName("accordion");

var closebtn = document.getElementsByClassName("close_btn");

var i;

for (i = 0; i < accdr.length; i++) {
  /* Accionar boton abrir - escudos */
  accdr[i].addEventListener("click", function () {
    
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = 75 + "vh";
      console.log(content.style.CSSStyleDeclaration.length)
    } 
  });

  /* Accionar boton cerrar */
  closebtn[i].addEventListener("click", function () {
    var parent = this.parentNode;
     if (parent.style.maxHeight) {
      parent.style.maxHeight = null;
    } else {
      parent.style.maxHeight = 1 + "vh";
    }
  });
}
/*


        <div class="item">
          <div class="accordion"> 
            <img src="media/logos/Clevelan-Cavaliers-logo-2022-300x300.png" alt="cavs" /> 
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
            <img src="media/logos/nba-atlanta-hawks-logo-300x300.png" alt="hawks" />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>
            <img src="media/logos/nba-atlanta-hawks-logo-300x300.png" alt="hawks" />
            <h2>ATLANTA HAWKS</h2>
            <div>
              <li>1</li>
              <li>2</li>
              <li>3</li>
              <li>4</li>
              <li>5</li>
            </div>
            <p>Adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facere natus id provident maiores est totam magnam dignissimos earum officia, quisquam, enim corrupti, tenetur laudantium error numquam quis aspernatur. Placeat, aliquid!
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et modi necessitatibus, recusandae dolorem minus voluptas asperiores. Totam non illum error eos rem doloribus debitis earum molestiae deserunt. Qui, veniam recusandae!
            Sunt vel illum ad sapiente repudiandae amet quibusdam eaque. Fugiat eum aspernatur numquam eligendi alias temporibus ipsum totam cum iste aut molestiae pariatur quasi ab dolore eos reiciendis, excepturi dignissimos.
            Harum porro earum, sed vero ipsum in enim, temporibus neque est tempore animi aspernatur iure sit recusandae dolores praesentium? Dolorem tempora dolores corrupti amet molestias? Nulla nesciunt aut sint vero.
            Impedit quidem obcaecati temporibus voluptas consectetur totam enim. Laudantium rem voluptates omnis culpa saepe animi nemo? Tenetur dicta nostrum porro voluptatem minima blanditiis laborum tempore unde, ipsa rem sapiente voluptas.
            Distinctio necessitatibus rem quidem ducimus laborum maiores eius voluptatum, tempore minus dolor! Sed est adipisci nisi quisquam alias facilis quia pariatur repudiandae animi? Voluptatem cupiditate ab modi doloremque commodi quaerat.
            Inventore omnis, voluptates nam ullam dignissimos modi eaque odit? Veritatis beatae ex inventore delectus voluptas, eos placeat officiis ratione aperiam dolores libero ducimus voluptatem! Officiis rem ex excepturi ducimus dolorum.
            </p>
          </div>
        </div>
        
        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-boston-celtics-logo-300x300.png" alt="celtics" />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-brooklyn-nets-logo-300x300.png" alt="nets" />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
            <img src="media/logos/nba-charlotte-hornets-logo-300x300.png" alt="hornets" />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-chicago-bulls-logo-300x300.png" alt="bulls" />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-dallas-mavericks-logo-300x300.png" alt="mavs" />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-denver-nuggets-logo-2018-300x300.png" alt="nuggets" />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-detroit-pistons-logo-300x300.png" alt="pistons" />
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-houston-rockets-logo-2020-300x300.png" alt="rockets" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-golden-state-warriors-logo-2020-300x300.png" alt="warriors" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-indiana-pacers-logo-300x300.png" alt="pacers" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-la-clippers-logo-300x300.png" alt="clippers" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-los-angeles-lakers-logo-300x300.png" alt="lakers" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-memphis-grizzlies-logo-300x300.png" alt="grizzlies" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-miami-heat-logo-300x300.png" alt="heat" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-milwaukee-bucks-logo-300x300.png" alt="bucks" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-minnesota-timberwolves-logo-300x300.png" alt="timberwolves" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-new-orleans-pelicans-logo-300x300.png" alt="pelicans" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-oklahoma-city-thunder-logo-300x300.png" alt="thunder" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-new-york-knicks-logo-300x300.png" alt="knicks" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-orlando-magic-logo-300x300.png" alt="magic" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-philadelphia-76ers-logo-300x300.png" alt="76ers" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-phoenix-suns-logo-300x300.png" alt="suns" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-portland-trail-blazers-logo-300x300.png" alt="blazers" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-sacramento-kings-logo-300x300.png" alt="kings" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-san-antonio-spurs-logo-300x300.png" alt="spurs" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-washington-wizards-logo-300x300.png" alt="wizards" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/nba-toronto-raptors-logo-2020-300x300.png" alt="raptors" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

        <div class="item">
          <div class="accordion"> 
        <img src="media/logos/utah-jazz-logo-2022-300x300.png" alt="jazz" />
             
          </div>
          <div class="accordion-content"> <!-- Info oculta -->
            <button class="close_btn"> &times; </button>

            <p>Adipisicing elit, sed do eiusmod tempor incclassclassunt ut labore et dolore ? Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero commodi dolorum consequatur quibusdam laborum recusandae, excepturi officiis labore rerum autem aut error magni nobis animi fugit aliquam quasi magnam voluptates.</p>
          </div>
        </div>

      
 teams = [ {
    id: 0,
    name: 'Cleveland Cavaliers',
    logo: "media/logos/Clevelan-Cavaliers-logo-2022-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  },
  {
    id: 1,
    name: 'Atlanta Hawks',
    logo: "media/logos/nba-atlanta-hawks-logo-300x300.png",
    information: {
      fundation: 1999,
      stadium: 'Crypto Arena',
      championships: 19,
      info: "Lorem"
    }
  }
] */

