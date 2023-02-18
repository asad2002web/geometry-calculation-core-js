// Triangel Area Calculate:
document
  .getElementById("btn-triangel-calculate")
  .addEventListener("click", function () {
    const triangelFirstInput = getInputValue("baseInputField");
    const triangelSecondInput = getInputValue("heightInputField");

    const triangelArea = 0.5 * triangelFirstInput * triangelSecondInput;
    displayShow("triangel-area-show");
    getInnerText("triangel-area", triangelArea);
  });

//  Rectangular Area Calculate:
document
  .getElementById("btn-rectangular-calculate")
  .addEventListener("click", function () {
    const rectangularFirstInput = getInputValue("widthInputField");
    const rectangularSecondInput = getInputValue("length-input-field");

    const areaRectangular = rectangularFirstInput * rectangularSecondInput;
    displayShow("rectangular-area-show");
    getInnerText("rectangular-area", areaRectangular);
  });

// Parallelogram:
document
  .getElementById("btn-parallelogram-calculate")
  .addEventListener("click", function () {
    const parallelogramFirstInput = getInputValue(
      "baseInputField-parallelogram"
    );
    const parallelogramSecondInput = getInputValue(
      "height-input-field-parallelogram"
    );

    const areaParallelogram =
      parallelogramFirstInput * parallelogramSecondInput;
    displayShow("parallelogram-area-show");
    getInnerText("parallelogram-area", areaParallelogram);
  });

//   Rhombus;
document
  .getElementById("btn-rhombus-calculate")
  .addEventListener("click", function () {
    const rhombusFirstInput = getInputValue("d1InputField-rhombus");
    const rhombusSecondInput = getInputValue("d2InputField-rhombus");

    const areaRhombus = 0.5 * rhombusFirstInput * rhombusSecondInput;
    displayShow("rhombus-area-show");
    getInnerText("rhombus-area", areaRhombus);
  });

//   Pentagon:
document
  .getElementById("btn-pentagon-calculate")
  .addEventListener("click", function () {
    const pentagonFirstInput = getInputValue("pInputField-pentagon");
    const pentagonSecondInput = getInputValue("bInputField-pentagon");

    const areaPentagon = 0.5 * pentagonFirstInput * pentagonSecondInput;
    displayShow("pentagon-area-show");
    getInnerText("pentagon-area", areaPentagon);
  });

// Ellipse:
document
  .getElementById("btn-ellipse-calculate")
  .addEventListener("click", function () {
    const ellipseFirstInput = getInputValue("aInputField-ellipse");
    const ellipseSecondInput = getInputValue("bInputField-ellipse");

    const areaEllipse = 3.14 * ellipseFirstInput * ellipseSecondInput;
    displayShow("ellipse-area-show");
    getInnerText("ellipse-area", areaEllipse);
  });
