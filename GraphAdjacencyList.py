class Graph():
    adjacencyList = {}
    def __init__(self):
        self.adjacencyList = {}

    #add node
    def addNode(self, node):
        #check if node exists, if not then add that node
        if node not in self.adjacencyList:
            self.adjacencyList[node] = []

    #add edge
    def addEdge(self, snode, dnode):
        #check if source node exists, if not then add that node
        if snode not in self.adjacencyList:
            self.addNode(snode)
        #check if destination node exists, if not then add that node
        if dnode not in self.adjacencyList:
            self.addNode(dnode)

        # s---------->d
        self.adjacencyList[snode].append(dnode)

        # d<----------s
        self.adjacencyList[dnode].append[snode]
    
    # print adjacency list
    def printList(self):
        for key in self.adjacencyList.keys():
            print(key+" : "+self.adjacencyList[key])