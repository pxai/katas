import { GildedRose, Item } from './gilded_rose';

const NAMES = [
    '+5 Dexterity Vest',
    'Aged Brie',
    'Elixir of the Mongoose',
    'Sulfuras, Hand of Ragnaros',
    'Backstage passes to a TAFKAL80ETC concert',
    'Conjured Mana Cake'
];

const SELL_INS = [-10, -1, 0, 1, 2, 5, 6, 7, 10, 11, 12];
const QUALITIES = [0, 1, 2, 10, 48, 49, 50, 80];

const describeItem = (item: Item): string =>
    `${item.name}, ${item.sellIn}, ${item.quality}`;

describe('GildedRose golden master', () => {
    it('matches the recorded behaviour after a single day', () => {
        const lines: string[] = [];

        for (const name of NAMES) {
            for (const sellIn of SELL_INS) {
                for (const quality of QUALITIES) {
                    const item = new Item(name, sellIn, quality);
                    new GildedRose([item]).updateQuality();
                    lines.push(`${name}, ${sellIn}, ${quality} -> ${describeItem(item)}`);
                }
            }
        }

        expect(lines.join('\n')).toMatchSnapshot();
    });

    it('matches the recorded behaviour over 30 days', () => {
        const items = [
            new Item('+5 Dexterity Vest', 10, 20),
            new Item('Aged Brie', 2, 0),
            new Item('Elixir of the Mongoose', 5, 7),
            new Item('Sulfuras, Hand of Ragnaros', 0, 80),
            new Item('Sulfuras, Hand of Ragnaros', -1, 80),
            new Item('Backstage passes to a TAFKAL80ETC concert', 15, 20),
            new Item('Backstage passes to a TAFKAL80ETC concert', 10, 49),
            new Item('Backstage passes to a TAFKAL80ETC concert', 5, 49),
            new Item('Conjured Mana Cake', 3, 6)
        ];
        const gildedRose = new GildedRose(items);
        const lines: string[] = [];

        for (let day = 0; day <= 30; day++) {
            lines.push(`-------- day ${day} --------`);
            lines.push('name, sellIn, quality');
            items.forEach(item => lines.push(describeItem(item)));
            lines.push('');
            gildedRose.updateQuality();
        }

        expect(lines.join('\n')).toMatchSnapshot();
    });
});
