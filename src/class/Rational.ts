/**
 * 請參考 human.ts 的語法完成 Rational 類
 */
class Rational {
    private numerator: number;
    private denominator: number;
  
    constructor(numerator: number, denominator: number) {
      if (denominator === 0) {
        throw new Error("Denominator cannot be zero.");
      }
      this.numerator = numerator;
      this.denominator = denominator;
      this.normalize();
    }
  
    getNumerator(): number {
      return this.numerator;
    }
  
    getDenominator(): number {
      return this.denominator;
    }
  
    private normalize(): void {
      const gcd = this.gcd(this.numerator, this.denominator);
      this.numerator /= gcd;
      this.denominator /= gcd;
      if (this.denominator < 0) {
        this.numerator = -this.numerator;
        this.denominator = -this.denominator;
      }
    }
  
    private gcd(a: number, b: number): number {
      return b === 0 ? a : this.gcd(b, a % b);
    }
  
    isWhole(): boolean {
      return this.denominator === 1;
    }
  
    isDecimal(): boolean {
      return this.denominator !== 1;
    }
  
    equals(r: Rational): boolean {
      return this.numerator === r.getNumerator() && this.denominator === r.getDenominator();
    }
  
    static parseRational(str: string): Rational {
      const parts = str.split("/");
      if (parts.length !== 2) {
        throw new Error("Invalid format. Expected 'numerator/denominator'.");
      }
      const numerator = parseInt(parts[0]);
      const denominator = parseInt(parts[1]);
      return new Rational(numerator, denominator);
    }
  
    toString(): string {
      return `${this.numerator}/${this.denominator}`;
    }
  }
  
  const r1 = new Rational(4, 6);
  console.log(r1.toString());
  
  const r2 = new Rational(2, 3);
  console.log(r1.equals(r2));
  
  const r3 = Rational.parseRational("3/4");
  console.log(r3.toString());
  