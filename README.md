# Super Micro HTML Templates
Uses JavaScript string interpolation to parse template literals (template strings) to HTML, and vice versa.

## Installation
Download or clone this repo then install with your package manager.
```yarn add html-micro-templates```
or
```npm i html-micro-templates```

## Usage
Import the package into your code
```javascript
var microHTML = require('html-micro-templates')
```
or
```javascript
import microHTML from 'html-micro-templates'
```

### Functions

#### String -> HTML
To generate HTML elements from template strings, use the `stringToElement` function.

```javascript
const stringToConvert = 'There should be a ${buttonElement} here.'

microHTML.stringToElement({ 
    string: stringToConvert, // The string to parse
    value: 'Button Text', // The inner HTML of the element
    }, 'button' // The element to generate
)

// returns the following:
// There should be a <button class='variable buttonElement'>Button Text</button> here.
```

#### HTML -> String
You can parse HTML to extact template strings based on the elements' class by using the `elementToString` function.

```javascript
const htmlToConvert = `There should be a <button class='variable buttonElement'>Button Text</button>
here, and a <section class='variable sectionElement'>section</section> here.`

microHTML.elementToString(htmlToConvert)

// returns the following:
//'There should be a ${buttonElement} here, and a ${sectionElement} here.'
```

#### Extract Literals from HTML
The `parseHTML` function will return an array of template strings.

```javascript
const htmlToConvert = `<span class='variable spanElement'>There should be a 
<button class='variable buttonElement'>Button Text</button> here.</span>`

microHTML.parseHTML(htmlToConvert)

// returns the following:
// ["spanElement", "buttonElement"]
```

Optionally, you can pass `true` to the second parameter of the `parseHTML` function, and it will return the template strings with the standard JavaScript template delimiters.

```javascript
microHTML.parseHTML(htmlToConvert, true)

// returns the following:
// ["${spanElement}", "${buttonElement}"]
```
