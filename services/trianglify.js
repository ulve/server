import Trianglify from "trianglify";
const t = s =>
  Trianglify({
    cell_size: 40,
    variance: "0.75",
    seed: s,
    x_colors: "random"
  }).png();
export default t;
