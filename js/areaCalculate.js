// Triangel Area Calculate:
document
  .getElementById("btn-triangel-calculate")
  .addEventListener("click", function () {
    const triangelFirstInput = getInputValue("baseInputField");
    const triangelSecondInput = getInputValue("heightInputField");

    const triangelArea = 0.5 * triangelFirstInput * triangelSecondInput;
    displayShow("triangel-area-show");
    getInnerText("triangel-area" , triangelArea);
  });

//  Rectangular Area Calculate:
document
  .getElementById("btn-rectangular-calculate")
  .addEventListener("click", function () {
    const rectangularFirstInput = getInputValue("widthInputField");
    const rectangularSecondInput = getInputValue("length-input-field");

    const areaRectangular = rectangularFirstInput * rectangularSecondInput;
    displayShow("rectangular-area-show");
    getInnerText("rectangular-area" , areaRectangular);
  });

// Parallelogram:
document
  .getElementById("btn-parallelogram-calculate")
  .addEventListener("click", function () {
    const parallelogramFirstInput = getInputValue("baseInputField-parallelogram");
    const parallelogramSecondInput = getInputValue("height-input-field-parallelogram");

    const areaParallelogram = parallelogramFirstInput * parallelogramSecondInput;
    displayShow("parallelogram-area-show");
    getInnerText("parallelogram-area" , areaParallelogram);
  });

//   Rhombus;
document
  .getElementById("btn-rhombus-calculate")
  .addEventListener("click", function () {
    const rhombusFirstInput = getInputValue("d1InputField-rhombus");
    const rhombusSecondInput = getInputValue("d2InputField-rhombus");

    const areaRhombus = 0.5 * rhombusFirstInput * rhombusSecondInput;
    displayShow("rhombus-area-show");
    getInnerText("rhombus-area" , areaRhombus);
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