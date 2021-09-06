//componente con atributos
class componenteB extends HTMLElement{

    constructor(){
        super();
        //inicializacion de los atrubutos que usaremos como atributos del componente
        this.nombre = "NA";
        this.apellido = "NA";
    }

    //retorna una lista de los atrubutos de la etiqueta
    static get observedAttributes(){
        return ['nombre', 'apellido'];//lista de los atributos que tiene el componente
    }

    //se ejecuta al resivir el atributo y se ejecuta por cada atributo
    attributeChangedCallback(name, oldValue, newValue){//nombre del atrubuto del componente, valor antiguo y nuevo del atributo del componente
        //switch para ejecutar codigo en base a que atributo esta recibiendo datos
        switch(name){
            case "nombre":
                this.nombre = newValue; //pasamos el nuevo valor al atributo de la clase
            break;
            case "apellido":
                this.apellido = newValue;
            break;
        }
    }

    connectedCallback(){
        //llamada de variables en el html
        this.innerHTML = `
        <h2>Hola ${this.nombre} ${this.apellido}</h2>
        `;
    }
}

window.customElements.define("componente-hola", componenteB);