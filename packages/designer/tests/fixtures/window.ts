Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation(query => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

Object.defineProperty(window, 'React', {
  writable: true,
  value: {},
});

window.scrollTo = () => {};
window.console.warn = () => {};
const originalLog = window.console.log;
window.console.log = (...args) => {
  // suppress boring warnings
  if (args[0]?.includes && args[0].includes('@babel/plugin-proposal-private-property-in-object')) return;
  originalLog.apply(window.console, args);
};
window.React = window.React || {};
