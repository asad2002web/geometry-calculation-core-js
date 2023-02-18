// Triangel Area Calculate:
document
  .getElementById("btn-triangel-calculate")
  .addEventListener("click", function () {
    const baseInputField = document.getElementById("baseInputField");
    const baseInput = parseFloat(baseInputField.value);

    const heightInputField = document.getElementById("heightInputField");
    const heightInput = parseFloat(heightInputField.value);

    if (isNaN(baseInput) || isNaN(heightInput)) {
      alert("Please Write  a Number");
    } else {
      const areaTriangelShowe = document.getElementById("triangel-area-show");
      const areaTriangelResult = document.getElementById("triangel-area");
      const areaTriangel = 0.5 * baseInput * heightInput;
      areaTriangelShowe.style.display = "block";
      areaTriangelResult.innerText = areaTriangel.toFixed(2);

      baseInputField.value = "";
      heightInputField.value = "";
    }
  });

//  Rectangular Area Calculate:

document
  .getElementById("btn-rectangular-calculate")
  .addEventListener("click", function () {
    const widthInputField = document.getElementById("widthInputField");
    const widthInput = parseFloat(widthInputField.value);

    const lengthInputField = document.getElementById("length-input-field");
    const lengthInput = parseFloat(lengthInputField.value);

    if (isNaN(widthInput) || isNaN(lengthInput)) {
      alert("Please Write  a Number");
    } else {
      const areaRectangularShowe = document.getElementById("rectangular-area-show");
      const areaRectangularResult = document.getElementById("rectangular-area");
      const areaRectangular = widthInput * lengthInput;
      areaRectangularShowe.style.display = "block";
      areaRectangularResult.innerText = areaRectangular.toFixed(2);

      widthInputField.value = "";
      lengthInputField.value = "";
    }
  });