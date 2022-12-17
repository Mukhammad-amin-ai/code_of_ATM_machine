// console.log('Hello world')

// let
// var
// const

// let age = 22
// let age = 13

// let age = 22

// console.log(age);

// age = 25

// console.log(age);

//  +   -   /   *   **   %   ++a    a++   --a   a--

// console.log(9%2);   // 1
// console.log(15%12); // 3
// console.log(15%8);  // 7
// console.log(21%5);  // 1

//  ++a   =>  a = a + 1

// let son = 23

// ++son // son = son + 1
// console.log(son);
// son++ // son = son + 1

// console.log(son);

// let natija = 43

// console.log(++natija);
// console.log(natija++);
// console.log(natija);

// let a = 45

// a = a/5

// console.log(a);

// a++

// console.log(a--);

// a=a+8 //    a+=8
// a=a*8 //    a*=8
// a=a/8 //    a/=8

//                  TYPES
//    number,  string,  boolean,  NaN,  Null,  Undefined

// let say = 123
// let a = 'Salom'
// let b = "Salom"
// let c = `Salom`
// let d = true
// // let d = false
// let g

// let hi = "\"O'zbekiston mustaqil davlat!\"-dedi Javohir."

// console.log(hi);

// console.log(typeof(a));
// console.log(typeof(d));
// console.log(typeof(g));
// console.log(say/0);

// let a = 6
// // a = a = a+1

// console.log(a++);
// console.log(a);

// let name = 'Dilshod'
// let b = 2022
// let year = 2000

// console.log('Dilshodning yoshi ' + (b - year) + ' da.');

// console.log(11 + "11");  //Olima => '11' => '1111'
// console.log(3 * "22" + 45);  // Umar => 111
// console.log(45 / "9" - 23);  // Javohir => -18
// console.log(15 + "2" + 33 - 2);  // Umidjon => 46 => '15233' - 2 = 15231
// console.log((11 % "2") + 22);  // Muhammadamin => 11222 => 23
// console.log('11' - '22');

// number + number = number
// string + number = string
// number + string = string
// number - number = number
// string + string = string
// string - string = number
// number * string = number
// number / string = number
// string * number = number
// string / number = number
// string - number = number
// number - string = number

// let a = 453.2478

// let natija = Math.round(a)

// let natija = Math.ceil(a)

// let natija = Math.floor(a)
// let natija = Math.trunc(a)

// let a = Math.random() * 100;

// let rand = Math.ceil(a);

// let natija = Math.pow(9, 1/2);
// let natija = Math.max(1,2,4,4,2,23,4,56,7,33,4,46,7,9)
// let natija = Math.min(1,2,4,4,2,23,4,56,7,33,4,46,7,9,-11)

// console.log(natija);

// >   ;   <  ;    >=    ;    <=    ;    ==    ;   ===   ;   !=    ;   !==

//     ||    ;    &&

// console.log(12 < 90);
// console.log(12 >= 12);
// console.log(12 >= '12');
// console.log(12 == '12');
// console.log(12 !== 12);

// console.log(12%2 == 0 && 12%3 == 1 );

//     &&
// 1 * 1 = 1
// 0 * 0 = 0
// 0 * 1 = 0
// 1 * 0 = 0

//     ||
// 1 + 1 = 1
// 0 + 1 = 1
// 1 + 0 = 1
// 0 + 0 = 0

// let a =prompt("sonni kiriting")

// if ( a % 2 == 0) {
//     if (a % 3 == 0){
//         console.log( a + 'bu son 2 va 3 ga bo\'linadi' );
//     } else {
//         console.log( a + 'bu son 2ga bo\'linadi' );

//     }
// } else {
//     if ( a %3 == 0 ){
//         console.log( a + 'bu son 3ga bo\'linadi');
//     } else{
//         console.log( a + 'bu son 2 va 3 ga bo\'linmaydi');

//     }
// }

// let i = +prompt('to\'rtxonali son kiriting') // 2123

// let  bir = i%10
// let ikki = ()
// console.log(bir);

// let ikki = ( i%100 - i%10)/ 10

let name_ = "muhammad";
let password = 7777;
let money = 10000;

let a = prompt("Please write your name: ");
if (a == name_) {
  let b = +prompt("Write your password");
  if (b == password) {
    let c = +prompt("Write the amount");
    if (c <= money) {
      money = c - money;
      let i = alert("Balance:\n " + money + "\nTaken:\n" + c)
    } else {
      alert("Little amount of money");
      
    }
  } else {
    alert(" WRONG");
  }
} else {
  alert("WRONG");
}
