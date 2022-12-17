// Write your solution in this file!
const employee = {
    name: "jeff",
     streetAddress: "595 sunset rd"
    };

console.log(employee);

function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = { ...employee };

    newObj[key] = value;
  
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newB = { ...employee };
    
    

    delete newB[key];
    
    //console.log(newB);
    return newB;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];

    return employee;
}

