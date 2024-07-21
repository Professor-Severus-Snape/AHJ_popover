import Button from '../components/button/button';
import Popover from '../components/popover/popover';

export default class App {
  constructor() {
    this.container = document.querySelector('.container');

    this.button = new Button();
    this.popover = new Popover();
  }

  init() {
    this.container.append(this.button.element);
    this.container.append(this.popover.element);

    this.button.element.addEventListener('click', this.onBtnClick.bind(this));
  }

  onBtnClick(event) {
    this.popover.changeVisibility();
    this.popover.setPosition(event.target);
  }
}
