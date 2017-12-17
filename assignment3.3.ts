

/**
 * The Animal class is base class which showing animal properties and behavior
 * @class Animal
 * @constructor
 **/

class Animal
{
public _animalName : string;
constructor(animalName : string){
this._animalName = animalName;
}
move(distance : number) : string {
return `animal specific 
distance`;
    }
makeSound(sound :string):string{
return `sound`;
 }

}
/**
 * The Dog class is drived from Animal, and will extend its properties
 * @class Dog
 * @extends Animal
 * @constructor
**/
class Dog extends Animal{
    
    constructor(animalName: string) {
        super(animalName);
      }
      move(distance : number) : string {
        return `${this._animalName} moves a distance of ${distance}`;
            }

    makeSound(sound : string ):string{
       return `${this._animalName} ${sound}` 
         }

}
/**
 * The Cat class is drived from Animal, and will extend its properties
 * @class Cat
 * @extends Animal
 * @constructor
**/

class Cat extends Animal{
    constructor(animalName: string) {
        super(animalName);
      }

    move(distance : number) : string {
    return `${this._animalName} moves a distance of ${distance}`;
            }
    makeSound(sound : string):string{
    return `${this._animalName} ${sound}`
         }
      }

let cat : Animal =new Cat("cat");
let dog : Animal = new Dog("dog");
console.log(cat.makeSound("meows"));
console.log(cat.move(500));
console.log(dog.makeSound("barks"));
console.log(dog.move(500));



