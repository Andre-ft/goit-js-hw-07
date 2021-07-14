class Counter{
  _counterValue;
  _refs;
  constructor({incrementSelector, decrementSelector, counterSelector, initialValue = 0}) {
    this._counterValue = initialValue;
    this._refs = this._getRefs(incrementSelector, decrementSelector, counterSelector);
    this._bindEvents();
  }
 
  increment() {
    this._counterValue += 1;
  }

  decrement() {
    this._counterValue -= 1;
  }

  _getRefs(incrementSelector, decrementSelector, counterSelector) {
    let refs = {};

    refs.incrementButton = document.querySelector(incrementSelector);
    refs.decrementButton = document.querySelector(decrementSelector);
    refs.counter = document.querySelector(counterSelector);

    return refs;
  }

  updateValue() {
    this._refs.counter.textContent = this._counterValue;
  }

  _bindEvents() {
    this._refs.incrementButton.addEventListener('click', () => {
      this.increment();
      this.updateValue()
    })

    this._refs.decrementButton.addEventListener('click', () => {
      this.decrement();
      this.updateValue()
    })
  }
}

const setupObject = {
  incrementSelector: '[data-action="increment"]',
  decrementSelector: '[data-action="decrement"]',
  counterSelector: '#value',
  initialValue: 0,
}

new Counter(setupObject);

