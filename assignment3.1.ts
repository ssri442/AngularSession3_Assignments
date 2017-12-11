class Greeter{
  message : string; 


constructor(m : string){
this.message = m;

}

greet(){
return `message is
${this.message}`;
}



}

let greetref : Greeter = new Greeter("hello how are you");
console.log(greetref.greet());
