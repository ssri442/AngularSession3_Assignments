

/**
 * The Department class is Abstract class which showing department details
 *
 *@class Department:Abstract
 *@constructor
**/
abstract class Department {
	constructor(public name: string) {
	}

	printName(): void {
		console.log("Department name: " + this.name);
	}

	abstract printMeeting(): void; // must be implemented in derived classes
}


/**
 * The AccountingDepartment class is drived class which showing department details
 *
 *@class AccountingDepartment
 *@extends Department
 *@constructor
**/

class AccountingDepartment extends Department {
  constructor() {
  	super("Accounting and Auditing"); // constructors in derived classes must call super()
  }

  printMeeting(): void {
  	console.log("The Accounting Department meets each Monday at 10am.");
  }

  generateReports(): void {
		console.log("Generating accounting reports...");
  }
}

/**
* The Human Resources Deprtment class is drived class which showing HR department details
*
*@class HumanResourcesDepartment
*@extends Department
*@constructor
**/

class HumanResourcesDepartment extends Department {
constructor () {
super("Human Resources and management");
}
printMeeting(): void {
    console.log("Human resources meeting is scheduled at 11 am");
}
}

//creating instances using the classes which are fully defined
let dep: Department = new AccountingDepartment();
let dephr:Department = new HumanResourcesDepartment();
dep.printName();
dep.printMeeting();
dephr.printName();
dephr.printMeeting();

