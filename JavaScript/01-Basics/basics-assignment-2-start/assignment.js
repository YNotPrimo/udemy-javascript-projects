const task3Element = document.getElementById('task-3');


function alerts() {
    alert("This is the alert function")
}

function alertInput(name){
    alert(name)
}

alerts();
alertInput("Gosho");

task3Element.addEventListener('click', alerts);


function threeParam(str1, str2, str3){
    return str1 + str2 + str3;
}

const result = threeParam("firstString"
, "secondString"
, "thirdString");

alert(result)


