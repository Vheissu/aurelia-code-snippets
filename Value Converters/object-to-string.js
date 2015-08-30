/**
 * Convert Object to pretty-printed JSON string to insert into the VIEW
 * @example Insert into the VIEW: <pre>${object | objectToString}</pre>
 */
export class ObjectToStringValueConverter {
  toView(object) {
    return JSON.stringify(object, null, 2);
  }
}

/**
 * Usage
 *
 * <require from="ObjectToString"></require>
 * <pre>${object | objectToString}</pre>
 */
