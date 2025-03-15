# smart-date-format

A smart date formatting library with locale support.

## Installation

```sh
npm install smart-date-format
```

## Usage

```js
const SmartDateFormat = require("smart-date-format");

const dateFormatter = new SmartDateFormat("en-US");

console.log(dateFormatter.format(new Date(), "long")); 
// Example Output: "Saturday, March 15, 2025"

console.log(dateFormatter.relative(new Date(Date.now() - 3600000))); 
// Example Output: "1 hours ago"
```