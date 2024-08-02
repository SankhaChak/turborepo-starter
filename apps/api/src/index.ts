import { createServer } from "./server";

const port = process.env.PORT || 5500;

const server = createServer();

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
