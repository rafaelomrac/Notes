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
};

const sendNotes = event => {

    event.preventDefault();

    if (isValidFields()) {
        const notes = {
            title: document.querySelector("input[type='text']").value,
            note: document.querySelector("textarea").value,
            date: `${months[date().getMonth()]} ${date().getDate()}, ${date().getFullYear()}`,

        }

        createNotes(notes);
        closeModal();
        clearFields();
        showNotes();
    }
};


function clearFields() {
    const notes = document.querySelectorAll("textarea");
    const noteTitle = document.querySelectorAll("input[type='text']")

    notes.forEach(note => note.value = "");

    noteTitle.forEach(note => note.value = "");
};

const showNotes = () => {

    document.querySelectorAll(".note").forEach( e => e.remove())

    getDataLocalStorage().forEach(note => {

        const element = ` <li class="note list">
        <div class="details">
            <h2 id="notes-title">${note.title}</h2>
            <span>${note.note} </span>
            <div class="bottom-content">
                <span>${note.date}</span>
                <button class="settings">
                    <i class="ph-dots-three"></i>

                </button>
                <ul class="menu">
                    <li><button id="edit"><i class="ph-pen">Editar</i></button></li>
                    <li><button id="delete"><i class="ph-trash">Excluir</i></button></li>
                </ul>
            </div>
        </div>
    </li>`;

        const noteContent = document.querySelector(".add-box");

        noteContent.insertAdjacentHTML("afterend", element);
    });
};





showNotes();




document.getElementById("add-box").addEventListener("click", openModal);
document.getElementById("close-popup").addEventListener("click", closeModal);
document.getElementById("seding-notes").addEventListener("click", sendNotes);