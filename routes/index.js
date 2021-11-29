
const express = require("express");
const  { allEmployees,addEmployee,oneEmployee,updateEmployee,removeEmployee} = require("../db/queries/employees");
const  { allProduct,addProduct,oneProduct,updateProduct,removeProduct} = require("../db/queries/products");

const router = express.Router();

router.get("/api/employees",async (req,res,next)=>{
    try{
        let data = await allEmployees();
        res.json(data);
    } catch (error){
        next(error);
    }
});

router.get("/api/employees/:id",async (req,res,next)=>{
    let {id}=req.params;
    try{
        let [data] = await oneEmployee(id);
        res.json(data);
    } catch (error) {
        next(error);
    }
})

router.post("/api/employees",async (req,res,next)=>{
    try{
        let newdata = req.body;
        let data = await allEmployees();

        newdata.EmployeeID=data[0].EmployeeID+1000;

        // console.log(data[0].EmployeeID);
        // console.log(newdata);
        let other = await addEmployee(newdata);
        // console.log("other",other)
        res.json(newdata);
    } catch (error) {
        next(error);
    }
})

router.put("/api/employees/:id",async (req,res,next)=>{
    let {id}=req.params;
    let newdata = req.body;
    try{
        let other = await updateEmployee(newdata,id);
        res.json("Content updated at id:"+id);
    } catch (error) {
        next(error);
    }
})

router.delete("/api/employees/:id",async (req,res,next)=>{
    let {id}=req.params;
    try{
        let other = await removeEmployee(id);
        res.json("Content removed at id:"+id);
    } catch (error) {
        next(error);
    }
})

/* the products below */

router.get("/api/product",async (req,res,next)=>{
    try{
        let data = await allProduct();
        res.json(data);
    } catch (error){
        next(error);
    }
});

router.get("/api/product/:id",async (req,res,next)=>{
    let {id}=req.params;
    try{
        let [data] = await oneProduct(id);
        res.json(data);
    } catch (error) {
        next(error);
    }
})

router.post("/api/product",async (req,res,next)=>{
    try{
        let newdata = req.body;
        let data = await allProduct();

        newdata.ProductID=data[0].ProductID+1000;

        // console.log(data[0].ProductID);
        // console.log(newdata);
        let other = await addProduct(newdata);
        // console.log("other",other)
        res.json(newdata);
    } catch (error) {
        next(error);
    }
})

router.put("/api/product/:id",async (req,res,next)=>{
    let {id}=req.params;
    let newdata = req.body;
    try{
        let other = await updateProduct(newdata,id);
        res.json("Content updated at id:"+id);
    } catch (error) {
        next(error);
    }
})

router.delete("/api/product/:id",async (req,res,next)=>{
    let {id}=req.params;
    try{
        let other = await removeProduct(id);
        res.json("Content removed at id:"+id);
    } catch (error) {
        next(error);
    }
})






module.exports = router;



