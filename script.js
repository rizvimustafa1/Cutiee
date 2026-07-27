window.onload=()=>{
setTimeout(()=>{
document.getElementById("loader").style.display="none";
},2000);
}

function startJourney(){

window.scrollTo({

top:window.innerHeight,

behavior:"smooth"

});

}
