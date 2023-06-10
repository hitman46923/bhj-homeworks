function saveText() {
    let editor = document.getElementById("editor");
    let text = editor.value;
    localStorage.setItem("savedText", text);
}


function restoreText() {
    let editor = document.getElementById("editor");
    let savedText = localStorage.getItem("savedText");
    if (savedText) {
        editor.value = savedText;
    }
}

window.onload = function() {
    restoreText(); 
    let editor = document.getElementById("editor");
    editor.onkeyup = saveText; 
};