const months = ["janeiro", "fevereiro", "março", "abril",
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

const isValidFields = () => document.querySelector("form").reportValidity();

 const date = () => new Date();


const createNotes = notes => {
    data = getDataLocalStorage();
    data.push(notes);

    setDataLocalStorage(data);
}

const sendNotes = () => {
    
    if (isValidFields()){
        const notes = {
            title: document.querySelector("input[type='text']").value,
            note: document.querySelector("textarea").value,
            date: `${months[date().getMonth()]} ${date().getDate()}, ${date().getFullYear()}`,

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