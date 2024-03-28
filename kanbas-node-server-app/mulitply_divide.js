const mulitply_divide = (app) => {
  app.get("/a5/multiply/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) * parseInt(b);
    res.send(sum.toString());
  });
  app.get("/a5/divide/:a/:b", (req, res) => {
    const { a, b } = req.params;
    const sum = parseInt(a) / parseInt(b);
    res.send(sum.toString());

  });

  app.get("/a5/calculator_mulitply_divide", (req, res) => {
    const { a, b, operation } = req.query;
    let result = 0;
    switch (operation) {
      case "multiply":
        result = parseInt(a) * parseInt(b);
        break;
      case "divide":
        result = parseInt(a) / parseInt(b);
        break;
      default:
        result = "Invalid operation";
    }
    res.send(result.toString());

  });
};
export default mulitply_divide;