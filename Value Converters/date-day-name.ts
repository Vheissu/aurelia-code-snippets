export class DayNameValueConverter {
    toView(value) {
        let dateStr =  new Date(value).getDay();

        switch(dateStr) {
            case 0:
                return 'Sunday';
            break;
            case 1:
                return 'Monday';
            break;
            case 2:
                return 'Tuesday';
            break;
            case 3:
                return 'Wednesday';
            break;
            case 4:
                return 'Thursday';
            break;
            case 5:
                return 'Friday';
            break;
            case 6:
                return 'Saturday';
            break;
            default:
                return 'Error';
            break;
        }
    }
}


/**
 * Usage
 * Gets the current day name from a supplied Date String
 *
 * <require from="date-day-name"></require>
 * dateVal = 'December 17, 1995 03:24:00';
 * <h1 textContent.bind="dateVal | dayName">Sunday</h1>
 */
