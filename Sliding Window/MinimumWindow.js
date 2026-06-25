// //leetcode 76 - hard

// function MinimumWindow(s, t) {
//   let have = new Array(256).fill(0);
//   let need = new Array(256).fill(0);

//   for (let ch of t) {
//     need[ch.charCodeAt(0)]++;
//   }

//   let low = 0;
//   let high = 0;
//   let res = Infinity;
//   let start = 0;

//   for (high = 0; high < s.length; high++) {
//     have[s[high].charCodeAt(0)]++;
//     while (isValid(need, have)) {
//       let len = high - low + 1;

//       if (res > len) {
//         res = len;
//         start = low;
//       }
//       have[s[low].charCodeAt(0)]--;
//       low++;
//     }
//   }
//   return res === Infinity ? "" : s.substring(start, start + res);

//   function isValid(need, have) {
//     for (let i = 0; i < 256; i++) {
//       if (have[i] < need[i]) {
//         return false;
//       }
//     }
//     return true;
//   }
// }

// let s = "aabaaabbbcbddd";
// let t = "abc";
// console.log(MinimumWindow(s, t));





function MinimumWindow(s,t) {
  let need = new Array(256).fill(0);
  let have = new Array(256).fill(0);

  for(let ch of t) {
    need[ch.charCodeAt(0)]++;
  }
  let low = 0;
  let high = 0;
  let res = Infinity;
  let start = 0;

  for(let high = 0; high < s.length; high++) {
    have[s[high].charCodeAt(0)]++;
    while(isValid(have,need)) {
      let len = high - low + 1;

      if(res > len) {
        res = len;
        start = low;
      }
      return res === Infinity ? "" : s.substring(start , start + res);
    }
  }
  function isValid(have,need) {
    for(let i = 0; i < 256; i++) {
      if(have[i] < need[i]) {
        return false;
      }
    }
    return true;
  }
}

let s = "aaaggbbhbccpcuiesbimnopqqquu"
let t = "abc"

console.log(MinimumWindow(s,t))
