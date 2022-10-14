import { TestRouter } from "../components";
import songRouter from "../components/songs/network";
import userRouter from "../components/user/network";

// cada vez que quiera agregar unaruta nueva,
// creo el path e importo el componente
const listRoutes = [["/test", TestRouter],["/api/v1/song",songRouter],["/api/v1/",userRouter]];


export const routes = (app) => {
  listRoutes.forEach(([path, controller]) => {
    app.use(path, controller);
  });
};
