import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../src/store/store';
import RealTimePreview from '../src/components/RealTimePreview';

test('renders resume preview with data', () => {
  render(
    <Provider store={store}>
      <RealTimePreview />
    </Provider>
  );
  expect(screen.getByText('Live Preview')).toBeInTheDocument();
});