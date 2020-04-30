// 6
const count = (function () {
  let counter = 0;
  return { 
    add: function () {
      counter++;
      return counter;
    },
    reset: function () {
      counter = 0;
      return counter;
    }
  };
})();

// 8
const make_adder = (function (inc) {
  let counter = 0;
  return function () {
    counter+=inc;
    return counter;
  }
})();
const add5 = make_adder(5);
add5();
add5();
add5();
const add7 = make_adder(7);
add7();
add7();
add7();

// 10
const Employee = () => {
  let name = "";
  let age = 0;
  let salary = 0;
  const getAge = () => age;
  const getSalary = () => salary;
  const getName = () => name;
  return {
    setAge: newAge => { age = newAge },
    setSalary: newSalary => { salary = newSalary; },
    setName: newName => { name = newName; },
    increaseSalary: (percentage) => { salary += ((1 + percentage) * getSalary()); },
    incrementAge: () => { age = getAge() + 1; }
  };
};
const employee = Employee();

// 11
const ExtendedEmployee = ((EmployeeModule) => {
  return () => Object.assign({
    address: '',
    setAddress: function (newAddress) { this.address = newAddress; },
    getAddress: function () { return this.address; }
  }, EmployeeModule());
})(Employee);
const emp = ExtendedEmployee();