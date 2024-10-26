/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
var Rational = /** @class */ (function () {
    function Rational(numerator, denominator) {
        if (denominator === 0) {
            throw new Error("Denominator cannot be zero.");
        }
        this.numerator = numerator;
        this.denominator = denominator;
        this.normalize();
    }
    Rational.prototype.getNumerator = function () {
        return this.numerator;
    };
    Rational.prototype.getDenominator = function () {
        return this.denominator;
    };
    Rational.prototype.normalize = function () {
        var gcd = this.gcd(this.numerator, this.denominator);
        this.numerator /= gcd;
        this.denominator /= gcd;
        if (this.denominator < 0) {
            this.numerator = -this.numerator;
            this.denominator = -this.denominator;
        }
    };
    Rational.prototype.gcd = function (a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    };
    Rational.prototype.isWhole = function () {
        return this.denominator === 1;
    };
    Rational.prototype.isDecimal = function () {
        return this.denominator !== 1;
    };
    Rational.prototype.equals = function (r) {
        return this.numerator === r.getNumerator() && this.denominator === r.getDenominator();
    };
    Rational.parseRational = function (str) {
        var parts = str.split("/");
        if (parts.length !== 2) {
            throw new Error("Invalid format. Expected 'numerator/denominator'.");
        }
        var numerator = parseInt(parts[0]);
        var denominator = parseInt(parts[1]);
        return new Rational(numerator, denominator);
    };
    Rational.prototype.toString = function () {
        return "".concat(this.numerator, "/").concat(this.denominator);
    };
    return Rational;
}());
var r1 = new Rational(4, 6);
console.log(r1.toString());
var r2 = new Rational(2, 3);
console.log(r1.equals(r2));
var r3 = Rational.parseRational("3/4");
console.log(r3.toString());
