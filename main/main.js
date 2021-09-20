//Aggiungere lo stato per ogni todo e modificare la visualizzazione dell'elemento in pagina, verde e barrato se il todo è stato fatto o rosso se non è ancora stato fatto.
//Prevedere inoltre un pulsante per modificare lo stato del singolo todo

const app = new Vue({
    el: "#root",
    data: {
        elements: [
            {
                "task" : "Portare i figli a scuola",
                "condition" : "Non Fatto"
            },
            { 
                "task" : "Appuntamento dal medico",
                "condition" : "Non Fatto"
            },
            { 
                "task" : "Fare la spesa",
                "condition" : "Non Fatto"
            }
        ],
        newElement: ""
    },
    methods: {
        addElement: function() {
            if(this.newElement != ""){
                this.elements(task, condition).push(this.newElement);
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
            
