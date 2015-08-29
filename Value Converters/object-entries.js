// A ValueConverter for iterating an Object's properties inside of a repeat.for in Aurelia
export class ObjectEntriesValueConverter {
    toView(obj) {
        // Create a temporary array to populate with object keys
        let temp = [];

        // A basic for..in loop to get object properties
        // https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/for...in
        for (let prop in obj) {
            if (obj.hasOwnProperty(prop)) {
                temp.push({key: prop, value: obj[prop]});
            }
        }

        return temp;
    }
}

/**
 * Usage
 *
 * <require from="ObjectEntries"></require>
 * <li repeat.for="entry of myVmObject | objectEntries">${entry.key}: ${entry.value}</li>
 */
