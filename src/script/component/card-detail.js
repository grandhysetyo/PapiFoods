class CardDetail extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set data(value){
        this._data = value
        this.render();
    }  
    
    render() {
        let igri = ``;  
        let meas = ``;          
        this._data.ingridients.forEach((el) => {            
            igri += `<li> ${el} </li>`;                  
        });
        this._data.measure.forEach((el) => {
            meas +=`<li> ${el} </li>`
        })        

        this.shadowDOM.innerHTML = `
        <style>
            :host{
                display: block;
                margin: 20px 0;                
            }
            title-section{
                font-size: 28px;
            }
            .card-detail{
                display: flex;
                flex-direction: column;                
            }
            .card-detail .img-detail{
                width: 100%;
                display: block;
                margin: 20px 0;
                border-radius: 12px;
            }
            .wrapper{
                display: flex;
            }
            .wrapper .ingridients, .wrapper .measure{
                width: 50%;
            }
            
        </style>
        <div class='card-detail'>            
            <title-section text1='${this._data.detail.strMeal}' text2='Food'></title-section>
            <span>${this._data.detail.strArea}</span>
            <img class='img-detail' src="${this._data.detail.strMealThumb}" alt='' />
            
            <div class='wrapper'>                
                <div class='ingridients'>
                    <title-section text1='Ingredients' text2='Food'></title-section>
                    <ul>
                        ${igri}
                    <ul>
                </div>
                <div class='measure'>
                    <title-section text1='Measure' text2='Food'></title-section>
                    <ul>
                        ${meas}
                    <ul>                      
                </div>
            </div> 
            <title-section text1='Instruction' text2='Food'></title-section>
            <p>${this._data.detail.strInstructions}</p>                                  
        </div>
        `;
        
    }
}

customElements.define("card-detail", CardDetail);