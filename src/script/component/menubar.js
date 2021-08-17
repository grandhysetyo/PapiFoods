class MenuBar extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
          <style>
            .card-menu {
              width: 100%;
              display: flex;
              
            }
            .card-menu .category-link {
              display: block;
              width: 80px;
              margin: 20px;
              text-align: center;
              padding: 12px;
              border-radius: 8px;
              background-color: #f5f5f5;
              text-decoration: none;
            }
            .card-menu .category-link img {
              display: block;
              width: 60%;
              margin: auto;
            }
            .card-menu .category-link span {
              display: block;
              color: #838383;
            }
            @media only screen and (min-width: 320px) { 
              /* For phone: */
              .card-menu{
                  flex-wrap: wrap;
                  justify-content: center;
              }
            }
            @media only screen and (min-width: 600px) {
              /* For tablets: */
              .card-menu{
                flex-wrap: no-wrap;
                justify-content: flex-start;
              }
            }
            @media only screen and (min-width: 768px) {
                /* For desktop: */
                .card-menu{
                  flex-wrap: no-wrap;
                  justify-content: flex-start;
                }
            } 
          </style>
          <div class="card-menu">
            <a class="category-link" href="/category.html?id=1">
              <img src="../src/assets/cat-beef.png" alt="" />
              <span>Beef</span>
            </a>
            <a class="category-link" href="/category.html?id=2">
              <img src="../src/assets/cat-chicken.png" alt="" />
              <span>Chicken</span>
            </a>
            <a class="category-link" href="/category.html?id=3">
              <img src="../src/assets/cat-dessert.png" alt="" />
              <span>Dessert</span>
            </a>
            <a class="category-link" href="/category.html?id=8">
              <img src="../src/assets/cat-seafood.png" alt="" />
              <span>Seafood</span>
            </a>
            <a class="category-link" href="/category.html?id=14">
              <img src="../src/assets/cat-goat.png" alt="" />
              <span>Goat</span>
            </a>
          </div>
        `;
    }
}

customElements.define("menu-bar", MenuBar);