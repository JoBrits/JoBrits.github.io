function gridOptions(option) {

    if (option === 'page') {
        var element = document.getElementById("gridLinesPage");  
        element.classList.toggle("gridMenu__grid1--active");
    } else if (option === 'content') {
        var element = document.getElementById("gridLinesSection");  
        element.classList.toggle("gridMenu__grid2--active");
    } else if (option === 'column') {
        var element = document.getElementById("gridColumns12");  
        element.classList.toggle("gridMenu__grid3--active");
    }   
  
}   