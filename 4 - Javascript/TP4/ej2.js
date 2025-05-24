function pulsar(boton) {
    if (boton.innerText === "Pulsar") {
        boton.innerText = "Pulsado";
        boton.style.backgroundColor =rgb(0, 0, 0);
        boton.style.color = rgb(255, 255, 255);
        boton.style.fontWeight = "bold";
    }
    else {
        boton.innerText = "Pulsar";
        boton.style.backgroundColor =rgb(255, 255, 255);
        boton.style.color = rgb(0, 0, 0);
        boton.style.fontWeight = "none";
    }
}