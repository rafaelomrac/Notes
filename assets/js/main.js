const openModal = () => {
    const popup = document.querySelector(".popup-box");

    popup.classList.add("show");
};

const closeModal = () => {
    const popup = document.querySelector(".popup-box");

    popup.classList.remove("show");
};




document.getElementById("add-box").addEventListener("click", openModal);
document.getElementById("close-popup").addEventListener("click", closeModal);