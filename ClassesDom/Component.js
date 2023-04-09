class Component {
    #reference = null
    constructor(reference) {
        this.#reference = reference;
    }
    showComponent() {
        return this.#reference;
    }
    biuld() {
        return document.createElement(`<${this.#reference}>`);
    }
    render() {
        return;
    }
}

class ComponentInput extends Component {
    constructor(reference) {
        super(reference);
    }
}

class ComponentLabel extends Component {
    constructor(reference, content) {
        super(reference);
        this.content = content;
    }
}

class ComponentForm extends Component {
    constructor() {}
    addComponent() {
        return document.appendChild(`${}`);
    }
}
