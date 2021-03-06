import stepanError from "./stepanError";


export default class Stepan {
  static createElement(element, parent, attributes = {}) {
    if (document.createElement(element).toString() !== "[object HTMLUnknownElement]"){
      throw new stepanError("invalid element");
    }
    const newElement = document.createElement(element);

    const { innerHTML, innerText } = attributes;

    for (let attribute in attributes) {
      if (['innerHTML', 'innerText'].includes(attribute)) {
        continue;
      }

      newElement.setAttribute(attribute, attributes[attribute]);
    }

    innerHTML && (newElement.innerHTML = innerHTML);
    innerText && (newElement.innerText = innerText);

    parent.appendChild(newElement);

    return newElement;
  }

  static Component = class {
    constructor(parent) {

      // TODO: 1. Create StepanError class to define all framework errors
      //       2. throw an error if parent is null or undefined, or if it's not a valid DOM object

      if (parent === null || parent === undefined || !(parent instanceof Element)) {
        throw new stepanError("invalid parent");
      }

      this.parent = parent;
    }

    // TODO (Bonus): Ensure that every component returns a top-level root element
  }
}
