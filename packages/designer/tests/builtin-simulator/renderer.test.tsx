import { isSimulatorRenderer } from '../../src/builtin-simulator/renderer';
import '../fixtures/window';
import { getMockRenderer } from '../utils';

describe('renderer 测试', () => {
  it('renderer', () => {
    expect(isSimulatorRenderer(getMockRenderer())).toBeTruthy();
  });
});
