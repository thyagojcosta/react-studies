const { render, screen, fireEvent } = require('@testing-library/react');
import { Button } from '.';

describe('<Button />', () => {
  it('should renter the button with the text "Load more"', () => {
    const fn = jest.fn();
    render(<Button disabled={false} onClick={fn} />); //poderia passar o atributo do texto aqui text="Load more"

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeInTheDocument();
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });

    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button disabled={true} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should be disabled when disabled is false', () => {
    const fn = jest.fn();
    render(<Button disabled={false} onClick={fn} />);

    const button = screen.getByRole('button', { name: /load more/i });
    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const fn = jest.fn();
    const { container } = render(<Button disabled={false} onClick={fn} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
