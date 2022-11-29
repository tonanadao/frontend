import { render, screen, userEvent } from './test-utils';
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

describe('Main app test', () => {
    it('App is not crashing', async () => {
      render(<TestApp />);
    })

    it('From input exists', async () => {
      render(<TestApp />);
      const inputElementForEvents = screen.getByTestId("from-input");
      expect(inputElementForEvents).toBeInTheDocument();
      const inputElementForQuery = screen.queryByTestId("from-input");
      expect(inputElementForQuery).toHaveValue('');
    })

    it('To input exists', async () => {
      render(<TestApp />);
      const inputElementForEvents = screen.getByTestId("to-input");
      expect(inputElementForEvents).toBeInTheDocument();
      const inputElementForQuery = screen.queryByTestId("to-input");
      expect(inputElementForQuery).toHaveValue('');
    })
})