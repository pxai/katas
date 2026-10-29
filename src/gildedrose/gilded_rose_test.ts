import { GildedRose, Item } from './gilded_rose'

describe('GildedRose item strategies', () => {
    const update = (name: string, sellIn: number, quality: number): Item => {
        const item = new Item(name, sellIn, quality)
        new GildedRose([item]).updateQuality()
        return item
    }

    it('degrades Conjured items twice as fast before the sell date', () => {
        expect(update('Conjured Mana Cake', 3, 10)).toMatchObject({
            sellIn: 2,
            quality: 8
        })
    })

    it('degrades Conjured items four times as fast after the sell date', () => {
        expect(update('Conjured Mana Cake', 0, 10)).toMatchObject({
            sellIn: -1,
            quality: 6
        })
    })

    it('does not let Conjured quality drop below zero', () => {
        expect(update('Conjured Mana Cake', 0, 1).quality).toBe(0)
    })

    it('does not let Aged Brie quality exceed fifty', () => {
        expect(update('Aged Brie', 5, 50).quality).toBe(50)
    })

    it('does not change Sulfuras', () => {
        expect(update('Sulfuras, Hand of Ragnaros', 0, 80)).toMatchObject({
            sellIn: 0,
            quality: 80
        })
    })

    it('drops Backstage passes quality to zero after the concert', () => {
        expect(update('Backstage passes to a TAFKAL80ETC concert', 0, 20).quality).toBe(0)
    })
})
