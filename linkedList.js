function Node(element) {
    this.element = element
    this.next = null
}

function LList() {
    this.head = new Node('head')
    // this.head.next = this.head // 循环链表
    this.find = find
    this.findPrevious = findPrevious
    this.insert = insert
    this.remove = remove
    this.display = display
}

function find(item) {
    var currentNode = this.head
    while (currentNode.element != item) {
        currentNode = currentNode.next
    }

    return currentNode
}

// element 新插入元素
function insert(element, item) {
    var newNode = new Node(element)
    var currentNode = this.find(item)

    newNode.next = currentNode.next
    currentNode.next = newNode
}

// 
function findPrevious(item) {
    var current = this.head
    while (current.next && current.next.element != item) {
        current = current.next
    }
    return current
}
// 删除
function remove(item) {
    var current = this.find(item)
    var previousNode = this.findPrevious(item)

    previousNode.next = current.next
}

function display() {
    var current = this.head
    while(!(current.next === null)){
        console.log(current.next.element)
        current = current.next
    }
}


    var cities = new LList()
    cities.insert("Conway", "head");
    cities.insert("Russellville", "Conway");
    cities.insert("Alma", "Russellville");
    cities.insert("xxxxxxxxx", "Alma");

    cities.remove('Conway')
    cities.display()