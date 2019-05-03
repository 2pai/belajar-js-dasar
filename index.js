// variable
var kata = "hello"; // global
let kata2 = "world"; // blocked by scope
const kata3= "!!!!"; // blocked by scope

console.log(kata+" "+kata2+" "+kata3);
// data flow
// = karakter
// == karakter & case sensitive

let nama = "Iqbal";
if(nama == "iqbaL"){
    console.log('Selamat datang Admin '+nama);
}else{
    console.log('Selamat datang '+nama);
}

iteration
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let c = 0;
while (c < 10) {
    console.log(c);
    c++;
}
// array
let array1d = [1,2,3,4,5,6,7];
array1d.push(8); // memasukan element 8 ke dalam array
console.log(array1d);
array1d.pop(); // mengeluarkan element terakhir dalam array
console.log(array1d);
let array2d = [
    [1,2,3,4,5],
    [6,7,8,9,10]
];
array2d[1].push(11); // memasukan element 11 ke dalam array indeks 1
console.log(array2d);

let arrayOfObject = [
    {nama:"iqbal",umur:12},
    {nama:"bambang",umur:13}
];
console.log("Halo Nama Saya " + arrayOfObject[0].nama + " Umur saya" +arrayOfObject[0].umur);
let dataJSON = JSON.stringify(arrayOfObject);
console.log(arrayOfObject);
console.log(dataJSON);

for (let index = 0; index < arrayOfObject.length; index++) {
    const element = arrayOfObject[index];
    console.log(element.nama+ " "+element.umur);
}

// function

// fungsi di javascript = object
// fungsi pasti mengembalikan sebuah nilai (function)
// prosedur tidak harus mengembalikan nilai (void)
// fungsi yang tidak punya nama disebut anonymous function
function KombinasiNamaGanteng(nama) {
    return nama+" Ganteng";
}

function tambah(angka1,angka2) {
    angka1 = angka1*5;
    return angka1+angka2;
}

let tambah = (angka1,angka2) => {
    return angka1 + angka2;
}

let kali = function (angka1,angka2) {
    return angka1*angka2;
}

console.log(KombinasiNamaGanteng("iqbal"));
console.log(tambah(1,2));
console.log(kali(5,5));
