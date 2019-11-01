export class ToUppercaseValueConverter {
    toView(value) {
            return value.toUpperCase();
    }
}


/**
 * Usage
 *
 * <require from="string-to-uppercase"></require>
 * stringVal = 'This is my test string';
 * <h1 textContent.bind="stringVal | toUppercase">THIS IS MY TEST STRING</h1>
 */
