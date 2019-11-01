/*
 * Percent Value Converter
 *
 * Calculates a percentage value between two numbers
 *
 */
export class PercentValueConverter {
    toView(value, divided = 100, round = false) {
      if (!value) {
        return value;
      }
      
      let divider = (typeof value === 'string') ? Number(value) : value;
      
      if (typeof divider !== 'number' || isNaN(divider)) {
        return value;
      }
      
      return round ? Math.round((divider / divided) * 100 ) : (divider / divided) * 100;
    }
}

/**
 * Usage
 *
 * <require from="numeric-percent"></require>
 * <h1 textContent.bind="someValue | percent:15:100">15</h1>
 *
 */
