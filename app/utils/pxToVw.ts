import { setConfig, convertPxToVw } from '@stellaround/px-to-vw-converter';

setConfig({
  viewportWidth: 1280,
  precision: 3,
});

export const pxToVw = (px: number | string): string => {
  const pxValue = typeof px === 'string' ? parseFloat(px) : px;
  const result = convertPxToVw(pxValue);
  return result || '0vw';
};

