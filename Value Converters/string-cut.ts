export class CutValueConverter {
    toView(value, cutValue) {
        return value.replace(cutValue, '');
    }
}


/**
 * Usage
 *
 * <require from="string-cut"></require>
 * stringVal = 'I am a robot and this is my CPU';
 * <h1 textContent.bind="stringVal | cut:' '">IamarobotandthisismyCPU</h1>
 */
