class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

const check = (value, node) => {
  if (node.value < value) {
    if (node.right) {
      check(value, node.right)
    } else {
      const newNode = new Node(value);
      node.right = newNode;
    }
  }
  else if (node.value > value) {
    if (node.left) {
      check(value, node.left)
    } else {
      const newNode = new Node(value);
      node.left = newNode;
    }
  }
  return node;
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (!this.root) {
      const newNode = new Node(value);
      this.root = newNode;
    } else {
      this.root = check(value, this.root);
    }
  }

  lookup(value) {
    let node = this.root;
    while(true) {
      if(node.value === value) {
        return value;
      } else {
        if (node.value < value) {
          if (node.right) {
            node = node.right;
          } else {
            return 'This value is not found in the binary tree!'
          }
        }
        else if (node.value > value) {
          if (node.left) {
            node = node.left;
          } else {
            return 'This value is not found in the binary tree!'
          }
        }
      }
    }
  }
}

const tree = new BinarySearchTree();
tree.insert(9)
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(170)
tree.insert(15)
tree.insert(1)
JSON.stringify(traverse(tree.root))

tree.lookup(25)

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
