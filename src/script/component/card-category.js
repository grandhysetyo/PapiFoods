class CardCategory extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set data(value){
        this._data = value
        this.render();
    }    
    render() {
        this.shadowDOM.innerHTML = `
        <style>
            title-section{
                font-size: 28px;
            }
            .card-category{
                display: flex;
                flex-direction: row;
                align-items: center;
            }
            .text-category, .img-category{
                width: 50%;
            }
            @media only screen and (min-width: 320px) { 
                /* For phone: */
                .card-category{
                    flex-wrap: wrap;
                }
                .text-category, .img-category{
                    width: 100%;
                }
            }
            @media only screen and (min-width: 600px) {
                /* For tablets: */
                .text-category, .img-category{
                    width: 50%;
                }
            }
            @media only screen and (min-width: 768px) {
                /* For desktop: */
                .text-category, .img-category{
                    width: 50%;
                }
            }
        </style>
        <div class='card-category'>
            <div class="text-category">
                <title-section text1='${this._data.strCategory}' text2='Food'></title-section>
                <p>${this._data.strCategoryDescription}</p>
            </div> 
            <img class='img-category' src="${this._data.strCategoryThumb}" alt='' />
        </div>
        `;
    }
}

customElements.define("card-category", CardCategory);