// rangalinput
function trangalAraea(){
   const trangalinputo=document.getElementById('trangalinput')
   const trangalTaxt=trangalinputo.value;
   const base=parseFloat( trangalTaxt)
//    tringal heait
const trangalinputhk=document.getElementById('trangalinputh')
const trangalhidht=trangalinputhk.value;
const hight=parseFloat(trangalhidht)
const area=0.5*base*hight;
const ragelt=document.getElementById('tarea')
ragelt.innerText=area;
}
// fanish
// Rectangleuinput
function Rectangleu(){
    const Rectangleuw=document.getElementById('RectangleuinpuB')
    const Rectangleuwtext=Rectangleuw.value;
    const Wight=parseFloat(Rectangleuwtext)
// Rectangleulong
const RectangleuL=document.getElementById('RectangleuinputhL')
const RectangleuLtext=RectangleuL.value;
const long=parseFloat(RectangleuLtext)
const areao=Wight*long
const regalt=document.getElementById('Rarea')
regalt.innerText=areao


}
function Parallelogram(){
    const  Parallelogramp=ParallelogramId('Parallelograminput')
    const  Parallelogramh=ParallelogramId('Parallelograminputh')
    const area= Parallelogramp*Parallelogramh
    Parallelogramreglt('parea',area)


}
function ParallelogramId(params) {
    const Parallelogramtext=document.getElementById(params)
    const ParallelogramValu=Parallelogramtext.value;
    const pravalu=parseFloat(ParallelogramValu)
    return pravalu; 
}
function Parallelogramreglt(pagram,area){
    const Parallelogramreg=document.getElementById(pagram)
    Parallelogramreg.innerText=area;
}