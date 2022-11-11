
function FadeIn(...elements){
    elements.forEach(element => {
        $(element).fadeIn();
    });
}

function FadeOut(...elements){
    elements.forEach(element => {
        $(element).fadeOut();
    });
}
