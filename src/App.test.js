import { act, fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { Banner } from './components/Banner';
import { Bottom } from './components/Bottom';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { ExperienceTab } from './components/ExperienceTab';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

jest.mock('react-multi-carousel', () => function MockCarousel({ children }) {
  return <div>{children}</div>;
});

const firstTypewriterTitle = 'A Software Engineer at Sailing Stone AI';

const advanceTimers = (steps, getTimer) => {
  for (let step = 0; step < steps; step += 1) {
    act(() => {
      getTimer()();
    });
  }
};

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the portfolio landing content', () => {
  render(<App />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(
    screen.getByRole('heading', { name: /my name is malaika sud/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();
});

test('renders the navigation component', () => {
  render(<NavBar />);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /home/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /projects/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /contact me/i })).toBeInTheDocument();
});

test('renders the banner component', () => {
  render(<Banner />);

  expect(
    screen.getByRole('heading', { name: /my name is malaika sud/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('img', { name: /malaika sud in graduation regalia/i })
  ).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /contact me/i })).toBeInTheDocument();
});

test('renders the education component', () => {
  render(<Education />);

  expect(screen.getByRole('heading', { name: /education/i })).toBeInTheDocument();
  expect(screen.getByText(/georgia institute of technology/i)).toBeInTheDocument();
  expect(screen.getByText(/university of california, santa cruz/i)).toBeInTheDocument();
});

test('renders the skills component', () => {
  render(<Skills />);

  expect(screen.getByRole('heading', { name: /my skill set/i })).toBeInTheDocument();
  expect(screen.getAllByText('Python').length).toBeGreaterThan(0);
  expect(screen.getAllByText('React').length).toBeGreaterThan(0);
  expect(screen.getAllByText('Database Systems').length).toBeGreaterThan(0);
});

test('renders the experience component', () => {
  render(<Experience />);

  expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
  expect(screen.getByRole('tab', { name: /overview/i })).toBeInTheDocument();
  expect(screen.getByRole('button', { name: /sailing stone ai/i })).toBeInTheDocument();
});

test('renders the experience tab component', () => {
  const onSelect = jest.fn();

  render(
    <ExperienceTab
      job="Example Company"
      role="Frontend Engineer"
      imgU="company-logo.png"
      onSelect={onSelect}
    />
  );

  fireEvent.click(screen.getByRole('button', { name: /example company/i }));

  expect(screen.getByText('Frontend Engineer')).toBeInTheDocument();
  expect(onSelect).toHaveBeenCalledTimes(1);
});

test('renders the projects component', () => {
  render(<Projects />);

  expect(screen.getByRole('heading', { name: /my projects/i })).toBeInTheDocument();
  expect(screen.getByText('HourBank')).toBeInTheDocument();
  expect(
    screen.getByRole('link', { name: /open hourbank on github/i })
  ).toHaveAttribute('href', 'https://github.com/malaika-sud/hourbank');
});

test('renders the footer component', () => {
  render(<Bottom />);

  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  expect(screen.getByText(/website by malaika sud/i)).toBeInTheDocument();
  expect(screen.getByText(/malaika\.sud@gmail\.com/i)).toBeInTheDocument();
});

test('cycles the banner typewriter copy', () => {
  let runTypewriterTick = () => {};
  jest.spyOn(Math, 'random').mockReturnValue(0);
  jest.spyOn(global, 'setInterval').mockImplementation((callback) => {
    runTypewriterTick = callback;
    return 1;
  });
  jest.spyOn(global, 'clearInterval').mockImplementation(() => {});

  render(<Banner />);
  const heading = screen.getByRole('heading', {
    name: /my name is malaika sud/i,
  });

  advanceTimers(firstTypewriterTitle.length, () => runTypewriterTick);
  expect(heading).toHaveTextContent(firstTypewriterTitle);

  advanceTimers(firstTypewriterTitle.length + 10, () => runTypewriterTick);
  expect(heading).toHaveTextContent(/a georgia/i);
});

test('updates the navbar state after scrolling', () => {
  render(<NavBar />);
  const navigation = screen.getByRole('navigation');

  expect(navigation).not.toHaveClass('scrolled');

  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    value: 80,
  });
  fireEvent.scroll(window);

  expect(navigation).toHaveClass('scrolled');

  Object.defineProperty(window, 'scrollY', {
    configurable: true,
    value: 0,
  });
  fireEvent.scroll(window);

  expect(navigation).not.toHaveClass('scrolled');
});

test('opens experience details from overview cards and tabs', () => {
  render(<Experience />);

  expect(screen.getByRole('tab', { name: /overview/i })).toHaveClass('active');

  fireEvent.click(screen.getByRole('button', { name: /stanford cs bridge/i }));

  expect(screen.getByRole('tab', { name: /cs bridge/i })).toHaveClass('active');
  expect(screen.getByText(/june 2021 - july 2021/i)).toBeInTheDocument();

  fireEvent.click(screen.getByRole('tab', { name: /tech4good/i }));

  expect(screen.getByRole('tab', { name: /tech4good/i })).toHaveClass('active');
  expect(screen.getByText(/aug\. 2022 - june 2023/i)).toBeInTheDocument();
});
