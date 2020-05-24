describe('load-inputs module test suite', () => {
  let loadInputs;
  beforeEach(() => {
    loadInputs = require('../load-inputs');
    process.env = {};
  });
  describe('loadInputs', () => {
    test('Variables in env, should return valid inputs', () => {
      // Given
      process.env = {
        INPUT_VERSION: 'v1.33.7',
        OTHER_VARIABLE: 'other-variable'
      };
      // When
      const result = loadInputs();
      // Then
      expect(result).toEqual({
        version: 'v1.33.7'
      });
    });
    test('Variables NOT in env, should return blank variables', () => {
      // Given
      process.env = {};
      // When
      const result = loadInputs();
      // Then
      expect(result).toEqual({
        version: ''
      });
    });
  });
});
