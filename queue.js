// queue实现：

function Queue() {
    this.dataStore = []
    this.enqueue = enqueue
    this.dequeue = dequque
    this.front = front
    this.back = back
    this.toString = toString
    this.empty = empty
    this.count = count // 人数
}

function enqueue(element) {
    this.dataStore.push(element)
}
function dequque() {
    return this.dataStore.shift()
}
function front() {
    return this.dataStore[0]
}
function back() {
    return this.dataStore[this.dataStore.length - 1]
}
function toString() {
    var reStr = ''
    for (var i = 0; i < this.dataStore.length; i++) {
        reStr += this.dataStore[i] + '\n'
    }
    return reStr
}
function empty() {
    if (this.dataStore.length === 0) return true
    else return false
}

// 测试
var q = new Queue()

q.enqueue('1')
q.enqueue('2')
q.enqueue('3')
console.log(q.toString())
q.dequeue()
console.log(q.toString())
console.log('front:', q.front())
console.log('back:', q.back())


function Dancer(name, sex) {
    this.name = name
    this.sex = sex
}
function getDancers() {
    var names = [
        'F Allison McMillan',
        "M Frank Opitz ",
        "M Mason McMillan",
        "M Clayton Ruff",
        "F Cheryl Ferenback ",
        "M Raymond Williams ",
        "F Jennifer Ingram ",
        "M Bryan Frazer ",
        "M David Durr ",
        "M Danny Martin ",
        "F Aurora Adney"
    ]

    for (var i = 0; i < names.length; i++) {
        names[i] = names[i].trim()
    }
    for (var i = 0; i < names.length; i++) {
        var dancer = names[i].split(' ')
        var sex = dancer[0]
        var name = dancer[1]

        if (sex == 'F') {
            femalDancers.enqueue(new Dancer(name, sex))
        } else {
            maleDancers.enqueue(new Dancer(name, sex))
        }
    }
}

function dance(males, females) {
    console.log('=======')
    while (!females.empty() && !males.empty()) {
        person = females.dequeue()
        console.log("Female dancer is: " + person.name);

        person = males.dequeue()
        console.log(" and the male dancer is: " + person.name);
    }
}

// test
var maleDancers = new Queue()
var femalDancers = new Queue()
getDancers(maleDancers, femalDancers)
dance(maleDancers, femalDancers)

// if (!femalDancers.empty()) {
//     console.log(femalDancers.front().name + ' is waiting...')
// }
// if (!maleDancers.empty()) {
//     console.log(maleDancers.front().name + ' is waiting...')
// }

// 新加counter显示等候人数
function count() {
    return this.dataStore.length
}

if (femalDancers.count() > 0) {
    console.log(femalDancers.count() + ' female is waiting...')
}
if (maleDancers.count() > 0) {
    console.log(maleDancers.count() + ' male is waiting...')
}

// 基数排序 91, 46, 85, 15, 92, 35, 31, 22
function distribute(nums, queues, n, digit) {
    for (var i = 0; i < n; ++i) {
        if (digit === 1) {
            queues[nums[i] % 10].enqueue(nums[i])
        }
        else {
            queues[Math.floor(nums[i] / 10)].enqueue(nums[i])
        }
    }
}
function collect(queues, nums) {
    var i = 0;

    for (var digit = 0; digit < 10; ++digit) {
        while (!queues[digit].empty()) {
            nums[i++] = queues[digit].dequeue()
        }
    }
}
function disArray(arr) {
    console.log(arr)
}

// test
var queues = []
for (var i = 0; i < 10; ++i) {
    queues[i] = new Queue();
}
var nums = [];
for (var i = 0; i < 10; ++i) {
    nums[i] = Math.floor(Math.floor(Math.random() * 101));
}
console.log("Before radix sort: "); 
disArray(nums); 
distribute(nums, queues, 10, 1); 
collect(queues, nums); 
distribute(nums, queues, 10, 10); 
collect(queues, nums); 
console.log("After radix sort: "); 
disArray(nums);