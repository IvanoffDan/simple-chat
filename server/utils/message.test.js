const expect = require('expect');
const {generateMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate a valid message', () => {
        const result = generateMessage('test@example.com', 'Some random text');
        expect(result.from).toEqual('test@example.com');
        expect(result.text).toEqual('Some random text');
        expect(result.createdAt).toBeA('number');
    });
});