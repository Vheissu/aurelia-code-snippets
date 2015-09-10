export class ConsoleDebugValueConverter {
    toView(value) {
	console.log('Converter toView:   ', value);
        return value;
    }
    fromView(value) {
	console.log('Converter fromView: ', value);
	return value;   
    }
}

