export class DayNumberValueConverter {
    toView(value) {
        return new Date(value).getDate();
    }
}


/**
 * Usage
 * Gets the current day from a supplied Date String
 *
 * <require from="date-day-number"></require>
 * dateVal = 'December 17, 1995 03:24:00';
 * <h1 textContent.bind="dateVal | dayNumber">17</h1>
 */
