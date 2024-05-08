import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import routes from "@/routes";

const app = express();

app.use("/public", express.static("public"));

app.use("/api", routes);

app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended: true }));
app.use(express.raw());
app.use(cookieParser());

app.use(
	cors({
		origin: [new RegExp("http://localhost:\\d*"), "https://example.com"],
		credentials: true,
	})
);

app.listen(3000, () => {
	console.log("Server is running on port 3000");
});
