class ItemFood extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set food(food) {
      this._food = food;
      this.render();
    }  
    render() {        
            this.shadowDOM.innerHTML = `
            <style> 
                :host{
                    width: 25%;
                }                               
                .card-food {
                    display: flex;
                    flex-direction: column;                    
                    margin: 10px 20px 30px 20px;
                }                  
                .card-food img {
                    display: block;
                    width: 100%;
                    border-radius: 12px;
                    margin-bottom: 10px;
                }
                .card-food .content {
                    display: flex;
                    flex-direction: column;
                    margin: 0 20px;
                }
                .card-food .content .title{                    
                    margin: 0;
                    font-size: 12px;
                    height: 35px;
                    color: #000;
                }
                .card-food .content .loc {                    
                    color: #838383;
                    margin-bottom: 10px;
                }
                .card-food .content .link-food {                    
                    padding: 12px 18px;
                    background-color: #ff7a00;
                    color: #fff;                    
                    font-size: 12px;
                    font-weight: bold;
                    border-radius: 10px;
                    text-align: center;
                }
                .card-food .content .link-food:hover {
                    text-decoration: none;
                    background-color: #c25e00;
                }
                @media only screen and (min-width: 320px) { 
                    /* For phone: */
                    :host{
                        width: 100%;
                    }
                }
                @media only screen and (min-width: 600px) {
                    /* For tablets: */
                    :host{
                        width: 50%;
                    }
                }
                @media only screen and (min-width: 768px) {
                    /* For desktop: */
                    :host{
                        width: 25%;
                    }
                }            
            </style>
            <div class="card-food">
                <img src="${this._food.strMealThumb}" alt="" />
                <div class="content">                
                    <h5 class="title">${this._food.strMeal.length > 40 ? this._food.strMeal.substring(0,40)+'(...)': this._food.strMeal}</h5>
                    <span class="loc">${this._food.strArea!==undefined ? this._food.strArea : ''}</span>                
                    <a class="link-food" href="/detail.html?id=${this._food.idMeal}">Details</a>
                </div>                
            </div>
            `;        
        
    }    
}
customElements.define("item-food", ItemFood);