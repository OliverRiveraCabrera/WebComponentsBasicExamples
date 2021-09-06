//componente con funciones externas
class componenteD extends HTMLElement{

    constructor(){
        super();

        this.txtid = "";
    }

    static get observedAttributes(){
        return ['txtid'];
    }

    attributeChangedCallback(name, oldValue, newValue){
        switch(name){
            case "txtid":
                this.txtid = newValue;
            break;
        }
    }

    connectedCallback(){
        //agregar funciones externas al html del componente
        this.innerHTML = `
            <h1 onclick="sendData1('${this.txtid}');">Hola</h1>
            <h1 onclick="sendData2('${this.txtid}');">Adios</h1>
            `;
    }
}

//funciones que se llaman en las opcopnes del compoente
function sendData1(txtid){
    document.getElementById(txtid).value = "Hola"; // cambio del valor del input
}

function sendData2(txtid){
    document.getElementById(txtid).value = "Adios"; // cambio del valor del input
}

window.customElements.define("componente-opciones", componenteD);