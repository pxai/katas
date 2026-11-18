export default function xmasSong (days: number): string {
    const dayLines = [
        "First",
        "Second",
        "Third",
        "Fourth",
        "Fifth",
        "Sixth",
        "Seventh",
        "Eighth",
        "Ninth",
        "Tenth",
        "Eleventh",
        "Twelfth"
    ];

    const openingLines = [
        `On the ${dayLines[days - 1]} day of Christmas,`,
        "My true love gave to me:"
    ];
    const songLines = [
        "Twelve drummers drumming,",
        "Eleven pipers piping,",
        "Ten lords a-leaping,",
        "Nine ladies dancing,",
        "Eight maids a-milking",
        "Seven swans a-swimming",
        "Six geese a-laying",
        "Five golden rings",
        "Four calling birds",
        "Three French hens",
        "Two turtle doves",
        `${(days === 1) ? 'A' : 'And a'} partridge in a pear tree.`,
    ];

    if (days > 0 && days <= 12) {

        return `${openingLines.join('\n')}\n${songLines.slice(12 - days).join('\n')}`;
    }

    return '';
}