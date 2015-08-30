/**
 * Default Value Converter
 *
 * Will return a default supplied value if the supplied
 * value is either null or empty
 *
 */
export class DefaultValueConverter {
    toView(value, defaultValue) {
        if (value === null || value.trim('') === '') {
            return defaultValue;
        } else {
            return value;
        }
    }
}


/**
 * Usage
 *
 * <require from="default-value"></require>
 * stringVal = null;
 * <h1 textContent.bind="stringVal | default:'This is a string value'">This is a string value</h1>
 */
