
function selectOption(selectedOption) {
    const allOptionDivs = document.querySelectorAll('.option-div');

    allOptionDivs.forEach((div) => {
        const details = div.querySelector('.details');
        details.style.display = 'none';
        div.style.width = 'auto';
        div.style.borderColor = '#aaa4a55e';
    });

    const parentDiv = selectedOption.closest('.option-div');
    const detailsDiv = parentDiv.querySelector('.details');
    detailsDiv.style.display = 'block';
    parentDiv.style.width = '400px';
    parentDiv.style.borderColor = '#ff6680';
}
