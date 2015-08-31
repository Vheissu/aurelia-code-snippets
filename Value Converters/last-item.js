/**
 * Last Item Value Converter
 *
 * Will allow you to get the last item within an Array
 * or the last item within an object
 *
 */
export class LastValueConverter {
    toView(value) {
        if (!value || !value.length) {
            return value;
        }

        if (Array.isArray(value)) {
            return value[value.length - 1];
        } else {
            var str = value.toString ? value.toString() : Object.prototype.toString.call(value);

            // We are dealing with an Object, so lets return a new Object
            // Using the first key and value inside of the supplied Object
            if (str === '[object Object]') {
                let theKey = Object.keys(value)[value.length - 1];
                return {theKey : value[theKey]};
            }
        }

        return value;
    }
}


/**
 * Usage
 *
 * <require from="last-item"></require>
 * testArr = ['banana', 'orange', 'apple', 'lime', 'coconut'];
 * <h1 textContent.bind="testArr | last">coconut</h1>
 */
