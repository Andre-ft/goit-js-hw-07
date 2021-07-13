class BoxCreator{
    _refs;

    constructor() {        
        this._refs = this.makeRefs();
        this.bindEvents();
    }

    makeRefs() {
        const refs = {};

        refs.inputField = document.querySelector('#controls').firstElementChild;
        refs.createBoxesBtn = document.querySelector('[data-action="render"]');
        refs.clearBtn = document.querySelector('[data-action="destroy"]');
        refs.boxesOutput = document.querySelector('#boxes');

        return refs;
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
            
            // divElem.classList.add('divElem');
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

new BoxCreator();