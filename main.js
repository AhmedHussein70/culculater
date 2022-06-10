let textarea = document.getElementById("textarea");
let h3 = document.getElementById("h3");

let span = document.querySelectorAll("span");

span.forEach((item) => {
  item.addEventListener("click", (eo) => {
    // textarea.value += item.innerText;

    switch (item.innerText) {
      case "c":
        textarea.value = " ";
        h3.innerText = 0;

        break;
      case "del":
        textarea.value = textarea.value.slice(0, -1);
        break;
      case "=":
        textarea.value = eval(textarea.value);
        h3.innerText = textarea.value;
        textarea.value = "";
        break;
      default:
        textarea.value += item.innerText;
    }
    if (h3.innerText == "undefined") {
      textarea.value = "";
      h3.innerText = 0;
    }
  });
});
