export const mockConsoleError = vi.fn();
export const mockConsoleWarn = vi.fn();
// const mockConsoleInfo = vi.fn();
console.error = mockConsoleError;
console.warn = mockConsoleWarn;

