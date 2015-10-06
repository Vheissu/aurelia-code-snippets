/**
 * Array Filter Value Converter
 *
 * Allows for an array to be filtered using parameters and sorting keys
 *
 */
export class FilterValueConverter {
    toView(array, config) {
        let prop = config.search;
        let term = config.term.trim();
        let caseSensitive = config.caseSensitive || false;

        let filtered = array.filter(item => {
            if (term) {
                let foundItem = item[prop];

                if (!caseSensitive) {
                    foundItem = foundItem.toLowerCase();
                    term = term.toLowerCase();
                }

                return foundItem.indexOf(term) >= 0;
            } else {
                return item;
            }
        });

        return (!config.sort) ? filtered : filtered.filter(item => {
            let sortKey = config.sort.key;
            let sortVal = config.sort.value;

            if (sortVal === '') {
                return item;
            } else {
                return (item[sortKey] == sortVal);
            }
        });
    }
}
