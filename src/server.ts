import express from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path"
import routes from './routes'


//Initialize DOTENV
dotenv.config()

//Initialize express
const app = express()

//Set view engine
app.set("view engine", "mst")
app.set("views", path.join(__dirname, "views"))
app.engine("mst", mustache())

//Set public folder
app.use(express.static(path.join(__dirname, "../public")))

//Routes
app.use(routes)

//404
app.use((req, res) => {
  res.render("pages/404")
})

//Start server
app.listen(process.env.PORT || 3001)
console.log("\n" + "Server running" + "\n")
