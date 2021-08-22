//Colors array
const colors1 = ['blue', 'yellow', 'black', 'red', 'brown', 'orange'];
const colors2 = ['LightCoral', 'DarkOrange', 'LemonChiffon', 'DarkKhaki', 'Orchid', 'DarkSlateBlue'];

//Font Family
const fontFamily = ['Arial', 'Helvetica', 'Calibri', 'Gill Sans', 'Futara', 'Optima']

//Font Size
const fontSize = ['0.5em', '0.75em', '1em', '1.25em', '1.5em']

//get button
const buttonSatu = document.getElementById('buttonSatu');
const buttonDua = document.getElementById('buttonDua');
const buttonTiga = document.getElementById('buttonTiga');
const buttonEmpat = document.getElementById('buttonEmpat');
const buttonLima = document.getElementById('buttonLima');
const buttonEnam = document.getElementById('buttonEnam');
const buttonTujuh = document.getElementById('buttonTujuh');
const buttonDelapan = document.getElementById('buttonDelapan');
const buttonSembilan = document.getElementById('buttonSembilan');
const buttonSepuluh = document.getElementById('buttonSepuluh');




//add event listener --Button Satu
buttonSatu.addEventListener('click', function(){
    //randomizer
    var randomColor1 = colors1[Math.floor(Math.random() * colors1.length)]

    //get all paragraph
    const allParagraph = document.getElementsByTagName('p')
    for (let i = 0; i < allParagraph.length; i++) {
        allParagraph[i].style.background = randomColor1;
    }
})

//add event listener --Button Dua
buttonDua.addEventListener('click', function(){
    var randomColor1 = colors1[Math.floor(Math.random() * colors1.length)]
    var randomColor2 = colors2[Math.floor(Math.random() * colors2.length)]

    buttonDua.style.background = randomColor1;
    buttonDua.style.color = randomColor2;
})

//add event listener --Button Tiga
buttonTiga.addEventListener('click', function(){
    var randomFont = fontFamily[Math.floor(Math.random() * fontFamily.length)]
    var randomColor2 = colors2[Math.floor(Math.random() * colors2.length)]

    const allParagraph = document.getElementsByTagName('p')
    for (let i = 0; i < allParagraph.length; i++) {
        allParagraph[i].style.fontFamily = randomFont;
        allParagraph[i].style.color = randomColor2;
    }
})

//add event listener --Button Empat
buttonEmpat.addEventListener('click', function(){
    var randomFont = fontSize[Math.floor(Math.random() * fontSize.length)]

    const allParagraph = document.getElementsByTagName('p')
    for (let i = 0; i < allParagraph.length; i++) {
        allParagraph[i].style.fontSize = randomFont;
    }
})

//add event listener --Button Lima
buttonLima.addEventListener('click', function(){
    var randomColor2 = colors2[Math.floor(Math.random() * colors2.length)]

    const container = document.getElementById('container')
    container.style.background = randomColor2;
})

//add event listener --Button Enam
buttonEnam.addEventListener('click', function(){

    //define p1
    const sectionA = document.getElementById('a')
    const p1 = sectionA.getElementsByClassName('p1')[0]

    //buat element baru berupa h2
    const h2 = document.createElement('h2')

    //replace p1 menjadi h2
    sectionA.replaceChild(h2,p1)
})

//add event listener --Button Tujuh
buttonTujuh.addEventListener('click', function(){

//bikin element penampung l1
const newLi = document.createElement('li')
//bkin isinya
const isiElement = document.createTextNode('Andika')
//kita gabungkan isi ke element penampung
newLi.appendChild(isiElement)

//cari wadah
const wadahLi = document.querySelector('#b ul')

//define lokasi => taruh sebelum li alif
const liAlif = wadahLi.querySelector('li:nth-child(2)')

//node.insertBefore(elementYangDitambahkan, ElementTujuan)
wadahLi.insertBefore(newLi,liAlif)

//define dulu element yang akan kita hapus
const elementRemove = document.getElementsByTagName('li')[0]
elementRemove.parentNode.removeChild(elementRemove);
})

//add event listener --Button Delapan
buttonDelapan.addEventListener('click', function(){
    const judul = document.getElementById('judul');
    judul.innerText = "Post Test"
})

//add event listener --Button Sembilan
buttonSembilan.addEventListener('click', function(){
    const sectionA = document.getElementById('a')
    const elementRemove = document.getElementsByTagName('a')[0]
    sectionA.removeChild(elementRemove)
})

//add event listener --Button Sepuluh
buttonSepuluh.addEventListener('click', function(){
    const newElement = document.createElement('a')
    const linkGit = document.createTextNode('https://github.com/ZakyFarhan/Post-test-Sprint-3')
    newElement.appendChild(linkGit)
    newElement.setAttribute('href', 'https://github.com/ZakyFarhan/Post-test-Sprint-3')
    const sectionA = document.getElementById('a')
    sectionA.appendChild(newElement)
})