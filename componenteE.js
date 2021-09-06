//componente que aumente el valor de una variable
class componenteE extends HTMLElement{

    constructor(){
        super();

        //declaracion del shadow root
        this.shadow = this.attachShadow({mode: "open"});
    }

    static get observedAttributes(){
        return ['count'];
    }

    //get del atributo count
    get count(){
        return this.getAttribute("count"); //retorna el valor de count
    }

    //set de count
    set count(newValue){
        this.setAttribute("count", newValue); //asigna a count el valor recibido
    }

    //se ejecuta cada que hay un cambio en los atributos
    attributeChangedCallback(name, oldValue, newValue){
        switch(name){
            case "count":
                this.render(); // llamamos a la funcion de render
                let btnAdd = this.shadow.querySelector("#btnAdd"); //obtencion del boton con el id btnAdd del shadowDom
                btnAdd.addEventListener('click', this.increment.bind(this)); //definimos el evento click
            break;
        }
    }

    //se definira en el cliuck del boton
    increment(){
        this.count++;//suma 1 a count
    }

    //solo se ejcuta al agregar al doom el web component
    connectedCallback(){
        this.render(); // llamamos a la funcion de render
        let btnAdd = this.shadow.querySelector("#btnAdd"); //obtencion del boton con el id btnAdd del shadowDom
        btnAdd.addEventListener('click', this.increment.bind(this)); //definimos el evento click
    }

    //funcion que define el html del componente
    render(){
        this.shadow.innerHTML = `
            <h1>Counter</h1>
            <h2>${this.count}</h2>
            <button id="btnAdd">Increment +1</button>
            `;
    }
}

window.customElements.define("componente-contador", componenteE);