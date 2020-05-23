// 树节点
class Node {
  constructor(key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

// 二叉搜索树

class BinSearchTree {
  constructor() {
    this.root = null;
  }
  insert(key) {
    let node = new Node(key);
    if (this.root == null) {
      this.root = node;
    } else {
      this.inserNode(this.root, node);
    }
  }

  inserNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left == null) {
        node.left = newNode;
      } else {
        this.inserNode(node.left, newNode);
      }
    } else {
      if (node.right == null) {
        node.right = newNode;
      } else {
        this.inserNode(node.right, newNode);
      }
    }
  }
  preOrderTraversal(handler) {
    this.preOrderTraversalNode(this.root, handler);
  }
  preOrderTraversalNode(node, handler) {
    if (node != null) {
      handler(node.key);
      this.preOrderTraversalNode(node.left, handler);

      this.preOrderTraversalNode(node.right, handler);
    }
  }
}

let bst = new BinSearchTree();
bst.insert(11);
bst.insert(7);
bst.insert(15);
bst.insert(5);
bst.insert(3);
bst.insert(9);
bst.insert(8);
bst.insert(10);
bst.insert(13);
bst.insert(12);
bst.insert(14);
bst.insert(20);
bst.insert(18);
bst.insert(25);

let resultString = "";
bst.preOrderTraversal((key) => {
  return (resultString += key + " ");
});
console.log(resultString);
