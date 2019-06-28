//最高位为 n % b，将此位压入栈。 
//(2) 使用 n/b 代替 n。 
//(3) 重复步骤 1 和 2，直到 n 等于 0，且没有余数。 
//(4)  持续将栈内元素弹出，直到栈为空，依次将这些元素排列，就得到转换后数字的字符 串形式

/* 实现 */

function Stack() {
    this.dataStore = []
    this.top = 0
    this.push = push
    this.pop = pop
    this.peek = peek
    this.clear = clear
    this.length = length
}
function push(element) {
    this.dataStore[this.top++] = element
}
function pop() {
    return this.dataStore[--this.top] // top会自减1 删除栈顶元素
}
function peek() {
    return this.dataStore[this.top - 1] // peek只是返回栈顶元素不删除
}
function clear() {
    this.top = 0
}
function length() {
    return this.top
}


function f(num, base) {
    var s = new Stack()

    do {
        s.push(num % base) // 入栈
        num = Math.floor(num /= base) // 转换
    } while (num > 0);
    var converted = ''
    while (s.length() > 0) {
        converted += s.pop() // 出栈
    }
    return converted
}

// function mulBase(num, base) { 
//     var s = new Stack(); 
//     do { 
//         s.push(num % base); 
//         num = Math.floor(num /= base); 
//     } while (num > 0); 
//     var converted = ""; 
//     while (s.length() > 0) {
//          converted += s.pop(); 
//         } 
//         return converted; 
//     }
// var num = 32;
// var base = 2;
// var newNum = f(num, base);
// console.log(num + " converted to base " + base + " is " + newNum);

function checkPlalindrome(word){
    var s = new Stack()

    for(var i=0; i<word.length; i++){
        s.push(word[i])
    }
    var rWord = ''
    while(s.length() > 0){
        rWord += s.pop()
    }
    return rWord === word
}

// var word = 'abbx'
// console.log(checkPlalindrome(word))

// 递归
function factorial(n){
    if(n === 0){
        return 1
    }else{
        return n * factorial(n-1)
    }
}

function fact(n){
    var s = new Stack()

    while(n > 1){
        s.push(n--)
    }
    var product = 1
    while(s.length() > 0){
        product *= s.pop()
    }
    return product
}
console.log(factorial(100))
console.log(fact(100))