export class DateYearValueConverter {
    toView(value) {
            return new Date(value).getFullYear();
    }
}


/**
 * Usage
 *
 * <require from="date-year"></require>
 * dateVal = 'December 17, 1995 03:24:00';
 * <h1 textContent.bind="dateVal | dateYear">1995</h1>
 */
