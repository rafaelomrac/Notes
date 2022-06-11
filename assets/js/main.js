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


const isValidFields = () => document.querySelector("form").reportValidity();

const date = () => new Date();


const createNotes = notes => {
    const data = getDataLocalStorage();
    data.push(notes);

    setDataLocalStorage(data);
};

const sendNotes = event => {

    event.preventDefault();

    if(isValidFields()){
        const notes = {
            title: document.getElementById("title-note").value,
            description: document.getElementById("note-description").value,
            date: `${months[date().getMonth()]} ${date().getDate()}, ${date().getFullYear()}`,

        };

        createNotes(notes);
        clearFields();
        closeModal();
        showNotes();

    };
}


function clearFields() {
   
   document.querySelectorAll("form [required]").forEach(field => field.value = "")

};



const showNotes = index => {

    const data = getDataLocalStorage(); 
    
    data.forEach(note => {

        const element = ` <li class="note list">
                                    <div class="details">
                                        <h2 id="notes-title">${note.title}</h2>
                                        <span>${note.description} </span>
                                        <div class="bottom-content">
                                            <span>${note.date}</span>
                                            <div class="edit-delete">
                                                    <ul class="menu">
                                                        <li><button id="edit" title= "editar"><i id="pen-${index}" class="ph-pen"></i></button></li>
                                                        <li><button id="delete" title= "deletar"><i id="trash-${index}" class="ph-trash"></i></button></li>
                                                    </ul>
                                            </div>
                                            
                                        </div>
                                    </div>
                            </li>`;

        const noteContent = document.querySelector(".add-box");

        noteContent.insertAdjacentHTML("afterend", element);
    });
};

const fillFields = field => {
   // document.getElementById("title-note").value = field,
  //  document.getElementById("note-description").value,
             
    connsole.log("chegou")
};



const clear = () => {
    const r = document.querySelectorAll('.note-content > li.note')
    r.forEach(rr => r.parentNode.removeChild(rr))
};


const editDelete = event => { 
    const e = event.target.id
    console.log(e)

    if ( e == "trash"){
        console.log("deletou")
    };

    
};

showNotes();


document.getElementById("add-box").addEventListener("click", openModal);
document.getElementById("close-popup").addEventListener("click", closeModal);
document.getElementById("seding-notes").addEventListener("click", sendNotes);
document.querySelector(".note-content > .note").addEventListener("click", editDelete);
