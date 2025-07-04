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
    it("Should decrease Quality",() => {
        const gildedRose = new GildedRose([ new Item('Something', 15, 35) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(14);
        expect(gildedRose.items[0].quality).to.equal(34);
    });
    it("Should not decrease Quality<0",() => {
        const gildedRose = new GildedRose([ new Item('Something', 0, 0) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(-1);
        expect(gildedRose.items[0].quality).to.equal(0);
    });
    it("Should increase Quality twice for Backstage if sellin<11",() => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 10, 32) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(9);
        expect(gildedRose.items[0].quality).to.equal(34);
    });
    it("Should increase Quality once for Backstage if sellin>=11",() => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', 11, 32) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(10);
        expect(gildedRose.items[0].quality).to.equal(33);
    });
    it("Should set Quality=0 once for Backstage if sellin<0",() => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 32) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(-2);
        expect(gildedRose.items[0].quality).to.equal(0);
    });
    it("Should set Quality=0 once for Backstage if sellin<0",() => {
        const gildedRose = new GildedRose([ new Item('Backstage passes to a TAFKAL80ETC concert', -1, 60) ]);
        gildedRose.updateQuality();
        expect(gildedRose.items[0].sellIn).to.equal(-2);
        expect(gildedRose.items[0].quality).to.equal(0);
    });


})
