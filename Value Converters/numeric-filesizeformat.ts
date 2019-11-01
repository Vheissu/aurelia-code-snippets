export class FilesizeformatValueConverter {
    toView(value) {
        if (isNan(value)) {
            return value;
        }

        /* Below logic taken from here: https://github.com/sindresorhus/pretty-bytes/blob/master/index.js */
        var bytes = value;

    	var unit;
    	var neg = bytes < 0;
    	var units = ['B', 'kB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

    	if (neg) {
    		bytes = -bytes;
    	}

    	if (bytes < 1) {
    		return (neg ? '-' : '') + bytes + ' B';
    	}

    	var exponent = Math.min(Math.floor(Math.log(bytes) / Math.log(1000)), units.length - 1);
    	bytes = (bytes / Math.pow(1000, exponent)).toFixed(2) * 1;
    	unit = units[exponent];

    	return (neg ? '-' : '') + bytes + ' ' + unit;
    }
}


/**
 * Usage
 *
 * <require from="numeric-filesizeformat"></require>
 * fileSize = 1000000;
 * <h1 textContent.bind="fileSize | filesizeformat">1 MB</h1>
 */
