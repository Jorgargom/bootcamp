var express = require("express");
var router = express.Router();

// cargamos la libreria de validaciones
const { query, validationResult } = require("express-validator/check");

/* GET home page. */
router.get("/", function(req, res, next) {
  //res.render("index", { title: "Nodeapi" }); //se puede cambiar la variable de la vista

  const segundo = new Date().getSeconds();
  res.locals.valor = 123;
  res.locals.texto =
    '<script>alert("Hola, he conseguido inyectar codigo")</script>';

  res.locals.condicion = {
    segundo: segundo,
    estado: segundo % 2 === 0
  };
  res.locals.users = [
    { name: "Smith", age: 20 },
    { name: "Jorge", age: 22 },
    { name: "Susi", age: 42 }
  ];
  res.render("index");
});

router.get("/paramenruta/:id", (req, res, next) => {
  console.log("req.params", req.params);
  const id = req.params.id;
  res.send("ok");
});

router.get("/paramopcional/:dato?", (req, res, next) => {
  console.log("req.params", req.params);
  res.send("ok");
});

// acepts numeric ids

router.get(
  "/param/:id([0-9]+)/piso/:piso/puerta/:puerta(a|b|c)",
  (req, res, next) => {
    console.log("req.params", req.params);
    res.send("ok");
  }
);

router.get(
  "/enquerystring",
  [
    query("age")
      .isNumeric()
      .withMessage("debería ser un número")
      .custom(value => {
        if (value < 18) {
          throw new Error("debe ser mayor de edad");
        }
        return true;
      })
  ],
  (req, res, next) => {
    validationResult(req).throw();
    console.log("req.query", req.query);
    const pelo = req.query.pelo;
    const sexo = req.query.sexo;
    res.send("okidoki");
  }
);

router.post("/enelbody", (req, res, next) => {
  console.log("req.body", req.body);
  res.send("ok");
});

module.exports = router;
