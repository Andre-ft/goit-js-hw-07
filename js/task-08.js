class BoxCreator{
    _refs;

    constructor(setupObj) {        
        this.makeRefs(setupObj);
        this.bindEvents();
    }

    makeRefs({controlsBlockSelector, renderBtnSelector, clearBtnSelector, outputSelector}) {
        this._refs = {
            inputField: document.querySelector(controlsBlockSelector).firstElementChild,
            createBoxesBtn: document.querySelector(renderBtnSelector),
            clearBtn: document.querySelector(clearBtnSelector),
            boxesOutput: document.querySelector(outputSelector),
        }
    }

    bindEvents() {
        this._refs.clearBtn.addEventListener('click', () => {
            this.destroyBoxes();
        })
        
        this._refs.createBoxesBtn.addEventListener('click', () => {
            const amount = this._refs.inputField.value;
            this.createBoxes(amount);
        })
    }
    
    setColor() {
        const colorArray = [];
        
        for (let i = 0; i < 3; i++){
            colorArray.push(Math.round(Math.random() * 255));
        }
        
        return colorArray;
    }
    
    destroyBoxes() {
        this._refs.boxesOutput.innerHTML = '';        
    }

    createBoxes(amount) {
        let elemSize = 30;
        const divElementsArray = [];
        
        for (let i = 0; i < amount; i++){
            const divElem = document.createElement('div');
            const colorArray = this.setColor();
            
            divElem.style.margin = '5px';
            divElem.style.width = elemSize + 'px';
            divElem.style.height = elemSize + 'px';
            elemSize += 10;
            
            divElem.style.backgroundColor = `rgb(${colorArray[0]}, ${colorArray[1]}, ${colorArray[2]})`;

            divElementsArray.push(divElem);
        }

        this._refs.boxesOutput.append(...divElementsArray);
    }
}

const setupObject = {
    controlsBlockSelector: '#controls',
    renderBtnSelector: '[data-action="render"]',
    clearBtnSelector: '[data-action="destroy"]',
    outputSelector: '#boxes',
};

new BoxCreator(setupObject);