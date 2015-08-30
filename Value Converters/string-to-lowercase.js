export class ToLowercaseValueConverter {
    toView(value) {
            return value.toLowerCase();
    }
}


/**
 * Usage
 *
 * <require from="string-to-uppercase"></require>
 * stringVal = 'This is my test string';
 * <h1 textContent.bind="stringVal | toLowercase">this is my test string</h1>
 */
