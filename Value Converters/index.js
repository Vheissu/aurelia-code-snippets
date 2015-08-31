export function configure(aurelia) {

    var resourcePaths = [
        './array-random',
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
        './numeric-to-number',
        './numeric-to-ordinal',
        './object-entries',
        './object-keys',
        './object-to-string',
        './object-values',
        './sort-array',
        './string-capitalize',
        './string-cut',
        './string-to-lowercase',
        './string-to-uppercase',
        './string-truncate'
    ];

    aurelia.globalResources(resourcePaths);
}
