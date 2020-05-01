/*
1.	Define a JavaScript object literal named, person, with the following specification:
  a.	Person object should have the properties:
    i.	name (initialize this with empty string value)
    ii.	dateOfBirth (initialize this with empty string value)
  b.	Person object should have the methods:
    i.	getName (should return the value of the person’s name property)
    ii.	setName (should take as input parameter, a String value which it sets as the person’s name) 

Given that someone named John IS-A person, applying JavaScript inheritance and the Object.create(…) method,
create an object named, john, whose name property is set to the string, “John” and
whose dateOfBirth property is set to the date, December 10th, 1998.

Print-out to the console, the information about the person named John, in the following format:
“The person’s name is John”
“John was born on 1998-12-10”
*/
(function(){
  const person = {
    name: '',
    dateOfBirth: '',
    setName : function(name) {
      this.name = name;
    },
    getName : function() {
      return this.name;
    }
  };
  const john = Object.create(person);
  john.name = 'John';
  john.dateOfBirth= new Date(1998, 11, 10);
  john.toString = function() {
    console.log("The person’s name is " + this.name);
    console.log(this.name + " was born on " + formatDate(this.dateOfBirth));
  };
  john.toString();
  function formatDate(date) {
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  }
})();

/*
2.	Given that an Employee IS-A person, applying JavaScript inheritance and the Object.create(…) method, create a generic object named, employee, with the following properties:
  a.	Salary (initialize this with the value zero dollars
  b.	hireDate (initialize this with the current date of today)
  and the following method:
  c.	doJob (should take as input parameter, a string representing the jobTitle of the employee and it prints-out to the console, the employee’s information in the following format:

“[Employee’s name] is a [jobTitle] who earns $[salary]”
e.g. Anna is a Programmer who earns $249,995.50 

Create an employee named, Anna, set their salary to $249.995.50 and call the doJob() method, passing it the jobtitle, Programmer.
 */
(function(){
  const employee = {
    name:'',
    salary: 0,
    hireDate: new Date(),
    doJob : function(jobTitle) {
      console.log(`${this.name} is a ${jobTitle} who earns $${formatMoney(this.salary)}`);
    }
  };
  const anna = Object.create(employee);
  anna.name = 'Anna';
  anna.salary = 249995.50;
  anna.doJob();
  function formatMoney(amount, decimalCount = 2, decimal = ".", thousands = ",") {
    try {
      decimalCount = Math.abs(decimalCount);
      decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
  
      const negativeSign = amount < 0 ? "-" : "";
  
      const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
      const j = (i.length > 3) ? i.length % 3 : 0;
  
      return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    } catch (e) {
      console.log(e)
    }
  };
})();

/*
3.	Re-write the person object specification described in Question 1 above, but this time, using a Constructor Function named, Person.
Then, add a method named, toString() to the person object, which return the string representation of the person object data in the format:

{Name: John, DateOfBirth: 1998-12-10}

Using your constructor function for the person object, create a person named, Peter, whose date of birth is November 10, 1985.

Print-out to the console, the information for the person named, Peter, using its toString() method. 
*/
(function(){
  const Person = function(name, dateOfBirth){
    this.name = name;
    this.dateOfBirth = dateOfBirth;
  }
  Person.prototype = {
    setName : function(name) {
      this.name = name;
    },
    getName : function() {
      return this.name;
    },
    toString: function() {
      console.log('{Name: '+this.name+', DateOfBirth: '+formatDate(this.dateOfBirth)+'}');
    }
  };
  const john = new Person('John', new Date(1998, 11, 10));
  john.toString();
  function formatDate(date) {
    return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
  }
})();

