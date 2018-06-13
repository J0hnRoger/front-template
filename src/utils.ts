
class Human {
    public Name: string;
    constructor(name: string) {
        this.Name = name;
    }

    public sayHello = () => {
        // tslint:disable-next-line:no-console
        console.log(`hello, my name is ${this.Name}`);
    }
}

export default Human;
