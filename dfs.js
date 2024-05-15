function dfs(graph, startNode) {
    let visited = [];
    let pathLength = 0;

    
    function dfsUtil(node, count) {
        visited.push(node);
    
        if (node === endNode) {
            pathLength = count;
        }
        
        let neighbors = graph[node];
        for (let i = 0; i < neighbors.length; i++) {
            if (!visited.includes(neighbors[i])) {
                dfsUtil(neighbors[i], count + 1);
            }
        }
    }
    
    dfsUtil(startNode, 0);
    return pathLength_;
    
    //github
    // Пример графа
    let graph = {
    A: ['B', 'C'],
    B: ['A', 'D', 'E'],
    C: ['A', 'F'],
    D: ['B'],
    E: ['B', 'F'],
    F: ['C', 'E']
    }; //комментари
}
    let pathLength = dfs(graph, 'A', 'F');
    console.log("Length of path from A to F: " + pathLength);
