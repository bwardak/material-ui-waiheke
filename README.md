# Material UI

## What is MUI?

- [MUI documentation](https://mui.com/material-ui/getting-started/)

- Open source react component library.
- Allows you to implement Googles Material Design.
- Comprehensive collection of prebuilt components.
- Mobile first

Advantages:

- Open source so many contributors have added components. Reduce production time with pre-existing UI components.
- Material UI component meets the highest standards of form and function, while allowing for manual customisation.
- All components are highly customizable.
- Allows for easy colloboration between developers, whether back-end or front-end.
- Reliable and long history, lots of community support.


Disadvantages:

- Autocomplete

## Setup

- Created vite project in react/typescript. npm create vite@latest
- Found installation command within documentation 
  - `npm install @mui/material @emotion/react @emotion/styled`
  - `npm install @fontsource/roboto`
  - `npm install @mui/icons-material` 
  
## Material icons  
  [Material Icons](https://fonts.google.com/icons?icon.set=Material+Icons)
  [Importing material icons](https://mui.com/material-ui/material-icons/)

## Usage

```
  import * as React from 'react';
  import Button from '@mui/material/Button';

  export default function ButtonUsage() {
    return <Button variant="contained">Hello world</Button>;
  }
```

## Findings

- Massively increased production time
  - Component markup done
  - Components styled
  - Positioning of layouts predefined
    - Good spacing within a component
  
- Heavy customisation
  - Most components already have multiple variants/colors e.g greyed out text, disabled buttons


## Problems

- Learning curve when new
  - Lots of documentation to understand
  - Different methods of styling than what were used to e.g changing colors
  - Knowing how to use required props
  - Data types


## Solutions

- Documentation goes into depth
  - Great examples of code and visual
- Lots of community notes online