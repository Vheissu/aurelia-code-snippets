export class DivisiblebyValueConverter {
    toView(value, divisibleValue) {
        if (isNan(value) || value < 1) {
            return false;
        }

        return (value % divisibleValue === 0);
    }
}


/**
 * Usage
 *
 * <require from="numeric-divisibleby"></require>
 * myNumber = 2;
 * <div if.bind="myNumber | divisibleby:2"></div>
 */
