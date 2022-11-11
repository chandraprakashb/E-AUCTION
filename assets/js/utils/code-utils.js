function ElAppend(parentEl,...elements){
    this.parentEl = parentEl;
    this.element = elements;

    this.element.forEach((element)=> this.parentEl.append(element) );
}

// elementInfo = {};
// accessKey:'element Name'
function ElCreatore(elementsInfo){
    this.createdElements = {};
    this.elsInfo = elementsInfo;

    this.elementCreatore = () => {
        for(var elInfo in this.elsInfo) this.createdElements[elInfo] = document.createElement(this.elsInfo[elInfo])
    }
        
        
    

    this.elementCreatore();
    return this.createdElements;
}