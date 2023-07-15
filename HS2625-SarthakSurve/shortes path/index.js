
class PriorityQueue {
    constructor() {
      this.elements = [];
    }
  
    enqueue(element, priority) {
      const queueElement = { element, priority };
      let added = false;
  
      for (let i = 0; i < this.elements.length; i++) {
        if (queueElement.priority < this.elements[i].priority) {
          this.elements.splice(i, 0, queueElement);
          added = true;
          break;
        }
      }
  
      if (!added) {
        this.elements.push(queueElement);
      }
    }
  
    dequeue() {
      if (this.isEmpty()) {
        return null;
      }
      return this.elements.shift();
    }
  
    isEmpty() {
      return this.elements.length === 0;
    }
  }
  

class Node {
    constructor(id, weight) {
      this.id = id;
      this.weight = weight;
      this.adjacentNodes = new Map();
    }
  
    addEdge(node, weight) {
      this.adjacentNodes.set(node, weight);
    }
  }
  
 
  function findShortestPath(startNode, endNode) {
    const distance = new Map();
    const previous = new Map();
    const visited = new Set();
  
    distance.set(startNode, 0);
    previous.set(startNode, null);
  
    const priorityQueue = new PriorityQueue();
    priorityQueue.enqueue(startNode, 0);
  
    while (!priorityQueue.isEmpty()) {
      const currentNode = priorityQueue.dequeue().element;
      visited.add(currentNode);
  
      if (currentNode === endNode) {
       
        return buildPath(previous, endNode);
      }
  
      for (const [adjacentNode, edgeWeight] of currentNode.adjacentNodes.entries()) {
        if (!visited.has(adjacentNode)) {
          const totalDistance = distance.get(currentNode) + edgeWeight;
  
          if (!distance.has(adjacentNode) || totalDistance < distance.get(adjacentNode)) {
            distance.set(adjacentNode, totalDistance);
            previous.set(adjacentNode, currentNode);
            priorityQueue.enqueue(adjacentNode, totalDistance);
          }
        }
      }
    }
  
   
    return null;
  }
  
  
  function buildPath(previous, endNode) {
    const path = [];
    let currentNode = endNode;
  
    while (currentNode !== null) {
      path.unshift(currentNode);
      currentNode = previous.get(currentNode);
    }
  
    return path;
  }
  
  
  const nodeA = new Node("A", 0);
  const nodeB = new Node("B", 4);
  const nodeC = new Node("C", 2);
  const nodeD = new Node("D", 5);
  const nodeE = new Node("E", 1);
  
  nodeA.addEdge(nodeB, 1);
  nodeA.addEdge(nodeC, 4);
  nodeB.addEdge(nodeC, 2);
  nodeB.addEdge(nodeD, 3);
  nodeB.addEdge(nodeE, 2);
  nodeD.addEdge(nodeE, 1);
  
  
  const shortestPath = findShortestPath(nodeA, nodeE);
  console.log(shortestPath); 
  