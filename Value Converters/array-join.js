/**
 * Array Join Value Converter
 *
 * Takes an array and returns a string with each value
 * separated by the separator
 *
 */
export class ArrayJoinValueConverter {
    toView(array, separator = ',') {
        if (!array || !Array.isArray(array)) {
          return '';
        }
        
        return array.join(separator);
    }
}
