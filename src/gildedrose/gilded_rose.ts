import { ItemUpdater } from './item_updater'

export class Item {
    public name: string;
    public sellIn: number;
    public quality: number;

    constructor(name: string, sellIn: number, quality: number) {
        this.name = name;
        this.sellIn = sellIn;
        this.quality = quality;
    }
}

export class GildedRose {
    public items: Item[];

    constructor(items: Item[] = []) {
        this.items = items;
    }

    public updateQuality(): Item[] {
        this.items.forEach(item => ItemUpdater.for(item).update(item))
        return this.items;
    }
}
