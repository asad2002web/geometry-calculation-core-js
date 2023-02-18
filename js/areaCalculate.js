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

// Parallelogram:
document
  .getElementById("btn-parallelogram-calculate")
  .addEventListener("click", function () {
    const baseInputField = document.getElementById("baseInputField-parallelogram");
    const baseInput = parseFloat(baseInputField.value);

    const heightInputField = document.getElementById("height-input-field-parallelogram");
    const heightInput = parseFloat(heightInputField.value);

    if (isNaN(baseInput) || isNaN(heightInput)) {
      alert("Please Write  a Number");
    } else {
      const areaParallelogramShowe = document.getElementById("parallelogram-area-show");
      const parallelogramResult = document.getElementById("parallelogram-area");
      const areaParallelogram = baseInput * heightInput;
      areaParallelogramShowe.style.display = "block";
      parallelogramResult.innerText = areaParallelogram.toFixed(2);

      baseInputField.value = "";
      heightInputField.value = "";
    }
  });

//   Rhombus;
document
  .getElementById("btn-rhombus-calculate")
  .addEventListener("click", function () {
    const d1InputField = document.getElementById("d1InputField-rhombus");
    const d1Input = parseFloat(d1InputField.value);

    const d2InputField = document.getElementById("d2InputField-rhombus");
    const d2Input = parseFloat(d2InputField.value);

    if (isNaN(d1Input) || isNaN(d2Input)) {
      alert("Please Write  a Number");
    } else {
      const areaRhombusShowe = document.getElementById("rhombus-area-show");
      const rhombusResult = document.getElementById("rhombus-area");
      const areaRhombus = 0.5 * d1Input * d2Input;
      areaRhombusShowe.style.display = "block";
      rhombusResult.innerText = areaRhombus.toFixed(2);

      d1InputField.value = "";
      d2InputField.value = "";
    }
  });

//   Pentagon:
document
  .getElementById("btn-pentagon-calculate")
  .addEventListener("click", function () {
    const pInputField = document.getElementById("pInputField-pentagon");
    const pInput = parseFloat(pInputField.value);

    const bInputField = document.getElementById("bInputField-pentagon");
    const bInput = parseFloat(bInputField.value);

    if (isNaN (pInput) || isNaN(bInput)) {
      alert("Please Write  a Number");
    } else {
      const areaPentagonShowe = document.getElementById("pentagon-area-show");
      const pentagonResult = document.getElementById("pentagon-area");
      const areaPentagon = 0.5 * pInput * bInput;
      areaPentagonShowe.style.display = "block";
      pentagonResult.innerText = areaPentagon.toFixed(2);

      pInputField.value = "";
      bInputField.value = "";
    }
  });

// Ellipse:
document
  .getElementById("btn-ellipse-calculate")
  .addEventListener("click", function () {
    const aInputField = document.getElementById("aInputField-ellipse");
    const aInput = parseFloat(aInputField.value);

    const bInputField = document.getElementById("bInputField-ellipse");
    const bInput = parseFloat(bInputField.value);

    if (isNaN (aInput) || isNaN(bInput)) {
      alert("Please Write  a Number");
    } else {
      const areaEllipseShowe = document.getElementById("ellipse-area-show");
      const ellipseResult = document.getElementById("ellipse-area");
      const areaEllipse = 3.14 * aInput * bInput;
      areaEllipseShowe.style.display = "block";
      ellipseResult.innerText = areaEllipse.toFixed(2);

      aInputField.value = "";
      bInputField.value = "";
    }
  });