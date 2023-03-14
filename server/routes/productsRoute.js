const router = require('express').Router();
const db = require("../models");
const validate = require("validate.js");

const constraints = {
    /* email: {
        length: {
        minimum: 2,
        maximum: 100,
        prescence: true,
        tooShort: "^Mailadressen måste vara minst %{count} tecken lång.",
        tooLong: "^Mailadressen  får inte vara längre än %{count} tecken lång."
    }
    }, */
    title: {
        length: {
            minimum: 2,
            maximum: 100,
            prescence: true,
            tooShort: "^Titeln måste vara minst %{count} tecken lång.",
            tooLong: "^Titeln får inte vara längre än %{count} tecken lång."
    },
    },
    description: {
    },
    price: {
    },
    imageUrl: {
        url: {
            message: "^Felaktig sökväg"
        }
    },
};

router.get('/', (req, res) => {
    db.product.findAll().then((result) => {
        res.send(result);
    })
});

router.post("/",(req,res) => {
    const product = req.body;
    const invalidData = validate(product, constraints);
    if(invalidData) {
        res.status(400).json(invalidData);
    } else {
        db.product.create(product).then((result) => {
        res.send(result);
        })
    }   
});

router.put("/",(req,res) => {
    const product = req.body;
    const invalidData = validate(product, constraints);
    const id = product.id;
    if(invalidData || !id) {
        res.status(400).json(invalidData || "Id är obligatoriskt.");
    } else {
        db.product
    .update(product, {
        where: {id: product.id }
    })
    .then((result) => {
        res.send(result);
    })
    }
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