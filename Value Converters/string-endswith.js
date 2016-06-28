/*
 * Ends With Value Converter
 *
 * Does a string end with a particular value?
 *
 */
export class EndsWithValueConverter {
    toView(value, param) {
      if (!value) {
        return value;
      }
      
      return (typeof value === 'string') ? value.endsWith(param) : null;
    }
}

/**
 * Usage
 *
 * <require from="string-endswith"></require>
 * <h1 show.bind="someValue | endsWith:'ing'">If I end in "ing" I will be visible</h1>
 *
 */
