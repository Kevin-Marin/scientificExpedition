import "dotenv/config";
import "./config/db.js";
import e from "express";
import explorerRoute from "./routes/explorerRoute.js";
import speciesRoute from "./routes/speciesRoute.js";
import expeditionRoute from "./routes/expeditionRoute.js";

const app = e();

app.use(e.json());

app.use("/explorer", explorerRoute);
app.use("/species", speciesRoute);
app.use("/expedition", expeditionRoute);

app.listen(process.env.PORT, () => console.log("App running!"));