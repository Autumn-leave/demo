var arr = [];
var flag = 0;
function search() {
    var input = document.getElementById("search_task");
    var input1 = input.value.toLowerCase();
    var ul = document.getElementById("list");
    var li = ul.getElementsByTagName("li");
    for (var i = 0; i < li.length; i++) {
        if (li[i].innerText.toLowerCase().indexOf(input1) > -1) {
            li[i].style.display = "";
        }
        else {
            li[i].style.display = "none";
        }
    }
}
function changefunction(e) {
    var my_ele = e.target.closest('li');
    // console.log(my_ele);
    var val = my_ele.querySelector("#task_option");
    // // var val = my_ele.getElementById("task_option");
    // console.log(val.value);
    // var val=sel_v.value;
    // var sel_op = val.options[val.selectedIndex].text;
    if (val.value === "Completed") {
        my_ele.querySelector("#spanid").style.textDecoration = "line-through";
        my_ele.querySelector("#task_ck").checked = true;
    }
    else {
        my_ele.querySelector("#spanid").style.textDecoration = "none";
        my_ele.querySelector("#task_ck").checked = false;
    }
}
function addTask() {
    var task = document.getElementById("task");
    var task1 = task.value;
    if (task1.trim() === "") {
        alert("Enter todo");
        flag = 0;
    }
    else {
        if (arr.length == 0) {
            flag = 1;
        }
        else {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == task1.trim()) {
                    flag = 0;
                    break;
                }
                else {
                    flag = 1;
                }
            }
        }
    }
    if (flag == 1) {
        arr.push(task1.trim());
        var ul = document.getElementById("list");
        var li = document.createElement("li");
        li.setAttribute('id', 'lid');
        li.setAttribute('class', 'lic');
        var span = document.createElement('span');
        span.setAttribute('class', 'span');
        span.setAttribute('id', 'spanid');
        var sel = document.createElement("select");
        sel.setAttribute('id', 'task_option');
        var check = document.createElement("input");
        check.setAttribute('id', 'task_ck');
        check.setAttribute('type', 'checkbox');
        var btnRemove = document.createElement("INPUT");
        btnRemove.setAttribute('type', 'button');
        btnRemove.setAttribute('value', 'Remove');
        // btnRemove.value = "Remove";
        // btnRemove.type = "button";
        btnRemove.className = "btn btn-danger";
        btnRemove.onclick = function () {
            ul.removeChild(this.parentNode);
            // delete arr[i];
            // console.log(delete arr[i]);
        };
        span.innerHTML = task1;
        sel.appendChild(new Option("To do", "To do"));
        sel.appendChild(new Option("In progress", "In progress"));
        sel.appendChild(new Option("Completed", "Completed"));
        li.className = "styl";
        li.appendChild(check);
        li.appendChild(span);
        li.appendChild(sel);
        li.appendChild(btnRemove);
        ul.appendChild(li);
        task1 = '';
        sel.addEventListener('change', function (e) {
            console.log(e);
            changefunction(e);
        });
        // sel.onchange((e)=>{
        //     console.log(e)
        // })
    }
    else {
        alert("Task already exists!");
        task1 = '';
    }
    console.log(arr);
}
