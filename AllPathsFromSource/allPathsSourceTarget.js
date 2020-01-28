/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
  const res = [];
  const path = [];  
        
  path.push(0);
 
  dfsSearch(0); 
  
  function dfsSearch(node) {
       
      if (node == graph.length - 1) {           
          res.push(path.slice(0));           
      } else
          for (nextNode of graph[node]) {
              path.push(nextNode);
              dfsSearch(nextNode);
              path.pop();
          }
  }
  return res;
};

module.exports = allPathsSourceTarget;