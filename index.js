document.getElementById("home").addEventListener("click", function () {
    showSection("home-section")

    const amount = document.getElementById("home-amount").value
    const h3 = document.createElement("h3") 
    h3.innerText=`${amount} tk transfar by home page
    ${Date()}`

    document.getElementById("money-transfar").appendChild(h3)

    console.log(amount);
})

document.getElementById("about").addEventListener("click", function(){
    showSection("about-section")

    const amount = document.getElementById("home-amount").value
    const h3 = document.createElement("h3") 
    h3.innerText=`${amount} tk transfar by about page
    ${Date()}`

    document.getElementById("money-transfar").appendChild(h3)
})

document.getElementById("contact").addEventListener("click", function(){
    showSection("contact-section")
})

document.getElementById("product").addEventListener("click", function(){
    showSection("product-section")
})