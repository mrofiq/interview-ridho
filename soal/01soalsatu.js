arr = [
  { name: "satu", group: "siswa" },
  { name: "dua", group: "pelajar" },
  { name: "tiga", group: "pendatang" },
  { name: "empat", group: "siswa" }
];

// // buat fungsi untuk menampilkan group siswa
var soal01 = module.exports = {
  grouping: function (group) {
    return arr.filter(obj => obj.group === group)
  },
};

console.log(soal01.grouping('siswa'))