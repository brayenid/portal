import { describe, expect, it } from 'vitest';
import { addPrefix } from '.';

describe('Add prefix', () => {
  it('should adding http prefix for unprefixed path', () => {
    expect(addPrefix('/upload')).toEqual(process.env.NEXT_PUBLIC_STRAPI_URL + '/upload');
  });

  it('should not adding prefix for prefixed path', () => {
    expect(addPrefix(process.env.NEXT_PUBLIC_STRAPI_URL + '/upload')).toEqual(
      process.env.NEXT_PUBLIC_STRAPI_URL + '/upload'
    );
  });

  it('should not adding prefix for local cases src', () => {
    const src = 'http://localhost:1330/upload';

    expect(addPrefix(src)).toEqual(src);
  });

  it('should not adding prefix for external src', () => {
    const src = 'https://res.cloudinary.com/some/image.jpg';

    expect(addPrefix(src)).toEqual(src);
  });
});
