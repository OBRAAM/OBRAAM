var input1 = document.getElementById("input1");
var nameError1 = document.getElementById("nameError1");
var input2 = document.getElementById("input2");
var nameError2 = document.getElementById("nameError2");
var nameError3 = document.getElementById("nameError3");
var row = document.getElementById("row");
var shownValue = document.getElementById("shownValue");

var array;
if (localStorage.getItem("array") == null) {
    array = [];
} else {
    array = JSON.parse(localStorage.getItem("array"));
    dispalyInput(array)
}

function addInput() {

    nameError1.style.display = "none";
    nameError2.style.display = "none";
    nameError3.style.display = "none";



    for (var i = 0; i < array.length; i++) {
        if (input1.value == array[i].name) {
            nameError3.style.display = "block";
            input1.value = "alredy-exist";
            input2.value = "alredy-exist";
        }
    }

    if (input1.value == "" && input2.value == "") {
        nameError1.style.display = "block";
        nameError2.style.display = "block";
    } else if (input1.value == "") {
        nameError1.style.display = "block";
    } else if (input2.value == "") {
        nameError2.style.display = "block";
    } else if (input1.value == "alredy-exist" && input2.value == "alredy-exist") {
        input1.value = "";
        input2.value = "";
    } else {
        nameError1.style.display = "none";
        nameError2.style.display = "none";
        var obj = {
            name: input1.value,
            url: input2.value
        };
        array.push(obj);
        localStorage.setItem("array", JSON.stringify(array))
        dispalyInput(array);
        clear();
    }
}


function dispalyInput(array) {
    var container = '';
    for (var i = 0; i < array.length; i++) {
        container += `<div class="col-12 thirdCol">
        <h2 class="h2sec" >`+ array[i].name + `</h2>
        <a class="btn btn-primary visit a1" id="shownValue" href="`+ array[i].url + `" target="_blank">visit</a>
        <button class="btn btn-danger visit b1" onclick="deleteFunc(`+ i + `)">Delete</button>
     </div>`
    }
    row.innerHTML = container;
}

function deleteFunc(x) {
    array.splice(x, 1);
    dispalyInput(array);
    localStorage.setItem("array", JSON.stringify(array))

}

function clear() {
    input1.value = "";
    input2.value = "";
}