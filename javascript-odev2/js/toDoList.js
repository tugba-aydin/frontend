var list = document.getElementsByTagName("li");
i = 0;
while (i < list.length) {
  var span = document.createElement("span");
  var text = document.createTextNode("x");
  span.className = "close";
  span.appendChild(text);
  list[i].appendChild(span);
  i++;
}

var close = document.getElementsByClassName("close");
k=0;
while (k< close.length) {
  close[k].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
  k++;
}

var list2 = document.querySelector('ul');
list2.addEventListener('click', function (value) {
  if (value.target.tagName === 'LI') {
    value.target.classList.toggle('checked');
  }
}, false);


function newList() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("task").value;
  var text = document.createTextNode(inputValue);
  li.appendChild(text);
  if (inputValue === "" || inputValue.replace(/^\s+|\s+$/g, "").length === 0) {
    $(".error").toast("show");

  } else {

    $(".success").toast("show");
    document.getElementById("list").appendChild(li);
    localStorage.setItem('list', JSON.stringify(myList));

  }
  document.getElementById("task").value = "";
  var span = document.createElement("span");
  var cross = document.createTextNode("x");
  span.className = "close";
  span.appendChild(cross);
  li.appendChild(span);

  j=0;
  while (j < close.length) {
    close[j].onclick = function () {
      var div = this.parentElement;
      div.style.display = "none";
    };
    j++;
  }

}