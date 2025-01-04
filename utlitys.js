function showSection(id){
    // hide section functionlity
    document.getElementById("home-section").classList.add("hidden")
    document.getElementById("about-section").classList.add("hidden")
    document.getElementById("contact-section").classList.add("hidden")
    document.getElementById("product-section").classList.add("hidden")

    // show section functionlity
    document.getElementById(id).classList.remove("hidden")
}

function showTranjections(id){
    const input = document.getElementById(id).value

    const h3 = document.createElement("h3")
    h3.innerText=`${input} `
}