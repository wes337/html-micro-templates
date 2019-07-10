var hMicroT = require('./index')

describe('stringToElement', () => {
    it('should replace delimited string with a button element', () => {
        const stringToConvert = 'There should be a ${buttonElement} here.'
        expect(hMicroT.stringToElement(
            { 
                string: stringToConvert,
                value: 'Button Text',
            }, 'button'
        )).toMatchSnapshot()
    })
    it('should replace delimited string with a self closing img element', () => {
        const stringToConvert = 'There should be a ${img} here.'
        expect(hMicroT.stringToElement(
            { 
                string: stringToConvert,
                value: 'somePic.jpg',
            }, 'img'
        )).toMatchSnapshot()
    })
})

describe('elementToString', () => {
    it('should replace element with a button delimited string', () => {
        const htmlToConvert = `"There should be a <button class='variable buttonElement'>Button Text</button> here, and a <section class='variable sectionElement'>section</section> here."`
        expect(hMicroT.elementToString(htmlToConvert)).toMatchSnapshot()
    })
})

describe('parseHTML', () => {
    const htmlToConvert = `"<span class='variable spanElement'>There should be a <button class='variable buttonElement'>Button Text</button> here.</span>"`
    it('should return array of literals', () => {
        expect(hMicroT.parseHTML(htmlToConvert)).toMatchSnapshot()
    })

    it('should return array of literals (with delimiters)', () => {
        expect(hMicroT.parseHTML(htmlToConvert, true)).toMatchSnapshot()
    })
})