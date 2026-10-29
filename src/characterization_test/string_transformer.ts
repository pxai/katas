export default class StringTransformer {
    public static f(inputString: string): string {
        let output = ''

        for (let index = 0; index < inputString.length; index++) {
            if (inputString.charAt(index) === '<') {
                while (
                    index < inputString.length &&
                    inputString.charAt(index) !== '/' &&
                    inputString.charAt(index) !== '>'
                ) {
                    index++
                }

                if (index < inputString.length && inputString.charAt(index) === '/') {
                    index += 4
                } else {
                    index++
                }
            }

            if (index < inputString.length) {
                output += inputString.charAt(index)
            }
        }

        return output
    }
}
