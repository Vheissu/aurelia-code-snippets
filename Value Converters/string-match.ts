/*
 * String Match Value Converter
 *
 * Allows for a regular expression to be used in the view to match
 * and return a certain part of a string
 *
 */
export class StringMatchValueConverter {
    toView(value, pattern, flag) {
      if (!value) {
        return value;
      }
      
      let theExpression = new RegExp(pattern, flag);
      
      return (typeof value === 'string') ? value.match(theExpression) : null;
      
    }
}

/**
 * Usage
 *
 * <require from="string-match"></require>
 * <h1 textContent.bind="someValue | stringMatch:'pattern':'flag'"></h1>
 *
 */
