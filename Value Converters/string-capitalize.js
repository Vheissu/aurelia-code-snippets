export class CapitalizeValueConverter {
    toView(value) {
        var finalStr = '';

        let splitStr = value.split(' ');

        for (let i = 0, len = splitStr.length; i < len; i++) {
            let currentSplit = splitStr[i].charAt(0).toUpperCase() + splitStr[i].slice(1);
            finalStr += currentSplit + ' ';
        }

        return finalStr;
    }
}


/**
 * Usage
 *
 * <require from="string-capitalize"></require>
 * stringVal = 'This is my test string';
 * <h1 textContent.bind="stringVal | capitalize">This Is My Test String</h1>
 */
