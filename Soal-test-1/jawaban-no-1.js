// 1. Buatlah fungsi dengan parameter berapa banyak angka yg akan ditampilkan secara looping, dimana jika angka tersebut habis dibagi 3 cetak "fish" jika habis dibagi 5 cetak "bash" dan jika habis dibagi 15 cetak "fish bash", CETAK CUKUP SALAH SATU dari kondisi tersebut, cetak menggunakan console log atau sejenisnya.

function fishBash(n) {
  if (n === 0) return;
  if (n % 15 === 0) return "fish bash";
  if (n % 3 === 0) return "fish";
  if (n % 5 === 0) return "bash";
}

module.exports = fishBash;
