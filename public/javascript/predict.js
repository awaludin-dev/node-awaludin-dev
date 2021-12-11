const URL = 'https://api.genderize.io/?name=';
const factCat = 'https://catfact.ninja/fact';
let predict = document.getElementById('predict');
let search = document.getElementById('search');
let btn = document.getElementById('kirim');
let cat = document.getElementById('cat');
const progressBar = `<div class="progress"><div class="indeterminate"></div></div>`;

document.addEventListener("DOMContentLoaded", function(){
    catFact();
    btn.addEventListener('click', () => {
        if(search.value === "") predict.innerHTML = `<h1 class="warning">Mohon masukkan keyword nama</h1>`;
        else predictGender(search.value);
    })
});

function catFact() {
    fetch(factCat)
        .then(res => res.json())
        .then(data => cat.innerHTML = `<marquee hspace="10px" scrollamount="4">Fact about cat : ${data.fact}</marquee>`)
        .catch(err => console.log(err))
}

function predictGender(name) {
    fetch(URL + name)
        .then(predict.innerHTML = progressBar)
        .then(res => res.json())
        .then(data => showPredict(data))
        .catch(err => console.log(err))
}

function showPredict(data) {
    predict.innerHTML = `<table>
        <tr>
            <th width="152px">Nama</th>
            <th width="24px">:</th>
            <td class="name">${data.name}</td>
        </tr>
        <tr>
            <th>Gender</th>
            <th>:</th>
            <td>${data.gender}</tr>
        </tr>
        <tr>
            <th>Probabilitas</th>
            <th>:</th>
            <td>${data.probability * 100}%</td>
        </tr>
    </table>`;
}