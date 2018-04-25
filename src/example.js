var openbtn = document.getElementById("openselect"),
    saveBtn = document.getElementById("save"),
    showout = document.getElementById("showresult");

openselect.addEventListener("change", doOpen, false);
saveBtn.addEventListener("click", doSave, false);

// when input type is 'file', it becomes this ....
// reference:
// http://www.javascripture.com/FileReader
//
function doOpen(evt) {
    var files = evt.target.files;
    var reader = new FileReader();
    reader.onload = function () {
        showout.value = reader.result;
        var readback = JSON.parse (reader.result);
        console.log (readback);
    };
    reader.readAsText(files[0]);
    
    // https://developer.mozilla.org/en-US/docs/Web/API/Blob
    // start reading contents of the Blob,
    // once finished, the 'result' contains the content
    // of the file as a text string
}

// 
// prompt reference:
// http://www.w3schools.com/jsref/met_win_prompt.asp
//
//
// Blob reference:
// https://developer.mozilla.org/en-US/docs/Web/API/Blob
//
function doSave() {
    var filename = prompt("File name? ", "data.txt");
    var data = {
        temp: 36.5,
        humidity: 85.4
    };
    var string = JSON.stringify (data);
    console.log (string);
    var blob = new Blob([string], {
        type: "text/plain;charset=utf-8"
    });
    
    saveAs(blob, filename);
}