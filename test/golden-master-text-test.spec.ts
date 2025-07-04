import { Item, GildedRose } from '../app/gilded-rose';
import { expect } from "chai";

describe("Gilded Rose", () => {

    it("Should not increase/decrease Quality for Sulfuras",() => {
        const gildedRose = new GildedRose([ new Item('Sulfuras, Hand of Ragnaros', 0, 80) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(0);
        expect(gildedRose.items[0].quality).to.equal(80);
    });
    it("Should increase Quality for AgedBrie with with Quality<50",() => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 7, 40) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(6);
        expect(gildedRose.items[0].quality).to.equal(41);
    });
    it("Should not increase/decrease for AgedBrie with Quality>50",() => {
        const gildedRose = new GildedRose([ new Item('Aged Brie', 15, 60) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(14);
        expect(gildedRose.items[0].quality).to.equal(60);
    });




})
