/**
     * Represents an ordered tree of nodes where 
     * the data of left nodes are <= to their parent and
     * the data of right nodes are > their parent's data.
     */
class BSTNode { // TreeNode , node
    constructor(data) {
        this.data = data;
        this.left = null; // a BSTNode with a smaller value
        this.right = null;
    }
}
class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    /**
     * Recursively counts the total number of nodes in this tree.
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during the traversal of this tree.
     * @returns {number} The total number of nodes.
     */
    size(curr = this.root, count = 0) {
        if (!curr) {
            return count;
        }
        count = count + 1;
        count = this.size(curr.left, count);
        count = this.size(curr.right, count);
        return count;
    }
    // need help?

    /**
     * Calculates the height of the tree which is based on how many nodes from
     * top to bottom (whichever side is taller).
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {number} The height of the tree.
     */
    leftCount(current = this.root) {
        let count = 1;
        if (!current) return null;
        while (current.left != null) {
            current = current.left
            count += 1;
        }
        return count;
    }
    rightCount(current = this.root) {
        let count = 1;
        if (!current) return null;
        while (current.right != null) {
            current = current.right
            count += 1;
        }
        return count;
    }

    height(curr = this.root) {
        if (!curr) return null;
        if (this.leftCount() > this.rightCount()) {
            return "height is " + this.leftCount();
        } return "height is " + this.rightCount();
    }

    /**
     * Determines if this tree is a full tree. A full tree is a tree where every
     * node has both a left and a right except for the leaf nodes (last nodes)
     * - Time: O(?).
     * - Space: O(?).
     * @param {Node} node The current node during traversal of this tree.
     * @returns {boolean} Indicates if this tree is full.
     */
    isFull(node = this.root) { }


    // HELPER METHOD
    // Logs this tree horizontally with the root on the left.
    print(node = this.root, spaceCnt = 0, spaceIncr = 10) {
        if (!node) {
            return;
        }

        spaceCnt += spaceIncr;
        this.print(node.right, spaceCnt);

        console.log(
            " ".repeat(spaceCnt < spaceIncr ? 0 : spaceCnt - spaceIncr) +
            `${node.data}`
        );

        this.print(node.left, spaceCnt);
    }
    insert(newVal, curr = this.root) {
        let newNode = new BSTNode(newVal);
        if (!curr) {
            this.root = newNode;
            return "node inserted";
        }
        while (curr) {
            if (newVal < curr.data) {
                if (!curr.left) {
                    curr.left = newNode
                    return;
                }
                curr = curr.left;
            } else if (newVal >= curr.data) {
                if (!curr.right) {
                    curr.right = newNode;
                    return;
                }
                curr = curr.right
            }
        }
    }


}

const emptyTree = new BinarySearchTree();
const oneNodeTree = new BinarySearchTree();
oneNodeTree.root = new BSTNode(10);
// oneNodeTree.print()

/* twoLevelTree
        root
        10
      /   \
    5     15
*/
const twoLevelTree = new BinarySearchTree();
twoLevelTree.root = new BSTNode(10);
twoLevelTree.root.left = new BSTNode(5);
twoLevelTree.root.right = new BSTNode(15);
// twoLevelTree.print()

/* threeLevelTree 
        root
        10
      /   \
    5     15
  / \    / \
2   8  13  20
*/
const threeLevelTree = new BinarySearchTree();
threeLevelTree.insert(10)
threeLevelTree.root = new BSTNode(10);
threeLevelTree.root.left = new BSTNode(5);
threeLevelTree.root.left.left = new BSTNode(2);
threeLevelTree.root.left.right = new BSTNode(8);
threeLevelTree.root.right = new BSTNode(15);
threeLevelTree.root.right.right = new BSTNode(20);
threeLevelTree.root.right.left = new BSTNode(13);
// threeLevelTree.print()
/* fullTree
                    root
                <-- 25 -->
              /            \
            15             50
          /    \         /    \
        10     22      35     70
      /   \   /  \    /  \   /  \
    4    12  18  24  31  44 66  90
*/


const fullTree = new BinarySearchTree();
fullTree.insert(25)
fullTree.insert(15)
fullTree.insert(10)
fullTree.insert(22)
fullTree.insert(4)
fullTree.insert(12)
fullTree.insert(18)
fullTree.insert(24)
fullTree.insert(50)
fullTree.insert(35)
fullTree.insert(70)
fullTree.insert(31)
fullTree.insert(44)
fullTree.insert(66)
fullTree.insert(90);
// fullTree.insert(91);

console.log("The size of fullTree is " + fullTree.size());
console.log("The size of threeLevelTree is " + threeLevelTree.size());
console.log("fullTree " + fullTree.height());
console.log("threeLevelTree " + threeLevelTree.height());