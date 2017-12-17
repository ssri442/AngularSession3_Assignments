var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/**
 * The Department class is Abstract class which showing department details
 *
 *@class Department:Abstract
 *@constructor
**/
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.log("Department name: " + this.name);
    };
    return Department;
}());
/**
 * The AccountingDepartment class is drived class which showing department details
 *
 *@class AccountingDepartment
 *@extends Department
 *@constructor
**/
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, "Accounting and Auditing") || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.log("The Accounting Department meets each Monday at 10am.");
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.log("Generating accounting reports...");
    };
    return AccountingDepartment;
}(Department));
/**
* The Human Resources Deprtment class is drived class which showing HR department details
*
*@class HumanResourcesDepartment
*@extends Department
*@constructor
**/
var HumanResourcesDepartment = /** @class */ (function (_super) {
    __extends(HumanResourcesDepartment, _super);
    function HumanResourcesDepartment() {
        return _super.call(this, "Human Resources and management") || this;
    }
    HumanResourcesDepartment.prototype.printMeeting = function () {
        console.log("Human resources meeting is scheduled at 11 am");
    };
    return HumanResourcesDepartment;
}(Department));
//creating instances using the classes which are fully defined
var dep = new AccountingDepartment();
var dephr = new HumanResourcesDepartment();
dep.printName();
dep.printMeeting();
dephr.printName();
dephr.printMeeting();
