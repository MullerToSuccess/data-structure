// 排序算法

function CArray(numElements) {
  this.dataStore = []
  this.pos = 0
  this.numElements = numElements
  this.insert = insert
  this.toString = toString
  this.clear = clear
  this.setData = setData
  this.swap = swap
  this.setGaps = setGaps
  for (var i = 0; i < numElements; ++i) {
    this.dataStore[i] = i
  }
  // 排序
  this.bubbleSort = bubbleSort // 冒泡
  this.selectSort = selectSort // 选择
  this.insertSort = insertSort // 插入
  this.shellSort = shellSort // shell
  this.mergeSort = mergeSort // merge
  this.qSort = qSort // 快速
  this.mergeArrays = mergeArrays 
  this.gaps = [5, 3, 1]
}

function setData() {
  for (var i = 0; i < this.numElements; ++i) {
    this.dataStore[i] = Math.floor(Math.random() * (this.numElements + 1))
  }
}

function clear() {
  for (var i = 0; i < this.dataStore.length; ++i) {
    this.dataStore[i] = 0
  }
}

function insert(element) {
  this.dataStore[this.pos++] = element
}

function toString() {
  var restr = ""
  for (var i = 0; i < this.dataStore.length; ++i) {
    restr += this.dataStore[i] + " "
    if (i > 0 && i % 10 == 0) {
      restr += "\n"
    }
  }
  return restr
}

function swap(arr, index1, index2) {
  var temp = arr[index1]
  arr[index1] = arr[index2]
  arr[index2] = temp
}

function setGaps(arr){
    this.gaps = arr
}

// 冒泡
function bubbleSort() {
  var numElements = this.dataStore.length
  //   var temp

  for (var outer = numElements; outer >= 2; --outer) {
    for (var inner = 0; inner <= outer - 1; ++inner) {
      if (this.dataStore[inner] > this.dataStore[inner + 1]) {
        swap(this.dataStore, inner, inner + 1)
      }
    }
    // console.log(this.toString())
  }
}

// 选择
function selectSort() {
  var min, temp
  for (var outer = 0; outer <= this.dataStore.length - 2; ++outer) {
    min = outer
    for (var inner = outer + 1; inner <= this.dataStore.length - 1; ++inner) {
      if (this.dataStore[inner] < this.dataStore[min]) {
        min = inner
      }
      swap(this.dataStore, outer, min)
    }
    // console.log(this.toString())
  }
}

// 插入
function insertSort() {
  var inner, temp
  for (var outer = 1; outer <= this.dataStore.length - 1; ++outer) {
    temp = this.dataStore[outer]
    inner = outer
    while (inner > 0 && this.dataStore[inner - 1] >= temp) {
      this.dataStore[inner] = this.dataStore[inner - 1]
      --inner
    //   console.log(this.toString())
    }
    this.dataStore[inner] = temp
  }
}

// shell

function shellSort(){
    for(var g = 0; g < this.gaps.length; ++g){
        for(var i = this.gaps[g]; i<this.dataStore.length; ++i){
            var temp = this.dataStore[i]
            for(var j = i; j >= this.gaps[g] && this.dataStore[j - this.gaps[g]] > temp; j -= this.gaps[g]){
                this.dataStore[j] = this.dataStore[j - this.gaps[g]]
            }
            this.dataStore[j] = temp
        }
        console.log(this.toString())
    }
}

//  merge
function mergeArrays(arr, startLeft, stopLeft, startRight, stopRight){
    var rightArr = new Array(stopRight -startRight + 1)
    var leftArr = new Array(stopLeft - startLeft + 1)
    k = startRight
    for(var i = 0; i < (rightArr.length - 1); ++i){
        rightArr[i] = arr[k]
        ++k
    }
    k = startLeft
    for(var i =0; i < (leftArr.length - 1); ++i){
        leftArr[i] = arr[k]
        ++k
    }
    rightArr[rightArr.length - 1] = Infinity
    leftArr[leftArr.length - 1] = Infinity
    var m = 0, n = 0
    for(var k = startLeft; k< stopRight; ++k){
        if(leftArr[m] <= rightArr[n]){
            arr[k] = leftArr[m]
            m++
        }else{
            arr[k] = rightArr[n]
            n++
        }
    }
    // console.log('left array : ', leftArr)
    // console.log('right array : ', rightArr)
}

function mergeSort(){
    if(this.dataStore.length < 2) return
    var step = 1
    var left, right
    while(step < this.dataStore.length){
        left = 0
        right = step
        while(right + step <= this.dataStore.length){
            mergeArrays(this.dataStore, left, left + step, right, right + step)
            left = right + step
            right = left + step
        }
        if(right < this.dataStore.length){
            mergeArrays(this.dataStore, left, left + step, right, this.dataStore.length)
        }
        step *= 2
    }
}

// 快速
function qSort(arr){
    if(arr.length == 0){
        return []
    }
    var left = [], right = [], pivot = arr[0]
    for(var i = 1; i < arr.length; i++){
        if(arr[i] < pivot){
            left.push(arr[i])
        }else{
            right.push(arr[i])
        }
    }
    return qSort(left).concat(pivot, qSort(right))
}


// test
// var numElements = 10
// var myNums = new CArray(numElements)
// myNums.setData()
// // myNums.selectSort()
// // myNums.shellSort()
// myNums.mergeSort()
// console.log(myNums.toString())



var numElements = 50000000
var nums = new CArray(numElements)
nums.setData()
var start = new Date().getTime()
nums.mergeSort()
var stop = new Date().getTime()
var elapsed = stop - start
console.log(
  " 对 " +
    numElements +
    " 个元素执行归并排序消耗的时间为：" +
    elapsed +
    " 毫秒。"
)
// start = new Date().getTime()
// nums.selectSort()
// stop = new Date().getTime()
// elapsed = stop - start
// console.log(
//   " 对 " +
//     numElements +
//     " 个元素执行选择排序消耗的时间为：" +
//     elapsed +
//     " 毫秒。"
// )
// start = new Date().getTime()
// nums.insertSort()
// stop = new Date().getTime()
// elapsed = stop - start
// console.log(
//   " 对 " +
//     numElements +
//     " 个元素执行插入排序消耗的时间为：" +
//     elapsed +
//     " 毫秒。"
// )