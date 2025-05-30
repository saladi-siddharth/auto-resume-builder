import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import ResumeForm from '../src/components/ResumeForm';

test('renders resume form', () => {
  render(
    <Provider store={store}>
      <ResumeForm resumeId="mock-id" />
    </Provider>
  );
  expect(screen.getByText('Resume Editor')).toBeInTheDocument();
});