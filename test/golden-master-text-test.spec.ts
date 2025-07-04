import { Item, GildedRose } from '../app/gilded-rose';
import { expect } from "chai";

describe("Gilded Rose", () => {

    it("Should not decrease Quality for Sulfuras",() => {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(0);
        expect(gildedRose.items[0].quality).to.equal(80);
    });
})
