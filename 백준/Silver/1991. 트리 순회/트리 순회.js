function solution(tree) {
  let result = '';

  // 전위 순회 (Pre Order) : Root -> Left -> Right
  const preOrder = (tree, node) => {
    if(node === '.') return;

    const [left, right] = tree[node];
    
    result += node;
    preOrder(tree, left);
    preOrder(tree, right);
  }

  // 중위 순회 (In Order) : Left -> Root -> Right
  const inOrder = (tree, node) => {
    if(node === '.') return;

    const [left, right] = tree[node];

    inOrder(tree, left);
    result += node;
    inOrder(tree, right);
  }

  // 후위 순회 (Post Order) : Left -> Rigth -> Root
  const postOrder = (tree, node) => {
    if(node === '.') return;

    const [left, right] = tree[node];

    postOrder(tree, left);
    postOrder(tree, right);
    result += node;
  }

  preOrder(tree, 'A');
  result += '\n';
  inOrder(tree, 'A');
  result += '\n';
  postOrder(tree, 'A');
  
  return result;
}

const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const tree = {};

for(let i = 1; i < input.length; i++) {
  const [node, left, right] = input[i].split(' ');
  tree[node] = [left, right];
}

console.log(solution(tree));