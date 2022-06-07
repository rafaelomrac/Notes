const month = ["janeiro", "fevereiro", "março", "abril",
    "maio", "junho", "julho", "agsoto", "setembro",
    "outubro", "novembro", "dezembro"
];



const openModal = () => {
    const popup = document.querySelector(".popup-box");

    popup.classList.add("show");
};

const closeModal = () => {
    const popup = document.querySelector(".popup-box");

    popup.classList.remove("show");
};

const setDataLocalStorage = data => localStorage.setItem("notesData", JSON.stringify(data));

const getDataLocalStorage = () => JSON.parse(localStorage.getItem("notesData")) ?? [];

const isValid = () => document.querySelector("form").reportValidity();

const db = {
    notesTitle : "Lavar o carro",
    notes : "Lavar o carro porque vou ir para Arraial"
};


const createNotes = notes => {
    data = getDataLocalStorage();
    data.push(notes);

    setDataLocalStorage(data);
}

const sendNotes = event => {
    const noteTitle = document.querySelector("input[type='text']").value;
    const note = document.querySelector("textarea").value;

    event.preventDefault();

    if (isValid()){
        const notes = {
            title: noteTitle,
            note: note

        }

        createNotes(notes);
        closeModal();
        clearFields();
    }
};       


function clearFields () {
    const notes = document.querySelectorAll("textarea");
    const noteTitle = document.querySelectorAll("input[type='text']")

    notes.forEach(note => note.value = "");

    noteTitle.forEach(note => note.value = "");
};      
    











document.getElementById("add-box").addEventListener("click", openModal);
document.getElementById("close-popup").addEventListener("click", closeModal);
document.getElementById("seding-notes").addEventListener("click", sendNotes);