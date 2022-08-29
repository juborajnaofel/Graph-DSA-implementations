class Graph{

    //graph constructor initialiaing empty adjacecy list
    constructor() {
        this.adjacencyList = {};
    }
    
    //add vertex function
    insertVertex(node) {
        if(!this.adjacencyList[node]){ this.adjacencyList[node] = []; }
    }

    //add edge function
    insertEdge(source_node, destination_node){

        //if source node doesn't exist add it
        if(!this.adjacencyList[source_node]){
            this.insertVertex(source_node);
        }

        //if destination node doesn't exist add it
        if(!this.adjacencyList[destination_node]){
            this.insertVertex(destination_node);
        }

        //creating the connection s---->d
        this.adjacencyList[source_node].push(destination_node);

        //creating the connection s<----d
        this.adjacencyList[destination_node].push(source_node);
    }

    

    printAdjacencyList(){
        console.log(JSON.stringify(this.adjacencyList));
    }

    


}