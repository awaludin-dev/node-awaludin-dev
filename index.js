// Require library
var excel = require('excel4node');
const file = require('fs');
const moment = require('moment')

// Membuat folder jika belum terdapat foldernya
const dirPath = './data';
if(!file.existsSync(dirPath)) {
    file.mkdirSync(dirPath);
}

// Inisialisasi workbook
var workbook = new excel.Workbook();

// Menambahkan worksheet didalamnya
const dataPath = './data/biodata.csv'; // Untuk ekstensi bisa diganti kalau memang tidak bisa dibuka dalam CSV
var worksheet = workbook.addWorksheet('Biodata');
// Data dibawah ini akan otomatis menimpa jika sudah terdapat didalamnya
worksheet.cell(1,1).string('Nama');
worksheet.cell(2,1).string('Awaludin Nasir');
worksheet.cell(1,2).string('Hobi');
worksheet.cell(2,2).string('Main Game');
workbook.write(dataPath);
console.log(`Data Excell sudah ditambahkan saat jam ${moment().format('LTS')}`);