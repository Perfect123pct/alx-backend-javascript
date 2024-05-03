const calculateNumber = require('./1-calcul.js');
const assert = require('assert');

describe('calculateNumber', () => {
  describe('when type is SUM', () => {
    it('should return 6 when a = 1.4 and b = 4.5', () => {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('when type is SUBTRACT', () => {
    it('should return -4 when a = 1.4 and b = 4.5', () => {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('when type is DIVIDE', () => {
    it('should return 0.2 when a = 1.4 and b = 4.5', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should return "Error" when a = 1.4 and b = 0', () => {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});

