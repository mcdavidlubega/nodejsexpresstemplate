import app from "./app";

const { PORT } = process.env || 3000;

app.listen(PORT, () => {
    console.log(`Connected, running on port ${PORT}...`);
});
