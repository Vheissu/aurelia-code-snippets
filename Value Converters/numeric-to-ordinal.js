export class ToOrdinalValueConverter {
    toView(value) {
            if (isNan(value) || value < 1) {
                return value;
            }

            let lastDigit = number % 10;

            if (lastDigit === 1) {
                return value + 'st'
            } else if(lastDigit === 2) {
                return value + 'nd'
            } else if (lastDigit === 3) {
                return value + 'rd'
            } else if (lastDigit > 3) {
                return value + 'th'
            }
    }
}


/**
 * Usage
 *
 * <require from="numeric-to-ordinal"></require>
 * myNumber = 20;
 * <h1 textContent.bind="myNumber | toOrdinal">20th</h1>
 */
