# PurgeCSS and Conditionally Rendered Elements

This repository demonstrates a bug where PurgeCSS removes Tailwind CSS classes from elements that are conditionally rendered.  The bug occurs because PurgeCSS analyzes the initial HTML, and if the conditionally rendered element is not present, its classes are removed.

## Bug Reproduction

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Run `npm start` to start the development server.
4. Observe that the conditionally rendered element initially lacks styles.

## Solution

The solution involves ensuring that PurgeCSS sees all necessary classes, even those in conditionally rendered elements.  This can be done using various techniques, such as:

* **Adding the classes to a global style file:**  This ensures the classes are always available regardless of conditional rendering.
* **Using PurgeCSS's `safelist` option:** This allows you to specify classes that should never be purged.
* **Using a different build process:** Consider alternative build processes that handle conditional rendering more effectively. 

The `bugSolution.js` file demonstrates a solution using the `safelist` option.