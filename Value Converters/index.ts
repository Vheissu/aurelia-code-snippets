export function configure(aurelia) {

    var resourcePaths = [
        './array-filter',
        './array-join',
        './array-random',
        './console-debug',
        './currency',
        './date-day-name',
        './date-day-number',
        './date-normalise',
        './date-timesince',
        './date-year',
        './default-value',
        './first-item',
        './last-item',
        './numeric-divisibleby',
        './numeric-filesizeformat',
        './numeric-floatformatg',
        './numeric-percent',
        './numeric-to-number',
        './numeric-to-ordinal',
        './numeric-to-words',
        './object-entries',
        './object-keys',
        './object-to-string',
        './object-values',
        './sort-array',
        './string-capitalize',
        './string-cut',
        './string-endswith',
        './string-match',
        './string-slugify',
        './string-to-lowercase',
        './string-to-uppercase',
        './string-truncate'
    ];

    aurelia.globalResources(resourcePaths);
}
