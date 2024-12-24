// OutPort.jsx
import { createBlock } from "../blockHelpers/BlockFactory";

const config = {
  type: "outport",
  name: "Output Port",
  description: "Output port for HDL module",
  shape: {
    type: "oval",
    width: 120,
    height: 80,
    lockAspectRatio: true,
  },
  ports: {
    inputs: {
      in: {
        width: { default: 32, min: 1, max: 512 },
        signed: false,
        description: "Input port",
      },
    },
    outputs: {}, // No outputs
  },
};

// OutPorts don't need Verilog generation as they're handled by the parent module
const generateVerilog = null;

const OutPortBlock = createBlock({ config, generateVerilog });

// Debug check
console.log("OutPortBlock created:", {
  config: OutPortBlock.blockConfig,
  verilog: OutPortBlock.generateVerilog,
});

export default OutPortBlock;
