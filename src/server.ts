import fastify from "fastify"
import { professors } from "./routes/professors";

const app = fastify();

app.register(professors);

app.listen({port:3000}).then(() => {
    console.log("Server is running on http://localhost:3000")
})