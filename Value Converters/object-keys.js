// A ValueConverter for iterating an Object's properties inside of a repeat.for in Aurelia
export class ObjectKeysValueConverter {
    toView(obj) {
        // Create a temporary array to populate with object keys
        let temp = [];

        // A basic for..in loop to get object properties
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                temp.push(obj[property]);
            }
        }

        return temp;
    }
}

/**
 * Usage
 * Shows how to use the custom ValueConverter to iterate an objects properties
 * aka its keys.
 *
 * <require from="ObjectKeys"></require>
 * <li repeat.for="prop of myVmObject | objectKeys">${prop}</li>
 */
