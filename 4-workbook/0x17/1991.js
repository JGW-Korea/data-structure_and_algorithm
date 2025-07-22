const input = require("fs").readFileSync("index.txt").toString().trim().split("\n");

// 전위 순회(preOrder): V -> L -> R
function preOrder(binaryTree, node, result) {
  if (!node) return;
  result.push(node);
  preOrder(binaryTree, binaryTree[node].left, result);
  preOrder(binaryTree, binaryTree[node].right, result);
}

// 중위 순회(inOrder): L -> V -> R
function inOrder(binaryTree, node, result) {
  if (!node) return;
  inOrder(binaryTree, binaryTree[node].left, result);
  result.push(node);
  inOrder(binaryTree, binaryTree[node].right, result);
}

// 후위 순회(postOrder): L -> R -> V
function postOrder(binaryTree, node, result) {
  if (!node) return;
  postOrder(binaryTree, binaryTree[node].left, result);
  postOrder(binaryTree, binaryTree[node].right, result);
  result.push(node);
}

function solution(N, binaryTree) {
  const traverse = (method, root = "A") => {
    const result = [];
    method(binaryTree, root, result);
    return result.join("");
  };

  return [traverse(preOrder), traverse(inOrder), traverse(postOrder)].join("\n");
}

const N = Number(input[0]);

// 이진 트리 구축
const binaryTree = {};
for (const [root, left, right] of input.slice(1).map((el) => el.split(" "))) {
  binaryTree[root] = {
    left: left !== "." ? left : null,
    right: right !== "." ? right : null,
  };
}

console.log(solution(N, binaryTree));

/*
              A
        B         C
     D    .     E   F
   .  .  .  .  . . . G
 
*/

// 2 ** 4 => 2 * 2 * 2 * 2 = 16 - 1 = 15
