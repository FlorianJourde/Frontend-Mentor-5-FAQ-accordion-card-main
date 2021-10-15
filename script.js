var coll = document.getElementsByClassName("title");
var box = document.getElementsByClassName("illustration-box");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
      content.style.marginBottom = 0 + "rem";
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
      content.style.marginBottom = 1 + "rem";
    }
  });

  coll[i].addEventListener("mouseenter", function() {
    box[0].style.transform = "translateX(" + -30 + "px)"
  });

  coll[i].addEventListener("mouseleave", function() {
    box[0].style.transform = "translateX(" + 0 + "px)"
  });
}
