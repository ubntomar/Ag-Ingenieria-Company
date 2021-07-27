
function tmp() { 
    console.log("ok")
    let element = document.getElementById("body-small-menu");
    console.log(element)
    if (element != null) {
        if (element.style.display === "none") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
        error = false
    } else {
        error = true
    }
    return true
}