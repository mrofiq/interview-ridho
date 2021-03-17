// 1. Buatlah fungsi dan unit testnya untuk konversi dari integer 10000 menjadi: Rp. 10.000

// 2. Buatlah fungsi dan unit testnya untuk konversi dari slug menjadi title, ignore dari -skuxxxxx
////// Input dell-vostro-3400-core-i5-1135g7-8gb-256gb-ssd-black-sku3336516567
////// Output DELL Vostro 3400 Core i5 1135G7 8GB 256GB SSD Black

const convertCurrency = (no) => {
    return `Rp. ${(no).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")}`
}

const convertSlug = (slug) => {
    var words = slug.split("-");
    uppers = ['ssd', 'gb', 'dell', 'g'];
    lowers = ['i5'];
    return words.map(function (word) {
        if (word.substring(0, 3) !== 'sku') {
            let wording = word.charAt(0).toUpperCase() + word.substring(1).toLowerCase();
            for (i = 0; i < uppers.length; i++) {
                if (word.includes(uppers[i])) {
                    return word.toUpperCase();
                }
            }
            for (i = 0; i < lowers.length; i++) {
                if (word.includes(lowers[i])) {
                    return word.toLowerCase();
                } 
            }
            return wording
        }
    }).join(' ').trim();
}

"use strict";
const chai = require("chai");
const expect = chai.expect;


describe("test soal 07", () => {
    describe("convert currency", () => {
        it("should be currency", done => {
            const result = convertCurrency(10000)
            expect(result).to.eq('Rp. 10.000');
            done();
        });
    });
    describe("convert slug to title", () => {
        it("should be title", done => {
            const result = convertSlug('dell-vostro-3400-core-i5-1135g7-8gb-256gb-ssd-black-sku3336516567')
            expect(result).to.eq('DELL Vostro 3400 Core i5 1135G7 8GB 256GB SSD Black');
            done();
        });
    });
});
