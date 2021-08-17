class List extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    set data(value){
        this._data = value
        this.render();
    }    
    render() {
        this.shadowDOM.innerHTML = ``;        
        this._data.forEach((el) => {            
            this.shadowDOM.appendChild(`<li> ${el} </li>`);                  
        })
    }
}

customElements.define("list", List);