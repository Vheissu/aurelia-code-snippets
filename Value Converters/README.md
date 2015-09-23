## Aurelia Value Converters
This directory contains a few handy custom Value Converters for the Aurelia Javascript framework.

## General
A collection of generic Value Converters

- [Default value if supplied value is empty or null](default-value.js)
- [Get the first item in Array or Object](first-item.js)
- [Get the last item in Array or Object](last-item.js)

### Strings
A collection of Value Converters for working with strings.

- [String to UPPERCASE](string-to-uppercase.js)
- [String to lowercase](string-to-lowercase.js)
- [Capitalize every word in a string](string-capitalize.js)
- [Cut (allows you to remove a character from a string)](string-cut.js)
- [String truncate with ellipsis '...'](string-truncate.js)

### Dates
A collection of Value Converters for working with date values.

- [Converting a Date string into a normalised DateString](date-normalise.js)
- [Get the day name from a Date string](date-day-name.js)
- [Get numeric day of the month from a Date string](date-day-number.js)
- [Get numeric year value from a Date string](date-year.js)
- [Humanized Time Span for past and future date ranges](date-timesince.js)

### Currency
A collection of Value Converters for working with currency values.

- [Locale currency conversion](currency.js)

### Numeric Values
A collection of Value Converters for working with numeric values.

- [Number is divisible by](numeric-divisibleby.js)
- [Number to ordinal](numeric-to-ordinal.js)
- [Round a floating point number to a specified decimal place](numeric-floatformat.js)
- [Convert a numeric value into a human readable filesize; KB, MB, GB, TB, etc](numeric-filesizeformat.js)
- [Typecast a value into a Number](numeric-to-number.js)
- [Convert a numeric value into human words; one, twenty-one, etc](numeric-to-words.js)

### Objects
A collection of Value Converters for working with Objects.

- [Using a repeat.for to iterate an Objects properties](object-keys.js)
- [Using a repeat.for to iterate an Objects values](object-values.js)
- [Converting an Object to string](object-to-string.js)

### Arrays
A collection of Value Converters for working with Arrays

- [Sorting an array in a repeat.for](sort-array.js)
- [Randomly get an item from an Array and return it](array-random.js)

### Debug:
A collection of Value Converters for debugging.

- [Prints out every value that goes trough it](console-debug.js)
