class Button extends HTMLElement {
    constructor(){
        super();        
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.title = this.getAttribute("title") || null;        
        this.render();
    } 
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }    
    
    render() {
        this.shadowDOM.innerHTML = `
            <style>
                .btn {
                    display: block;
                    width: 25%;
                    margin: 20px 0;
                }
                .btn button{
                    padding: 12px 80px;
                    border: solid 1px #FB9A00 !important;
                    color: #FB9A00;
                    border: none;
                    background: none;
                    font-size: 16px;
                    font-weight: bold;
                }
                .btn button:hover{
                    cursor: pointer;
                    color: #fff;
                    background-color: #FB9A00;
                }
            </style>
            <div class='btn'>
                <button type="submit" id='button'> ${this.title} </button>
            </div>
        `;
        this.shadowDOM.querySelector("#button").addEventListener("click", this._clickEvent);
    }
    attributeChangedCallback(name, oldValue, newValue) {
        if (oldValue !== newValue) {
            this[name] = newValue;
            this.render();
        }
        
    }
      
    static get observedAttributes() {
        return ["title"];
    }
}

customElements.define("button-comp", Button);