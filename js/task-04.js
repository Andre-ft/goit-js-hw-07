class Counter{
  _counterValue;
  _refs;
  constructor(value = 0) {
    this._counterValue = value;
    this._refs = this._getRefs();
    this._bindEvents();
  }
 
  increment() {
    this._counterValue += 1;
  }

  decrement() {
    this._counterValue -= 1;
  }

  _getRefs() {
    let refs = {};

    refs.incrementButton = document.querySelector('[data-action="increment"]');
    refs.decrementButton = document.querySelector('[data-action="decrement"]');
    refs.counter = document.querySelector('#value');

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

new Counter();

