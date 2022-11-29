import { render } from './test-utils';
import App from '../src/App';
import { describe, it, beforeAll, vi } from 'vitest';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const TestApp = () => {
  return (
    <BrowserRouter>
				<Routes>
					<Route path="/" element={<App />} />
				</Routes>
		</BrowserRouter>
  )
};

beforeAll(() => {
  // @ts-ignore
  Object.defineProperty(window, 'matchMedia', {
    writable: true,
    value: vi.fn().mockImplementation(query => ({
      matches: false,
      media: query,
      onchange: null,
      addListener: vi.fn(), // Deprecated
      removeListener: vi.fn(), // Deprecated
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
      dispatchEvent: vi.fn(),
    })),
  });
});

describe('typescript test suite', () => {
    it('app is not crashing', () => {
      const app = render(<TestApp />);
    })
})