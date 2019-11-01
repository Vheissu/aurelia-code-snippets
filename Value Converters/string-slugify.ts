export class SlugifyValueConverter {
    toView(value: string | null) {
      if (!value) {
        return value;
      }
      
     return value
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9\s-]/g, ' ')
        .replace(/[\s-]+/g, '-');
    }
}


/**
 * Usage
 *
 * <require from="string-slugify"></require>
 * stringVal = 'Make me a slug';
 * <h1 textContent.bind="stringVal | slugify">make-me-a-slug</h1>
 */
