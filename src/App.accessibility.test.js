import { fireEvent, render, screen } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import App from './App';
import { Banner } from './components/Banner';
import { Bottom } from './components/Bottom';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { ExperienceTab } from './components/ExperienceTab';
import { NavBar } from './components/NavBar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';

expect.extend(toHaveNoViolations);

jest.mock('react-multi-carousel', () => function MockCarousel({ children }) {
  return <div>{children}</div>;
});

const expectNoAccessibilityViolations = async (ui) => {
  const view = render(ui);

  try {
    expect(await axe(view.container)).toHaveNoViolations();
  } finally {
    view.unmount();
  }
};

beforeEach(() => {
  jest.spyOn(global, 'setInterval').mockReturnValue(1);
  jest.spyOn(global, 'clearInterval').mockImplementation(() => {});
});

afterEach(() => {
  jest.restoreAllMocks();
});

test('renders the app without automated accessibility violations', async () => {
  await expectNoAccessibilityViolations(<App />);
});

test.each([
  ['navigation', <NavBar />],
  ['banner', <Banner />],
  ['education', <Education />],
  ['skills', <Skills />],
  ['experience', <Experience />],
  [
    'experience tab',
    <ExperienceTab
      job="Example Company"
      role="Frontend Engineer"
      imgU="company-logo.png"
      onSelect={() => {}}
    />,
  ],
  ['projects', <Projects />],
  ['footer', <Bottom />],
])('%s has no automated accessibility violations', async (_, ui) => {
  await expectNoAccessibilityViolations(ui);
});

test.each([
  'Sailing Stone AI',
  'Girls Who Code',
  'CS Bridge',
  'SASE',
  'Tech4Good',
])('experience %s tab has no automated accessibility violations', async (tabName) => {
  const view = render(<Experience />);

  try {
    fireEvent.click(screen.getByRole('tab', { name: tabName }));

    expect(await axe(view.container)).toHaveNoViolations();
  } finally {
    view.unmount();
  }
});
