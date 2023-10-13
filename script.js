window.onload = function () {
    getImageGallery();
  };
  
  function getImageGallery() {
    var img = document.getElementsByClassName("main-img");
  
    for (var i = 0; i < img.length; i++) {
      img[i].onclick = function () {
        openModel(this.src);
      };
    }
  }
  
  function openModel(src) {
    document.getElementById("model").style.display = "flex";
    document.getElementById("modelimg").src = src;
  }
  
  document.getElementById("crossbutton").onclick = function () {
    document.getElementById("model").style.display = "none";
  };
  