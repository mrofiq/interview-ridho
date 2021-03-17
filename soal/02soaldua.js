arr = [
  { id: 1, name: "satu" },
  { id: 2, name: "dua" },
  { id: 3, name: "tiga" }
];

// buat fungsi untuk output:
//1 - satu
//2 - dua
//3 - tiga

////////////////////////////////////////////////////////////////

arrNested = [1, [3, 4], [[6, 7], [8]]];
// buat fungsi untuk output (satu level array)
// [ 1, 3, 4, 6, 7, 8 ]

////////////////////////////////////////////////////////////////

arrLength = [1, 3, 4, 6, 7, 8];
// buat fungsi untuk output (empat value pertama)
// [ 1, 3, 4, 6]

////////////////////////////////////////////////////////////////

arrLength2 = [1, 3, 4, 5, 7, 8];
// buat fungsi untuk output (dua value terakhir)
// [ 7, 8]

////////////////////////////////////////////////////////////////

arrDuplicate = [1, 2, 2, 4, 5, 4, 6, 1, 3, 3, 7, 7];
// buat fungsi untuk output (uniq value)
// [ 1, 2, 4, 5, 6, 3, 7 ]



var soal02 = module.exports = {
  output1: function () {
    let result = ''
    arr.forEach(element => {
      result += `${element.id} - ${element.name}\n`
    });
    return result
  },
  output2: function () {
    const splitString = arrNested.toString().split(",");
    const result = []
    for (let item of splitString) {
      result.push(Number(item))
    }
    return result
  },
  output3: function (range) {
    return arrLength.slice(0, range)
  },
  output4: function (range) {
    return arrLength2.slice(arrLength2.length - range, arrLength2.length)
  },
  output5: function () {
    return  arrDuplicate.filter((v, i, a) => a.indexOf(v) === i);
  },
};

console.log(soal02.output1())
console.log(soal02.output2())
console.log(soal02.output3(4))
console.log(soal02.output4(2))
console.log(soal02.output5())