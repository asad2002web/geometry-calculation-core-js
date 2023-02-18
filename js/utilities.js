// Blog Button 
document.getElementById('btn-blog').addEventListener('click', function(){
    window.open('./blog.html', '_blank');
});
// Function Re-use:
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputNumber = parseFloat(getInput.value);
    getInput.value = '';
    if (isNaN(getInputNumber)) {
        alert('Please provide a valid Number.')
        return getInput.value = '';
    }
    return getInputNumber;
}

// 

function getInnerText(id, area){
    const areaTriangelResult = document.getElementById(id);
    areaTriangelResult.innerText = area.toFixed(2);
    return areaTriangelResult.innerText;
};

// 
function displayShow(showId){
    const areaTriangelShowe = document.getElementById(showId);
    areaTriangelShowe.style.display = "block";
    return areaTriangelShowe.style.display
}

