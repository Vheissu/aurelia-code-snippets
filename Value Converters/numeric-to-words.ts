/**
 * Converts a number (decimal, integer, or exponential) into it's word representation
 *      <require from="numeric-to-word"></require>
 *      <p>${4 | toWord}</p> // four
        <p>${0 | toWord}</p> // zero
        <p>${0.0 | toWord}</p> // zero
        <p>${0.04 | toWord}</p> // zero point zero four
        <p>${14 | toWord}</p> // fourteen
        <p>${100 | toWord}</p> // one hundred
        <p>${1000 | toWord}</p> // one thousand
        <p>${1000000 | toWord}</p> // one million
        <p>${100000000000 | toWord}</p> // one hundred billion
        <p>${1.456e+10 | toWord}</p> // fourteen billion five hundred sixty million
        <p>${1000000000000 | toWord}</p> // one trillion
        <p>${1000000000000000 | toWord}</p> // one quadrillion
        <p>${1000000000000000000000 | toWord}</p> // one times ten to the power of twenty-one
        <p>${1933000000000000000000 | toWord}</p> // one point three three times ten to the power of twenty-one
        <p>${-10.25 | toWord}</p> // negative ten point two five
        <p>${91723.0003 | toWord}</p> // ninety-one thousand seven hundred twenty-three point zero zero zero three
        <p>It's Bilbo's ${111 | toWord}th birthday</p> // It's Bilbo's one hundred eleventh birthday
 */
export var locales = {
    us_EN : {
        negative : 'negative',
        hundred : 'hundred',
        decimal : 'point',
        exponential : 'times ten to the power of',
        ones : ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'],
        teens : ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'],
        tens : ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'],
        thousands : ['', 'thousand', 'million', 'billion', 'trillion', 'quadrillion', 'quintillion'],
    }
}

export class ToWordValueConverter {
    toView(aValue, locale = locales.us_EN) {

        // convert the number to a string and rip out thousand separators
        aValue = aValue.toString().replace(/[\, ]/g, '');

        // if not parseable, return untouched
        if (!isFinite(Number.parseFloat(aValue))) return aValue;

        // split string into it's composite parts (where applicable)
        let theNumber, theFraction, theExponent = '';
        [theNumber, theExponent] = aValue.split('e+');
        [theNumber, theFraction] = theNumber.split('.');
        [theNumber, theExponent, theFraction] = [theNumber, theExponent, theFraction].map(value => value ? [...value] : undefined);
        
        let theWords = '';

        // if negative
        if (theNumber[0] == '-') {
            theWords += `${locale.negative} `;
            theNumber.shift();
        }

        // if zero (or zero point something)
        if (theNumber.length == 1 && theNumber[0] == 0){
            theWords += `${locale.ones[0]} `; // zero
            theNumber = [];
        }

        // split the number into clusters of 'thousands' and break it down
        while (theNumber.length > 0){
            let theLength = theNumber.length;
            let modThree = theLength % 3;
            let howMany = modThree == 0 ? 3 : modThree;
            let theThousandsIndex = Math.ceil(theLength / 3) - 1;
            let theCluster = theNumber.splice(0, howMany);

            // if 000, skip entire cluster
            if (theCluster.toString() == '0,0,0') continue;

            // if XYZ, convert X
            if (theCluster.length == 3 && theCluster[0] != 0) {
                theWords += `${locale.ones[theCluster[0]]} ${locale.hundred} `;
                theCluster.shift();
            }

            // if 0YZ, convert Y (or YZ if a 'teen')
            if (theCluster.length == 2  && theCluster[0] != 0) {
                if (theCluster[0] === '1') {
                    theWords += `${locale.teens[theCluster[1]]} `;
                    theCluster = []; // already dealt with tens + ones combined = teens when tens = 1
                } else {
                    theWords += locale.tens[theCluster[0] - 2];
                    theWords += (theCluster[1] === '0') ? ' ' : '-'; // e.g. ninety-one
                    theCluster.shift(); // pop the tens off, so the ones gets processed next
                }
            }

            // if 00Z, convert Z
            if (theCluster.length == 1  && theCluster[0] != 0)
                theWords += `${locale.ones[theCluster[0]]} `;

            // ... thousand, million, etc
            theWords += `${locale.thousands[theThousandsIndex]} `;

        }

        // print the decimal places (if applicable)
        if (theFraction && theFraction.length > 0){
            theWords += `${locale.decimal} `;
            theFraction.map(value => { theWords += `${locale.ones[value]} `})
        }

        // print the exponent (if applicable)
        if (theExponent){
            theWords += `${locale.exponential} `;
            theWords += this.toView(theExponent);
        }

        return theWords.trim();
    }
}
