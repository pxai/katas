// import StringTransformer from './string_transformer'
import StringTransformer from './string_transformer_refactored'

describe('StringTransformer', () => {
    it('returns an empty string for empty input', () => {
        expect(StringTransformer.f('')).toBe('')
    })

    it('returns an empty string with spaces for empty string with spaces', () => {
        expect(StringTransformer.f('  ')).toBe('  ')
    })

    it('preserves plain text', () => {
        expect(StringTransformer.f('plain text')).toBe('plain text')
    })

    it('removes a simple tag pair around text', () => {
        expect(StringTransformer.f('<b>Hello</b>')).toBe('Hello')
    })

    it('removes a simple tag pair but keeps extra spaces around text', () => {
        expect(StringTransformer.f(' <b>Hello</b>   ')).toBe(' Hello  ')
    })

    it('removes a simple tag pair but keeps extra spaces inside text', () => {
        expect(StringTransformer.f('<b> Hello   </b>')).toBe(' Hello   ')
    })

    it('removes tags with attributes and preserves entities', () => {
        expect(StringTransformer.f('<p class="x">A &amp; B</p>')).toBe('A &amp; B')
    })

    it('keeps text before an opening tag', () => {
        expect(StringTransformer.f('before <b>bold</b>')).toBe('before bold')
    })

    it('skips the character immediately after a closing tag', () => {
        expect(StringTransformer.f('before <b>bold</b> after')).toBe('before boldafter')
    })

    it('does not correctly handle adjacent tag pairs', () => {
        expect(StringTransformer.f('<a>one</a><b>two</b>')).toBe('oneb>two')
    })

    it('returns empty output for an incomplete opening tag', () => {
        expect(StringTransformer.f('<unfinished')).toBe('')
    })

    it('drops the remainder after a less-than sign without a closing angle bracket', () => {
        expect(StringTransformer.f('a < b')).toBe('a ')
    })

    it('treats a slash in a self-closing tag as a closing tag', () => {
        expect(StringTransformer.f('<br/>X')).toBe('')
    })
})
