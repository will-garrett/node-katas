/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
const allPathsSourceTarget = function(graph) {
  let paths = [];
  let stack = [];
  const depthFS = function(nodes, target, index) {
    stack.push(index)
    if (index == target) {
      const path = stack.slice();
      paths.push(path);
      return;
    }
    for (let i = 0; i < nodes.length; i++) {
      depthFS(graph[nodes[i]], target, nodes[i]);
      stack.pop();
    }
    return paths;
  }
  return depthFS(graph[0], graph.length-1, 0);
};

module.exports = allPathsSourceTarget;