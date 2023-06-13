const { Node } = require("./node");

let estadoInicialNome = "E6"; // estado exemplo inicial
let estadoFinalNome = "E14"; // estado exemplo final

let fronteira = [];

// distancias heuristicas e reais
const distancias = [
  {
    name: "E1",
    heuristc: {
      E1: null,
      E2: 10,
      E3: 18,
      E4: 24.8,
      E5: 36.4,
      E6: 38.8,
      E7: 35.8,
      E8: 25.4,
      E9: 17.6,
      E10: 9.1,
      E11: 16.7,
      E12: 27.3,
      E13: 27.6,
      E14: 29.8,
    },
    neighbours: { E2: 10 },
  },
  {
    name: "E2",
    heuristc: {
      E1: null,
      E2: null,
      E3: 8.5,
      E4: 14.8,
      E5: 26.2,
      E6: 29.1,
      E7: 26.1,
      E8: 17.3,
      E9: 10,
      E10: 3.5,
      E11: 15.5,
      E12: 20.9,
      E13: 19.1,
      E14: 21.8,
    },
    neighbours: { E1: 10, E3: 8.5, E9: 10, E10: 3.5 },
  },
  {
    name: "E3",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: 6.3,
      E5: 18.2,
      E6: 20.6,
      E7: 17.6,
      E8: 13.6,
      E9: 9.4,
      E10: 10.3,
      E11: 19.5,
      E12: 19.1,
      E13: 12.1,
      E14: 16.6,
    },
    neighbours: { E4: 6.3, E9: 9.4, E13: 18.7, E3: 8.5 },
  },
  {
    name: "E4",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: 12,
      E6: 14.4,
      E7: 11.5,
      E8: 12.4,
      E9: 12.6,
      E10: 16.7,
      E11: 23.6,
      E12: 18.6,
      E13: 10.6,
      E14: 15.4,
    },
    neighbours: { E3: 6.3, E5: 13, E8: 15.3, E13: 12.8 },
  },
  {
    name: "E5",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: 3,
      E7: 2.4,
      E8: 19.4,
      E9: 23.3,
      E10: 28.2,
      E11: 34.2,
      E12: 24.8,
      E13: 14.5,
      E14: 17.9,
    },
    neighbours: { E4: 13, E6: 3, E7: 2.4, E8: 30 },
  },
  {
    name: "E6",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: 3.3,
      E8: 22.3,
      E9: 25.7,
      E10: 30.3,
      E11: 36.7,
      E12: 27.6,
      E13: 15.2,
      E14: 18.2,
    },
    neighbours: { E5: 3 },
  },
  {
    name: "E7",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: null,
      E8: 20,
      E9: 23,
      E10: 27.3,
      E11: 34.2,
      E12: 25.7,
      E13: 12.4,
      E14: 15.6,
    },
    neighbours: {},
  },
  {
    name: "E8",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: null,
      E8: null,
      E9: 8.2,
      E10: 20.3,
      E11: 16.1,
      E12: 6.4,
      E13: 22.7,
      E14: 27.6,
    },
    neighbours: { E9: 9.6, E12: 6.4 },
  },
  {
    name: "E9",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: null,
      E8: null,
      E9: null,
      E10: 13.5,
      E11: 11.2,
      E12: 10.9,
      E13: 21.2,
      E14: 26.6,
    },
    neighbours: { E8: 9.6, E11: 12.2 },
  },
  {
    name: "E10",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: null,
      E8: null,
      E9: null,
      E10: null,
      E11: 17.6,
      E12: 24.2,
      E13: 18.7,
      E14: 21.2,
    },
    neighbours: {},
  },
  {
    name: "E11",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: null,
      E8: null,
      E9: null,
      E10: null,
      E11: null,
      E12: 14.2,
      E13: 31.5,
      E14: 35.5,
    },
    neighbours: { E9: 12.2 },
  },
  {
    name: "E12",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: null,
      E8: null,
      E9: null,
      E10: null,
      E11: null,
      E12: null,
      E13: 28.8,
      E14: 33.6,
    },
    neighbours: { E8: 6.4 },
  },
  {
    name: "E13",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: null,
      E8: null,
      E9: null,
      E10: null,
      E11: null,
      E12: null,
      E13: null,
      E14: 5.1,
    },
    neighbours: { E3: 18.7, E4: 12.8, E14: 5.1 },
  },
  {
    name: "E14",
    heuristc: {
      E1: null,
      E2: null,
      E3: null,
      E4: null,
      E5: null,
      E6: null,
      E7: null,
      E8: null,
      E9: null,
      E10: null,
      E11: null,
      E12: null,
      E13: null,
      E14: null,
    },
    neighbours: { E13: 5.1 },
  },
];

//adicionar nó inicial a fronteira
let estadoInicialNode = new Node(estadoInicialNome, 0, 0, null, []);
fronteira.push(estadoInicialNode);

while (fronteira.length > 0) {
  let indexItemAtual;
  let itemAtual = fronteira.reduce((small, current, i) => {
    if (current.cost < small.cost) {
      indexItemAtual = i;
      return current;
    }
    return small;
  });

  //calcula os vizinhos
  let distanciasItemAtual = distancias.find((n) => n.name === itemAtual.name);
  console.log("Estado atual: ", distanciasItemAtual.name);

  let novosVizinhos = [];
  // passa por cada um dos vizinhos do item atual
  Object.keys(distanciasItemAtual.neighbours).forEach((vizinho) => {
    // testa se tá voltando para o mesmo
    if (itemAtual.came_from && itemAtual.came_from.name === vizinho) {
      return;
    }
    // calcula o f, g, h
    let g = itemAtual.cost_sum + distanciasItemAtual.neighbours[vizinho];
    let h = distancias.find((distancia) => distancia.name === vizinho).heuristc[
      estadoFinalNome
    ];
    let f = g + h;

    //cria um novo nó
    let novoVizinho = new Node(vizinho, f, g, distanciasItemAtual, [
      ...itemAtual.solution,
      { name: itemAtual.name, cost: itemAtual.cost_sum },
    ]);

    // saber se o nó tá repetido na fronteira
    let noRepetidoFronteira = fronteira.find(
      (o) => o.name === novoVizinho.name
    );
    let noRepetidoFronteiraIndex = fronteira.findIndex(
      (o) => o.name === novoVizinho.name
    );
    if (noRepetidoFronteira) {
      if (noRepetidoFronteira.cost < novoVizinho.cost) {
      } else {
        fronteira.splice(noRepetidoFronteiraIndex, 1);
        novosVizinhos.push(novoVizinho);
      }
    } else {
      novosVizinhos.push(novoVizinho);
    }
  });

  // remove itemAtual da fronteira no final (só pra facilitar)
  fronteira.splice(indexItemAtual, 1);

  // add novosVizinhos a fronteira
  fronteira.push(...novosVizinhos);

  console.log(
    "Fronteira: ",
    fronteira.map((n) => {
      return { nome: n.name, custo: n.cost };
    })
  );

  // teste para descobrir se já encontrou o final
  let encontrado = novosVizinhos.find((v) => v.name === estadoFinalNome);
  if (encontrado) {
    encontrado.solution = [
      ...encontrado.solution,
      { name: encontrado.name, cost: encontrado.cost_sum },
    ];
    console.log("ENCONTRADO!");
    console.log("Custo final: ", encontrado.cost);
    console.log("Caminho completo: ", encontrado.solution);
    break; // fim do while
  }
}
