/*
 * Currency Value Converter
 * Supported in IE11+ (not in Safari)
 *
 */
export class CurrencyValueConverter {
    toView(value, config = {}) {
        let locale = config.locale || 'en';
        let props = {
            style: 'currency',
            currency: config.currency || 'USD',
            currencyDisplay: config.displayBy || 'symbol'
        };

        return value.toLocaleString(locale, props);
    }
}


/**
 * Usage
 *
 * <require from="currency"></require>
 * currencyVal = 100000;
 * <h1 textContent.bind="currencyVal | currency: {currency: 'AUD'}">A$100,000</h1>
 */
