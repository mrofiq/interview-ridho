// buatlah test dari: 01soalsatu.js & 02soaldua.js

"use strict";
const chai = require("chai");
const expect = chai.expect;
var soal01 = require('./01soalsatu');
var soal02 = require('./02soaldua');

describe("test soal 01", () => {
    describe("grouping", () => {
        it("should grouping : siswa", done => {
            const result = soal01.grouping('siswa')
            result.forEach((el) => {
                expect(el.group).to.eq("siswa");
            });
            done();
        });
    });
});


describe("test soal 02", () => {
    describe("output 1", () => {
        it("should be output 1 - satu\n2 - dua\n3 - tiga\n", done => {
            const result = soal02.output1()
            expect(result).to.eq('1 - satu\n2 - dua\n3 - tiga\n');
            done();
        });
    });
    describe("output 2 satu level array", () => {
        it("should be output [1, 3, 4, 6, 7, 8]", done => {
            const result = soal02.output2()
            expect(result).to.eql([1, 3, 4, 6, 7, 8]);
            done();
        });
    });
    describe("output 3 empat value pertama", () => {
        it("should be output [1, 3, 4, 6]", done => {
            const result = soal02.output3(4)
            expect(result).to.eql([1, 3, 4, 6]);
            done();
        });
    });
    describe("output 4 dua value terakhir", () => {
        it("should be output [7, 8]", done => {
            const result = soal02.output4(2)
            expect(result).to.eql([7, 8]);
            done();
        });
    });
    describe("output 5 uniq value", () => {
        it("should be output [1, 2, 4, 5, 6, 3, 7]", done => {
            const result = soal02.output5()
            expect(result).to.eql([1, 2, 4, 5, 6, 3, 7]);
            done();
        });
    });
});

// Buat test ini benar / pass
