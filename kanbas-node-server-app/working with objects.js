const assignment = {
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  };
  
  const module = {
    id:2,name:"Webdev is actually not that bad",author:"bro"
  }

const working_with_objects = (app) => {
    app.get("/a5/assignment", (req, res) => {
        res.json(assignment);
      });
      app.get("/a5/assignment/title", (req, res) => {
        res.json(assignment.title);
      });
      app.get("/a5/assignment/title/:newTitle", (req, res) => {
        const { newTitle } = req.params;
        assignment.title = newTitle;
        res.json(assignment);
      });
    
      app.get("/a5/module", (req, res) => {
        res.json(module);
      });
      app.get("/a5/module/name", (req, res) => {
        res.json(module.name);
      });
      app.get("/a5/module/name/:newName", (req, res) => {
        const { newName } = req.params;
        module.name = newName;
        res.json(module);
      });
  };
  export default working_with_objects;