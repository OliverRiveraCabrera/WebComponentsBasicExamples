//componente basico
class componenteA extends HTMLElement{

    //constructor de la clase
    constructor(){
        super();//llamada del cosntructor de la clase HTMLElement
    }

    //metodo que se ejecuta al iniciar el componente
    connectedCallback(){
        //HTML que retorna
        this.innerHTML = `
        <h1>Titulo</h1>
        <h2>Subtitulo</h2>
        `;
        //estilos del componente
        this.style.fontFamily = "Arial";
        this.style.color = "blue";
    }
}

//definicion del componente, resibe el nombre del componente y el nombre de la clase
window.customElements.define("componente-titulo", componenteA);