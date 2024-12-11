import { transactionManager } from '../../src/transaction-manager';
import { IPublicEnumTransitionType } from '@felce/lowcode-types';

const type = IPublicEnumTransitionType.REPAINT;

describe('TransactionManager', () => {
  let fn1: vi.Mock;
  let fn2: vi.Mock;

  beforeEach(() => {
    fn1 = vi.fn();
    fn2 = vi.fn();
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  test('executeTransaction should emit startTransaction and endTransaction events', () => {
    const startTransactionSpy = vi.spyOn(transactionManager.emitter, 'emit');
    const endTransactionSpy = vi.spyOn(transactionManager.emitter, 'emit');

    transactionManager.executeTransaction(() => {
      // Perform some action within the transaction
    });

    expect(startTransactionSpy).toHaveBeenCalledWith(`[${type}]startTransaction`);
    expect(endTransactionSpy).toHaveBeenCalledWith(`[${type}]endTransaction`);
  });

  test('onStartTransaction should register the provided function for startTransaction event', () => {
    const offSpy = vi.spyOn(transactionManager.emitter, 'off');

    const offFunction = transactionManager.onStartTransaction(fn1);

    expect(transactionManager.emitter.listenerCount(`[${type}]startTransaction`)).toBe(1);
    expect(offSpy).not.toHaveBeenCalled();

    offFunction();

    expect(transactionManager.emitter.listenerCount(`[${type}]startTransaction`)).toBe(0);
    expect(offSpy).toHaveBeenCalledWith(`[${type}]startTransaction`, fn1);
  });

  test('onEndTransaction should register the provided function for endTransaction event', () => {
    const offSpy = vi.spyOn(transactionManager.emitter, 'off');

    const offFunction = transactionManager.onEndTransaction(fn2);

    expect(transactionManager.emitter.listenerCount(`[${type}]endTransaction`)).toBe(1);
    expect(offSpy).not.toHaveBeenCalled();

    offFunction();

    expect(transactionManager.emitter.listenerCount(`[${type}]endTransaction`)).toBe(0);
    expect(offSpy).toHaveBeenCalledWith(`[${type}]endTransaction`, fn2);
  });
});
