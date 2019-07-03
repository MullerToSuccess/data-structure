function Node(data, left, right) {
    this.data = data
    this.left = left
    this.right = right
    this.show = show
}

function show() {
    return this.data
}

function BST() {
    this.root = null
    this.insert = insert
    this.inOrder = inOrder
}

function insert(data) {
    var n = new Node(data, null, null)

    if (this.root === null) {
        this.root = n
    } else {
        var current = this.root
        var parent

        while (true) {
            parent = current
            if (data < current.data) {
                current = current.left
                if (current == null) {
                    parent.left = n
                    break
                }
            } else {
                current = current.right
                if (current == null) {
                    parent.right = n
                    break
                }
            }
        }
    }
}


var tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 4
        }
    },
    right: {
        value: 3,
        left: {
            value: 5,
            left: {
                value: 7
            },
            right: {
                value: 8
            }
        },
        right: {
            value: 6
        }
    }
}

// 递归
var preOrder = function (node) {
    if (node) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }
}
var inOrder = function (node) {
    if (node) {
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
}
var postOrder = function (node) {
    if (node) {
        postOrder(node.left)
        postOrder(node.right)
        console.log(node.value)
    }
}

// 先序
var preOrderUnRecur = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }
    var stack = []
    stack.push(node)
    while (stack.length !== 0) {
        node = stack.pop()
        console.log(node.value)
        if (node.right) stack.push(node.right)
        if (node.left) stack.push(node.left)
    }
}
// 中序
var inOrderUnRecur = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }
    var stack = []
    while (stack.length !== 0 || node) {
        if (node) {
            stack.push(node)
            node = node.left
        } else {
            node = stack.pop()
            console.log(node.value)
            node = node.right
        }
    }
}
// 后序
var posOrderUnRecur = function (node) {
    if (!node) {
        throw new Error('Empty Tree')
    }
    var stack = []
    var temp = null
    stack.push(node)
    while (stack.length !== 0) {
        temp = stack[stack.length - 1]
        if (temp.left && node !== temp.left && node !== temp.right) {
            stack.push(temp.left)
        } else if (temp.right && node !== temp.right) {
            stack.push(temp.right)
        } else {
            console.log(stack.pop().value)
            node = temp
        }
    }
}

// morris算法:
// 先序
var morrisPre = function (head) {
    if (!head) {
        return
    }
    var cur1 = head,
        cur2 = null
    while (cur1) {
        cur2 = cur1.left
        if (cur2) {
            while (cur2.right && cur2.right != cur1) {
                cur2 = cur2.right
            }
            if (!cur2.right) {
                cur2.right = cur1
                console.log(cur1.value)
                cur1 = cur1.left
                continue
            } else {
                cur2.right = null
            }
        } else {
            console.log(cur1.value)
        }
        cur1 = cur1.right
    }
}
// 中序
var morrisIn = function (head) {
    if (!head) {
        return
    }
    var cur1 = head,
        cur2 = null
    while (cur1) {
        cur2 = cur1.left
        if (cur2) {
            while (cur2.right && cur2.right !== cur1) {
                cur2 = cur2.right
            }
            if (!cur2.right) {
                cur2.right = cur1
                cur1 = cur1.left
                continue
            } else {
                cur2.right = null
            }
        }
        console.log(cur1.value)
        cur1 = cur1.right
    }
}
// 后序
var morrisPost = function (head) {
    if (!head) {
        return
    }
    var cur1 = head,
        cur2 = null
    while (cur1) {
        cur2 = cur1.left
        if (cur2) {
            while (cur2.right && cur2.right !== cur1) {
                cur2 = cur2.right
            }
            if (!cur2.right) {
                cur2.right = cur1
                cur1 = cur1.left
                continue
            } else {
                cur2.right = null
                printEdge(cur1.left)
            }
        }
        cur1 = cur1.right
    }
    printEdge(head)
}

var printEdge = function (head) {
    var tail = reverseEdge(head)
    var cur = tail
    while (cur) {
        console.log(cur.value)
        cur = cur.right
    }
    reverseEdge(tail)
}

var reverseEdge = function (head) {
    var pre = null,
        next = null
    while (head) {
        next = head.right
        head.right = pre
        pre = head
        head = next
    }
    return pre
}
// preOrder(tree)
// inOrder(tree)
postOrder(tree)
console.log('--------------------------')
// preOrderUnRecur(tree)
// inOrderUnRecur(tree)
posOrderUnRecur(tree)

console.log('--------------------------')
morrisPost(tree)


function getMin(){
    var current = this.root
    while(!(current === null)){
        current = current.left
    }
    return current
}
function getMax(){
    var current = this.root
    while(current !== null){
        current = current.right
    }
    return current
}
