export default class StringTransformer {
    public static f(inputString: string): string {
        const output: string[] = []
        let index = 0

        while (index < inputString.length) {
            if (inputString.charAt(index) === '<') {
                index = this.skipTag(inputString, index)
            }

            if (index < inputString.length) {
                output.push(inputString.charAt(index))
            }
            index++
        }

        return output.join('')
    }

    private static skipTag(inputString: string, start: number): number {
        let index = start
        while (
            index < inputString.length &&
            inputString.charAt(index) !== '/' &&
            inputString.charAt(index) !== '>'
        ) {
            index++
        }

        return index + (inputString.charAt(index) === '/' ? 4 : 1)
    }
}
