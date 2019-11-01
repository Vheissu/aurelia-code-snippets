/**
 * First Item Value Converter
 *
 * Will allow you to get the first item within an Array
 * or the first item within an object
 *
 */
export class FirstValueConverter {
    toView(value) {
        if (!value || !value.length) {
            return value;
        }

        if (Array.isArray(value)) {
            return value[0];
        } else {
            var str = value.toString ? value.toString() : Object.prototype.toString.call(value);

            // We are dealing with an Object, so lets return a new Object
            // Using the first key and value inside of the supplied Object
            if (str === '[object Object]') {
                let theKey = Object.keys(value)[0];
                return {theKey : value[theKey]};
            }
        }

        return value;
    }
}


/**
 * Usage
 *
 * <require from="first-item"></require>
 * testArr = ['banana', 'orange', 'apple', 'lime', 'coconut'];
 * <h1 textContent.bind="testArr | first">banana</h1>
 */
