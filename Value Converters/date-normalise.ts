export class NormaliseDateValueConverter {
    toView(value) {
            return new Date(value).toDateString();
    }
}


/**
 * Usage
 *
 * <require from="date-normalise"></require>
 * dateVal = 'December 17, 1995 03:24:00';
 * <h1 textContent.bind="dateVal | normaliseDate">Sun Dec 17 1995</h1>
 */
