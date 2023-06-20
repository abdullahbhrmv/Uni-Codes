const checkbox = document.getElementById("checkbox");
const label = document.querySelector(".label-text");

checkbox.addEventListener("change", () => {
    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {
        label.textContent = "Dark";
    } else {
        label.textContent = "Light";
    }
});
