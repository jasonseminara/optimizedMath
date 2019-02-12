const { optimizedMath, getMask } = require('../');

describe('optimizedMath', () => {
  describe('#getMask', () => {
    it('should return 3 for a number that is divisible by 2 AND 3 [12]', () => {
      const expected = 3;
      expect(getMask(12)).toBe(expected);
    });

    it('should return 3 for a number that is divisible by 2 AND 3 [24]', () => {
      const expected = 3;
      expect(getMask(24)).toBe(expected);
    });

    it('should return 3 for a number that is divisible by 2 AND 3 [90]', () => {
      const expected = 3;
      expect(getMask(90)).toBe(expected);
    });

    it('should return 2 for a number that is divisible 3 [99]', () => {
      const expected = 2;
      expect(getMask(99)).toBe(expected);
    });

    it('should return the right code for each number', () => {
      const actual = Array(200).fill(0).map((n, i) => {
        if (i === 0) return undefined;
        return getMask(i);
      });
      expect(actual).toMatchSnapshot();
    });
  });

  describe('#optimizedMath', () => {
    console.log = jest.fn();
    it('should match the whole run and output', () => {
      optimizedMath(100);
      const actual = console.log.mock.calls.map(([call]) => call);
      expect(actual).toMatchSnapshot();
    });
  });
});
