import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio landing content', () => {
  jest.useFakeTimers();
  const { unmount } = render(<App />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /my name is malaika sud/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();

  unmount();
  jest.runOnlyPendingTimers();
  jest.useRealTimers();
});
