import { LightningElement, api } from 'lwc';

export default class Numerator extends LightningElement {
    @api
    maximizeCounter() {
      this.counter += 1000000;
    }
    @api counter = 0;
    counter = 0;
    handleIncrement() {
      this.counter++;
    }
    handleDecrement() {
      this.counter--;
    }
    handleMultiply(event) {
        const factor = event.detail;
        this.counter *= factor;
      }
      handleMaximizeCounter() {
        this.template.querySelector('c-numerator').maximizeCounter();
      }
}
