# flow hdl

flow hdl is an open source web-based flowgraph HDL generator inspired by tools like Simulink HDL Coder and GNU Radio.

<img width="1426" alt="image" src="https://github.com/user-attachments/assets/132b4761-7b5d-4200-99e4-01feb3d161c8" />

## What it can do 
- create simple HDL from predfined user blocks
- do some very crude error checking (sign/bitwidth matching on source and destinations)

## What it cannot do (yet)
- robust error checking - it can generate unsynth-able code
- simulate
- create test benches 

## quickstart keyboard shortcuts

- `spacebar` fits graph to view
- `ctrl + -` zoom out
- `ctrl + +` zoom in
  
## Flow is in its infancy!

Please contribute if you are a web, react/vite, react flow, or HDL guru! We need a lot of help simplifying logic, components, and how blocks are created. this was bootstrapped with a lot of help from AI (sorry, im not a web dev by day) and will need some TLC to get to a sane state. 

### Top priorities
- [ ] more sane UI styling
- [ ] decent appearance on mobile, although not super high priority
- [ ] better user defined block experience. a web-laymen, but HDL expert, should be able to quickly add blocks via a well defined structure without much web-code overhead. 
- [ ] better editor features/styling (like resizing editor pane)
- [ ] better block explorer pane that can be hidden
- [ ] better styling for react flow
     - [ ] highlight when wires clicks
     - [ ] better block appearance
     - [ ] fix flowgraph bugs: blocks pulled into flowgraph go out of view, resize blocks doesnt work, text on block and ports need organized better
- [ ] simplifying logic, components, and how blocks are created. this was bootstrapped with a lot of help from AI and will need some TLC to get to a sane state
- [ ] error checking bugs
     - [ ] blocks should not allow connection if sign and bitwidth do not match source to destination
     - [ ] blocks should highlight a connection red if an error occurs after connection (sign/bitwidth changes and does not match anymore)
     - [ ] clicking signed in dailogs doesnt propogate state correctly
- [ ] hierarchy needs added, you should be able to create subsystems like in simulink. i.e. flowgraphs within flowgraphs
## [DEMO](https://flow-hdl.netlify.app)

## get started with dev

1. clone
2. `npm i`
3. `npm run dev`

# Concept

1. build flowgraph
2. generate hdl
3. simulate however the hell you want

# How to add functional blocks

Blocks are located in `/components/blocks/`. users define the interface and the underlying hdl. See `/components/blocks/adder` for a good example

# Structure 
This is only here so i can continually explain my project layout to AI. 

```
src/
├── components/
│   ├── blockHelpers/
│   │   ├── BaseBlock.jsx          # Existing - Base block functionality
│   │   ├── BlockDialog.jsx        # Existing - Block configuration dialog
│   │   ├── HDLNode.jsx           # Existing - Visual node representation
│   │   ├── HierarchicalBlock.jsx  # New - Handles nested flow graphs
│   │   └── index.js              # Export all block helper components
│   ├── blocks/
│   │   ├── Adder.jsx          # Existing - Base block functionality
│   │   ├── Multiplier.jsx        # Existing - Block configuration dialog
│   ├── generators/
│   │   ├── SystemVerilogGenerator.jsx          # Existing - Base block functionality
│   ├── BlockLibrary.jsx          # Existing - Shows available blocks
│   ├── FileDrawer.jsx           # Existing - File management UI
│   ├── FileEditor.jsx           # Existing - Edit generated files
│   ├── FileExplorer.jsx         # Existing - Browse generated files
│   └── FlowGraph.jsx            # Existing - Main graph component
```
