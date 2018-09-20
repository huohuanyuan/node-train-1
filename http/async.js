//  <script src="a.js"></script>
//  <script src="b.js"></script>
//  <script src="c.js"></script>

/**
 * 顺序执行
 */

// var c = 0;
// function print() {
//     console.log(c)
// }
// function plus() {
//         c += 1;

// }
// plus();
// print();//1

/**
 * 异步执行
 */
// var c = 0;
// function print() {
//     console.log(c)
// }
// function plus() {
//     setTimeout(function () {
//         c += 1;
//     },1000)

// }
// plus();
// print();//0


/**
 * 异步改同步
 */

var c = 0;
function print() {
    console.log(c)
}
function plus(callback) {
    setTimeout(function () {
        c += 1;
        callback(c)
    },1000)

}
plus(print);//1
