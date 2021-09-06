class componenteF extends HTMLElement{

    constructor(){
        super();
        this.nombre = "";
    }

    static get observedAttributes(){
        return ['nombre'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        switch(name){
            case "nombre":
                this.nombre = (newValue !== "") ? newValue : "ingrese un dato!"; // ejemplo de validacion
                this.render();
            break;
        }
    }

    connectedCallback(){
        this.render();
    }

    render(){
        //boostrap funciona dentro de los componentes
        // asi como cualquier propiedad de las etiquetas html basicas
        this.innerHTML = `
        <h1>Hola ${this.nombre}</h1>
        <a class="btn btn-info" href="document2.html" style="color:#fff">change page</a>
        `;
    }
}

window.customElements.define("componente-envdata", componenteF);