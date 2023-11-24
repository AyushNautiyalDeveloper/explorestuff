class Test {
  constructor(input) {
    this.stringProp = input.stringProp;
    if (input.hasOwnProperty('numberProp')) {
      this.numberProp = input.numberProp;
    }
    if (input.hasOwnProperty('objectProp')) {
      this.objectProp = input.objectProp;
    }
    if (input.hasOwnProperty('additionalProperties')) {
      this.additionalProperties = input.additionalProperties;
    }
  }

  get stringProp() { return this.stringProp; }
  set stringProp(stringProp) { this.stringProp = stringProp; }

  get numberProp() { return this.numberProp; }
  set numberProp(numberProp) { this.numberProp = numberProp; }

  get objectProp() { return this.objectProp; }
  set objectProp(objectProp) { this.objectProp = objectProp; }

  get additionalProperties() { return this.additionalProperties; }
  set additionalProperties(additionalProperties) { this.additionalProperties = additionalProperties; }

  example() {
    const instance = new Test({});
    instance.stringProp = "string";
    instance.numberProp = 0;
    instance.objectProp = this.example(); // Note: There's a typo here. Should be `instance.example()` instead of `.example()`.
    return instance;
  }
}

module.exports = Test;
