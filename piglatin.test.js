const translate = require('./piglatin');
describe('translate', function() {
    test('converts hello to ellohay', function() {
        expect(translate('hello')).toEqual('ellohay');
    });
    test('convert horse to orsehay', function() {
        expect(translate('horse')).toEqual('orsehay');
    });
    test('convert scramble to amblescray', function() {
        expect(translate('scramble')).toEqual('amblescray');
    });
    test('convert ocean to oceanway', function() {
        expect(translate('ocean')).toEqual('oceanway');
    });
    test('convert apple to appleway', function() {
        expect(translate('apple')).toEqual('appleway');
    });
    test('convert Cheese to eesechay', function() {
        expect(translate('Cheese')).toEqual('eesechay');
    });
    test('convert YELLOW to ellowyay', function() {
        expect(translate('YELLOW')).toEqual('ellowyay');
    });
    test('convert I love JavaScript to iway ovelay avascriptjay', function() {
        expect(translate('I love JavaScript')).toEqual('iway ovelay avascriptjay');
    });
});