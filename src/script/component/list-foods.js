import './item-food.js';
class ListFoods extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set foods(foods) {
        this._foods = foods;        
        this.render();        
    }
    render() {        
        this.shadowDOM.innerHTML = ``;        
        this._foods.map((food) => {            
            const foodItemElement = document.createElement('item-food');           
            foodItemElement.food = food;
            this.shadowDOM.appendChild(foodItemElement);                  
        })
        
    }
    renderError(keyword) {
        this.shadowDOM.innerHTML = `
        <style>                        
            .placeholder {
                font-weight: lighter;
                color: rgba(0,0,0,0.5);
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
            }                        
        </style>
        `;
        this.shadowDOM.innerHTML += `<h2 class="placeholder">${keyword} Not Found</h2>`;
    }
}

customElements.define("list-food", ListFoods);