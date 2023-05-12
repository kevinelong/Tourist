const menuData = [
    {
        name: "Hikes",
        link: "hikes.html"
    },
    {
        name: "Activities",
        link: "activities.html"
    }
];

//Menu Component
function menuLink(item){
    const link = document.createElement("a")
    link.innerHTML = item.name
    link.href = item.link
    return link
}

document.addEventListener("DOMContentLoaded", ()=>{

    const nav = document.getElementById("nav")
    menuData.forEach( (item) => nav.appendChild( menuLink(item) ));

});