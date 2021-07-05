// объявление функций

const getUlNode = selector => document.querySelector(selector);

const getItemArray = (node, childSelector) => [...node.querySelectorAll(childSelector)];

const categoryAmount = function (selector, childSelector) {
    const mainNode = getUlNode(selector);
    const amountOfCategory = getItemArray(mainNode, childSelector).length;
    console.log(`В списке ${amountOfCategory} категории`);
};

const categoryDescription = function (parentSelector, childSelector) {
    const mainNode = getUlNode(parentSelector);

    getItemArray(mainNode, childSelector).
        forEach(item => {
            const category = item.querySelector('h2').textContent;
            const elementAmount = item.querySelectorAll('li').length;
            console.log(`Категория: ${category}`);
            console.log(`Количество элементов: ${elementAmount}`);
    })    
};

// вызов функций

categoryAmount('ul#categories', '.item');

categoryDescription('ul#categories', '.item');