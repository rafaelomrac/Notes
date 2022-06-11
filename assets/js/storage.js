const setDataLocalStorage = data =>  localStorage.setItem("notesData", JSON.stringify(data));

const getDataLocalStorage = () => JSON.parse(localStorage.getItem("notesData")) ?? [];

const updateNote = (index, note) => {

    const data = getDataLocalStorage();
    data[index] = note;
    setDataLocalStorage(data);
};

const deleteNote = index => {
    const note = getDataLocalStorage();
    note.splice(index, 1);
    setLocalStorage(note);
};