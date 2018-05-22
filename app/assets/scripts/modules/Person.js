class Person{
    constructor(name, color){
        this.name = name;
    this.color = color;
    }
   
    greet(){
        console.log("hi there my name" + this.name + "my color " + this.color);
    }
    
}

export default Person;