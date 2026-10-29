import { Item } from './gilded_rose'

export abstract class ItemUpdater {
    public static for(item: Item): ItemUpdater {
        switch (item.name) {
            case 'Aged Brie':
                return new BrieUpdater()
            case 'Backstage passes to a TAFKAL80ETC concert':
                return new BackstagePassesUpdater()
            case 'Sulfuras, Hand of Ragnaros':
                return new SulfurasUpdater()
            default:
                return item.name.indexOf('Conjured ') === 0
                    ? new ConjuredUpdater()
                    : new RegularItemUpdater()
        }
    }

    public abstract update(item: Item): void

    protected isPastSellIn(item: Item): boolean {
        return item.sellIn < 0
    }

    protected decreaseSellIn(item: Item): void {
        item.sellIn--
    }

    protected decreaseQuality(item: Item, amount: number = 1): void {
        if (item.quality > 0) {
            item.quality = Math.max(0, item.quality - amount)
        }
    }

    protected increaseQuality(item: Item, amount: number = 1): void {
        if (item.quality < 50) {
            item.quality = Math.min(50, item.quality + amount)
        }
    }
}

class RegularItemUpdater extends ItemUpdater {
    public update(item: Item): void {
        this.decreaseQuality(item)
        this.decreaseSellIn(item)
        if (this.isPastSellIn(item)) {
            this.decreaseQuality(item)
        }
    }
}

class BrieUpdater extends ItemUpdater {
    public update(item: Item): void {
        this.increaseQuality(item)
        this.decreaseSellIn(item)
        if (this.isPastSellIn(item)) {
            this.increaseQuality(item)
        }
    }
}

class BackstagePassesUpdater extends ItemUpdater {
    public update(item: Item): void {
        let increase = 1
        if (item.sellIn < 11) increase++
        if (item.sellIn < 6) increase++
        this.increaseQuality(item, increase)
        this.decreaseSellIn(item)
        if (this.isPastSellIn(item)) {
            item.quality = 0
        }
    }
}

class SulfurasUpdater extends ItemUpdater {
    public update(_item: Item): void {}
}

class ConjuredUpdater extends ItemUpdater {
    public update(item: Item): void {
        this.decreaseQuality(item, 2)
        this.decreaseSellIn(item)
        if (this.isPastSellIn(item)) {
            this.decreaseQuality(item, 2)
        }
    }
}
