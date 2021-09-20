//Aggiungere lo stato per ogni todo e modificare la visualizzazione dell'elemento in pagina, verde e barrato se il todo è stato fatto o rosso se non è ancora stato fatto.
//Prevedere inoltre un pulsante per modificare lo stato del singolo todo

const app = new Vue({
    el: "#root",
    data: {
        elements: [
            {
                "task" : "Portare i figli a scuola",
                "condition" : false
            },
            { 
                "task" : "Fare la spesa",
                "condition" : false
            },
            { 
                "task" : "Aperitivo",
                "condition" : false
            }
        ],
        newElement: ""
    },
    methods: {
        addElement: function() {
            if(this.newElement != ""){
                let newObject = {"task" : this.newElement, "condition" : false}
                this.elements.push(newObject);
                this.newElement = "";
            }else{
                alert("Inserisci un elemento");
            }
        },
        removeElement: function(indexElm) {
            this.elements.splice(indexElm, 1);
        }
    }
});
            
