let saturate = document.getElementById("saturation");
let contrast = document.getElementById("contrast");
let brightness = document.getElementById("brightness");
let reset = document.getElementById("reset");
let hueRotate = document.getElementById("hue-rotate");
let upload = document.getElementById("upload");
let download = document.getElementById("download");
let img = document.getElementById("img");

let imgBox = document.querySelector(".img-box");
const canvas = document.getElementById("canvas");
let ctxt = canvas.getContext("2d");

function resetValue() {
  img.style.filter = "none";
  saturate.value = "100";
  contrast.value = "100";
  brightness.value = "100";
  hueRotate.value = "0";
}

window.onload = function () {
  download.style.display = "none";
  reset.style.display = "none";
  imgBox.style.display = "none";
};

upload.onchange = function () {
  resetValue();
  download.style.display = "block";
  reset.style.display = "block";
  imgBox.style.display = "block";
  let file = new FileReader();
  file.readAsDataURL(upload.files[0]);
  file.onload = function () {
    img.src = file.result;
  };
  img.onload = function () {
    canvas.width = img.width;
    canvas.height = img.height; //3m jeb al height lal sura w hetuu b al canvas
    ctxt.drawImage(img, 0, 0, canvas.width, canvas.height);
    img.style.display = "none";
  };
};

let filters = document.querySelectorAll("ul li input");
filters.forEach((filter) =>
  filter.addEventListener("input", function () {
    ctxt.filter = `
    saturate(${saturate.value}%)
    contrast(${contrast.value}%)
    brightness(${brightness.value}%)
    hue-rotate(${hueRotate.value}deg)

  
 

   `;
    ctxt.drawImage(img, 0, 0, canvas.width, canvas.height);
  })
);

download.onclick = function () {
  download.href = canvas.toDataURL();
};
