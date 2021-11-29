// MySql error fix, went to my sql and ran folloring 3 lines to allow connections
// use bestbuy;
// ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'password';
// flush privileges;



const { Query } = require("../models");



const allProduct = async () => {
    return Query("select * from products order by ProductID desc");
};

const oneProduct = async (id) =>{
    return Query("select * from products where ProductID =?",[id]);
};

const addProduct = async (body)=>{
    return Query("insert into products set ?",[body]);
}

const updateProduct= async (body,id)=>{
    return Query("update products set ? where ProductID = ?",[body,id]);
}

const removeProduct = async (id) => {
    return Query(`delete from products where productID = ?`, [id]);
}



module.exports = {
    allProduct,
    oneProduct,
    addProduct,
    updateProduct,
    removeProduct,
}