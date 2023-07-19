import chalk from 'chalk';
import app from "./src/app.js";

const port = 4000;

app.listen(port, () => {
  console.log(chalk.blue `O Servidor está rodando na porta ${port}`);
});
