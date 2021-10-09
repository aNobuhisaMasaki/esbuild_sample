import hello from '@/hello';

test('hello returns hello', () => {
  expect(hello([1, 2, 3])).toBe('hello');
});
