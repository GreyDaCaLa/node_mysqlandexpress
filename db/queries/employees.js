// MySql error fix, went to my sql and ran folloring 3 lines to allow connections
// use bestbuy;
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;



const { Query } = require("../models");



const allEmployees = async () => {
    return Query("select * from employees order by EmployeeID desc");
};

const oneEmployee = async (id) =>{
    return Query("select * from employees where EmployeeID =?",[id]);
};

const addEmployee = async (body)=>{
    return Query("insert into employees set ?",[body]);
}

const updateEmployee= async (body,id)=>{
    return Query("update employees set ? where EmployeeID = ?",[body,id]);
}

const removeEmployee = async (id) => {
    return Query(`delete from employees where employeeID = ?`, [id]);
}



module.exports = {
    allEmployees,
    oneEmployee,
    addEmployee,
    updateEmployee,
    removeEmployee,
}