let pixel = document.querySelectorAll(".div");

pixel.forEach(function (pixel) {
    if (pixel.onmouseover && pixel.onclick) {
        pixel.style.backgroundColor = "pink"
        console.log("hello")
    }
})