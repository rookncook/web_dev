import * as dao from "./dao.js";
export default function CourseRoutes(app) {
  app.get("/api/courses/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const course = await dao.findCourseById(id);
      if (!course) {
        res.status(404).send("Could not find the Course");
        return;
      }
      res.send(course);
    } catch (error) {
      res.status(500).send("Error: Internal Server Error");
    }
  });

  app.put("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    const course = req.body;
    try {
      const status = await dao.updateCourse(id, course);
      res.json(status);
    } catch (error) {
      res.status(500).send("Error: Internal Server Error");
    }
  });

  app.delete("/api/courses/:id", async (req, res) => {
    const { id } = req.params;
    try {
      const status = await dao.deleteCourse(id);
      res.json(status);
    } catch (error) {
      res.status(500).send("Error: Internal Server Error");
    }
  });

  app.post("/api/courses", async (req, res) => {
    const course = await dao.createCourse(req.body);
    res.send(course);
  });

  app.get("/api/courses", async (req, res) => {
    try {
      const courses = await dao.findAllCourses();
      res.send(courses);
    } catch (error) {
      res.status(500).send("Error: Internal Server Error");
    }
  });
}