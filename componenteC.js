//componente con un evento en general
class componenteC extends HTMLElement{

    constructor(){
        super();

        //definicion del evento y tipo de evento
        this.addEventListener('click', e => {
            this.enviarDatos();//funcion que se ejecutara al precionar el componente
        });
    }

    //funcion a ejecutar
    enviarDatos(){
        console.log("Enviado");//envio a consola
    }

    connectedCallback(){
        this.innerHTML = `
        <button>press</button>
        `;
    }
}

window.customElements.define("componente-btn", componenteC);