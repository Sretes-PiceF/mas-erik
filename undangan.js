document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("openBtn");

    if (button) {
        button.addEventListener("click", function () {
            // Simpan flag bahwa user telah berinteraksi
            localStorage.setItem("musicAllowed", "true");
            // Redirect ke undangan
            window.location.href = "index.html";
        });
    }
});