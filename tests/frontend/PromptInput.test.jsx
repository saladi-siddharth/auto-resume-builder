import { render, screen, fireEvent } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import PromptInput from '../src/components/PromptInput';

test('renders prompt input and triggers generation', () => {
  render(
    <Provider store={store}>
      <PromptInput />
    </Provider>
  );
  const textarea = screen.getByPlaceholderText(/Generate a resume/i);
  fireEvent.change(textarea, { target: { value: 'Test prompt' } });
  expect(textarea).toHaveValue('Test prompt');
  expect(screen.getByText('Generate Resume')).toBeInTheDocument();
});