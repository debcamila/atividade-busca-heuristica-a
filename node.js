class Node {
  name;
  cost; // f
  cost_sum = 0; // g
  came_from; // pai
  solution; // trajeto final

  constructor(name, cost, cost_sum, came_from, solution) {
    this.name = name;
    this.cost = cost;
    this.came_from = came_from;
    this.solution = solution;
    this.cost_sum = cost_sum;
  }
}

module.exports = { Node };
