class TitleSection extends HTMLElement {
    constructor(){
        super();
        this.shadowDOM = this.attachShadow({mode: "open"});
    }
    connectedCallback() {
        this.txt1 = this.getAttribute("text1") || null;
        this.txt2 = this.getAttribute("text2") || null;
        this.render();
    }
    render() {
        this.shadowDOM.innerHTML = `
          <style>
                .title-section {
                    margin: 10px 0;
                    color: #ff7a00;
                    font-weight: bold;
                }
                .title-section span {
                     color: #838383;
                }
          </style>
          <h3 class="title-section">${this.txt1} <span>${this.txt2}</span></h3>
        `;
    }
}

customElements.define("title-section", TitleSection);