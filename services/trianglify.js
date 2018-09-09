import Trianglify from "trianglify";
const t = s =>
  Trianglify({
    cell_size: 40,
    seed: s
  }).png();
export default t;
