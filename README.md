# Aurelia-Code-Snippets
A collection of handy code snippets and resources for the Aurelia Javascript framework.

Please browse the repository subdirectories to get more information about the various code snippets available.

## Value Converters Plugin
If you would like to include all Value Converters within this repository, there is an index.js file created within the sub-folder which handles importing all custom Value Converters.

To use simply add the following to your bootstrap logic in ```main.js``` or appropriately named file where Aurelia is bootstrapped. The only important line to consider is the ```aurelia.use.feature('foldername')``` the rest is not important, but there to show how it is used within existing bootstrap logic.

```
export function configure(aurelia) {
    aurelia.use
        .standardConfiguration()
        .feature('resources'); // This assumes the Value Converters and index.js file exist within a folder: /src/resources and will pick up the index.js file

    aurelia.start().then(a => {
        return a.setRoot('app', document.body);
    });
}
```
