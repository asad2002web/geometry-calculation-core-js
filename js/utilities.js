// Blog Button 
document.getElementById('btn-blog').addEventListener('click', function(){
    window.open('./blog.html', '_blank');
});

// Function Re-use:

// Input Value Function
function getInputValue(inputId) {
    const getInput = document.getElementById(inputId);
    const getInputNumber = parseFloat(getInput.value);
    getInput.value = '';
    if (isNaN(getInputNumber) || getInputNumber < 1) {
        alert('Please provide a valid Number.')
        return getInput.value = '';
    }
    return getInputNumber;
}

// get Result InnerText Function

function getInnerText(id, area){
    const areaTriangelResult = document.getElementById(id);
    areaTriangelResult.innerText = area.toFixed(2);
    return areaTriangelResult.innerText;
};

// display Show Function
function displayShow(showId){
    const areaTriangelShowe = document.getElementById(showId);
    areaTriangelShowe.style.display = "block";
    return areaTriangelShowe.style.display
}

