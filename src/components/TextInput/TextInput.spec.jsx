import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} value={'testando'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input.value).toBe('testando');
  });
  it('should call handleChange function on each key pressed', () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} value={'content'} />);

    const input = screen.getByPlaceholderText(/type your search/i);
    const valueContent = 'content';

    userEvent.type(input, valueContent);
    expect(input.value).toBe(valueContent);
    expect(fn).toHaveBeenCalledTimes(valueContent.length);
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<TextInput onChange={fn} value={'testando'} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
