import express from "express";
import cors from 'cors'
import userRoutes from './routes/user.routes.js';
import "dotenv/config";

const PORT = process.env.PORT || 8000;
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    try {
        console.log(`Servidor corriendo en el puerto ${PORT}`);
    } catch (error) {
        console.log(`Error al correr el servidor: ${error}`);
    }
});
