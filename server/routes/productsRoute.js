const router = require('express').Router();
const db = require("../models");

const productService = require ("../services/productService");



router.get('/', (req, res) => {
    productService.getAll().then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.post("/",(req,res) => {
    const product = req.body;
    productService.create(product).then((result) => {
        res.status(result.status).json(result.data);
    });
});

router.put("/",(req,res) => {
    const product = req.body;
    const invalidData = validate(product, constraints);
    const id = product.id;
    
});

router.delete("/",(req,res) => {
    db.product
    .destroy({
        where: {id: req.body.id }
    }).then(() => {
        res.json(`Inlägget raderades`);
    });
});

module.exports = router;