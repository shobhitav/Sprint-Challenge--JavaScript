// 1. Copy and paste your prototype in here and refactor into class syntax.
class CuboidMaker {

    constructor(attribute) {
        this.length = attribute.length,
        this.width = attribute.width,
        this.height = attribute.height,
        this.shapeName = attribute.shapeName;
    }

    volume() {
        const v = this.length * this.width * this.height;
        return `Volume of the ${this.shapeName} is ${v} unit cube.`;
    }

    surfaceArea() {
        const s = 2 * (this.length * this.width + this.length * this.height + this.width * this.height);
        return `Surface Area of the ${this.shapeName} is ${s} square units.`;
    }
}

const cuboid = new CuboidMaker({
    length: 4,
    width: 5,
    height: 5,
    shapeName: 'cuboid'
})
// Test your volume and surfaceArea methods by uncommenting the logs below:

console.log(cuboid.volume()); // 100

console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
class CubeMaker extends CuboidMaker {

    constructor(cubeattr) {
        super(cubeattr)
    }

}
const cube = new CubeMaker({
    length: 4,
    width: 4,
    height: 4,
    shapeName: 'cube'
})
console.log(cube.volume());

console.log(cube.surfaceArea());