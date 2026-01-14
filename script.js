document.querySelectorAll(".toggle-btn").forEach(boton => {
    boton.addEventListener("click", () => {
        const id = boton.dataset.target;
        const descripcion = document.getElementById(id);

        descripcion.style.display =
            descripcion.style.display === "block" ? "none" : "block";
    });
});
