
class Human {
    Name: string;
    constructor(name:string) {
        this.Name = name;
    }

    sayHello = () => {
        console.log(`hello, my name is ${this.Name}`);
    }
}

export default Human;
