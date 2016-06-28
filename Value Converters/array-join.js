/**
 * Array Join Value Converter
 *
 * Takes an array and returns a string with each value
 * separated by the separator
 *
 */
export class FilterValueConverter {
    toView(array, config) {
        let separator = config.separator || ',';
        
        if (!array || !Array.isArray(array)) {
          return '';
        }
        
        return array.join(separator);
    }
}
