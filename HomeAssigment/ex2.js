function nodeDepth(node, level) {
    let depthSum = 0;

    //Assuming empty tree should return 0.
    if (node == null)
        return 0;
    //Check if node is a leaf. 
    if (node.left == null && node.right == null)
        return depthSum;
    //Check if node has right child only.
    else if (node.left != null && node.right == null) {
        depthSum = nodeDepth(node.left, level + 1) + level;

    }
    //Check if node has left child only.
    else if (node.left == null && node.right != null) {
        depthSum = nodeDepth(node.right, level + 1) + level;

    }
    //Check if node has 2 children.
    else {
        depthSum = nodeDepth(node.left, level + 1) + nodeDepth(node.right, level + 1) + 2 * level;

    }
    return depthSum;
}




function createNode(val) {
    let root = {};
    root.val = val;

    return root;
}


function testExt2() {
    let root = createNode(1);
    let l = createNode(2);
    let r = createNode(3);

    root.left = l;
    root.right = r;

    l.left = createNode(4);
    l.right = createNode(5);

    r.left = createNode(6);
    r.right = createNode(7);

    l = l.left;
    l.left = createNode(8);
    l.right = createNode(9);

    let rest = nodeDepth(root,1);
    console.log(rest);
}
