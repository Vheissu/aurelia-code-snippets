/**
 * Random Array Item Value Converter
 *
 * Will randomly pick an item from an array and return it.
 *
 */
export class RandomValueConverter {
    toView(value) {
        if (!Array.isArray(value) || !value.length) {
            return value;
        }

        return value[Math.floor(Math.random()*value.length)];
    }
}


/**
 * Usage
 *
 * <require from="array-random"></require>
 * myArr = ['banana', 'orange', 'apple', 'lime', 'coconut'];
 * <h1 textContent.bind="myArr | random">A random value from the supplied array will display here.</h1>
 */
