var input1 = document.getElementById("input1");
var nameError1 = document.getElementById("nameError1");
var input2 = document.getElementById("input2");
var nameError2 = document.getElementById("nameError2");
var nameError3 = document.getElementById("nameError3");
var row = document.getElementById("row");
var array = [];

function addInput() {

    nameError1.style.display = "none";
    nameError2.style.display = "none";
    nameError3.style.display = "none";

    for (var i = 0; i < array.length; i++) {
        if (input1.value == array[i]){
            nameError3.style.display = "block";
            deleteFunc(array[i])
        }
    }

    if (input1.value == "" && input2.value == "") {
        nameError1.style.display = "block";
        nameError2.style.display = "block";
    } else if (input1.value == "") {
        nameError1.style.display = "block";
    } else if (input2.value == "") {
        nameError2.style.display = "block";
    } else {
        nameError1.style.display = "none";
        nameError2.style.display = "none";
        array.push(input1.value);
        dispalyInput(array)
    }
}


function dispalyInput(array) {
    var container = '';
    for (var i = 0; i < array.length; i++) {
        container += `<div class="col-12 thirdCol">
        <h2 class="h2sec" id="shownValue">`+ input1.value + `</h2>
        <a class="btn btn-primary visit a1" href="`+ input2.value + `" target="_blank">visit</a>
        <button class="btn btn-danger visit b1" onclick="deleteFunc(`+ i + `)">Delete</button>
     </div>`
    }
    row.innerHTML = container;
}

function deleteFunc(x) {
    array.splice(x, 1);
    dispalyInput(array);
}

