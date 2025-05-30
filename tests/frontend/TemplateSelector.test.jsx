import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import TemplateSelector from '../src/components/TemplateSelector';

test('renders template selector', () => {
  render(
    <Provider store={store}>
      <TemplateSelector />
    </Provider>
  );
  expect(screen.getByText('Modern')).toBeInTheDocument();
  expect(screen.getByText('Classic')).toBeInTheDocument();
});