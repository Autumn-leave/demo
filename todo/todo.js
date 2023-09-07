var array_task = [];
function addTask() {

  var task = document.getElementById("task").value;
  if (task.trim() === "") {
    alert("Enter todo")
  }
  else {
    if (array_task.length > 0) {
      for (let i = 0; i < array_task.length; i++) {
        if (array_task[i] == task.trim()) {
          alert("Task already exists!" , task, array_task[i]);
          document.getElementById("task").value = '';
        } else {
          alert(array_task[i]);
          array_task.push(task.trim());
          var li = document.createElement("li");
          li.innerText = task;
          document.getElementById("list").appendChild(li);

          document.getElementById("task").value = '';
        }
      }
    }
    else {
      array_task.push(task.trim());
      var li = document.createElement("li");
      li.innerText = task;
      document.getElementById("list").appendChild(li);

      document.getElementById("task").value = '';
    }

    console.log(array_task);

  }

};