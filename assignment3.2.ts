// interface  Driavable with start, drive,getPosition methods
interface Drivable {
    start(value:boolean):string;
    drive(value1:boolean): string;
    getPosition(value2:string) : string;
  }
/**
 * Class  Car implements Interface Drivable
 * @class Car
 * 
 **/
 class Car implements Drivable
 {
     //defined start method
start(value : boolean):string{
return `Car started : ${value} ;`;

}
// defined drive method
drive(value1:boolean):string{
return `Drive mode : ${value1} ;  `;

}
// defined getPosition method
getPosition(value2:string):string{
return `Position adjusted : ${value2}`;

}
 }
  

 let car : Car = new Car();
 let start1 :string = car.start(true);
 let drive1 : string = car.drive(true);
 let position:string = car.getPosition("left");

 console.log(start1+" "+ drive1 + " " + position);
