const kep = document.getElementById("kep")

document.addEventListener("DOMContentLoaded", ()=>{
    kepgeneralas()
    document.querySelectorAll('button[name="gomb"]').forEach(btn =>{
        btn.addEventListener("click", ()=>{
            let szam = Number(btn.value)
            if (szam === i) {
              document.getElementById("pontok").textContent = "nyertel"
            } else {
              document.getElementById("pontok").textContent = "vesztettel"
            }
        })
    })
})


let i;
function kepgeneralas() {
    let tomb = ["akari.jpg", "nino.jpg", "azusa.jpg", "yui.jpg", "shikimori.jpg", "marin.jpg", "echidna.jpg", "emilia.jpg", "asuna.jpg", "eto.jpg", "alya.jpg"]
    i = (Math.floor(Math.random()*tomb.length))
    kep.src = tomb[i]
}