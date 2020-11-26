import React from 'react';
import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event'
import App from './App';

//the use of 'screen' means that we can reduce using
// destructing methods in some cases

describe('<App />', () => {
  it('Renders the App component ', () => {
    const { asFragment } = render(<App />);
    expect(asFragment(<App />)).toMatchSnapshot();
  });
  it('Placeholder text is rendered', () => {
    render(<App />);

    // look for placeholder text on initialisation
    expect(screen.getByPlaceholderText('todo...')).toBeInTheDocument();
  });
  it('Press the Add todo button', () => {
    render(<App />);

    user.click(screen.getByRole('button', { name: 'Add todo' }));

    // pressing the button alone will not add a todo without a text value
    expect(screen.getByLabelText('Add todo')).toBeEmpty();
  });
  it('Add a new todo', () => {
    render(<App />);

    const Input = screen.getByLabelText('Add todo');
    user.type(Input,  'hello world' );
    expect(Input).toHaveValue('hello world');

    const AddTodo = screen.getByRole('button', { name: 'Add todo' });
    user.click(AddTodo);

    // checks to see if the text is visible in the ID region
    expect(screen.getByTestId('theList')).toHaveTextContent('hello world');
  });
  it('Should have expected Todo output in the DOM', () => {
    render(<App />);

    const Input = screen.getByLabelText('Add todo');
    user.type(Input, 'hello world' );
    expect(Input).toHaveValue('hello world');

    const todoResult = `<div class="">`+
                          `<label class="checkbox">`+
                            `<input type="checkbox">`+
                          `</label>`+
                            `<div class="strike">`+
                              `hello world`+
                            `</div>`+
                            `<button>Remove</button>`+
                            `<button>Edit</button>`+
                        `</div>`;

    const AddTodo = screen.getByRole('button', { name: 'Add todo' });
    user.click(AddTodo);

    // Ensure that the DOM element matched the prescribed above
    expect(screen.getByTestId('theList').innerHTML).toBe(todoResult);

  });
  it('Remove a todo', () => {
    render(<App />);



    const Input = screen.getByLabelText('Add todo');

    const AddTodo = screen.getByRole('button', { name: 'Add todo' });

    // to mimic a user in the browser use 'user'
    user.type(Input, 'hello world')
    expect(Input).toHaveValue('hello world')

    user.click(AddTodo);
    expect(screen.getByTestId('theList')).toHaveTextContent('hello world');

    const RemoveTodo = screen.getByRole('button', {name: 'Remove'});
    user.click(RemoveTodo);
    expect(screen.getByTestId('theList')).toBeEmpty('');


  });
  it('Edit a todo', () => {
    render(<App/>)

    const Input = screen.getByLabelText('Add todo');
    const AddTodo = screen.getByRole('button', { name: 'Add todo' });

    // to mimic a user in the browser use 'user'
    user.type(Input, 'hello world')
    expect(Input).toHaveValue('hello world')

    user.click(AddTodo);
    expect(screen.getByTestId('theList')).toHaveTextContent('hello world');

    const Edit = screen.getByRole('button', { name: 'Edit'})
    user.click(Edit)
    expect(Input).toHaveValue('hello world')

    user.type(Input, 'hello universe')
    const EditTodo = screen.getByRole('button', {name: 'Edit todo'})
    user.click(EditTodo)
    expect(screen.getByTestId('theList')).toHaveTextContent('hello universe');


  })
  it('Todos Left', () => {
    render(<App/>)

    const Input = screen.getByLabelText('Add todo');
    const AddTodo = screen.getByRole('button', { name: 'Add todo' });


    user.type(Input, 'hello people')
    user.click(AddTodo);

    // todos left is 1
    expect(screen.getByTestId('todosNumber')).toHaveTextContent('1');
    // items not completed
    expect(screen.getByText('Items not completed: 1')).toBeInTheDocument();
  });
  it('Toggle all the todos complete', () => {
    render(<App/>)

    const Input = screen.getByLabelText('Add todo');
    const AddTodo = screen.getByRole('button', { name: 'Add todo' });


    user.type(Input, 'hello people')
    user.click(AddTodo);

    const ToggleAllComplete = screen.getByRole('button', { name: 'Toggle all complete: true' });
    user.click(ToggleAllComplete)

    expect(screen.getByText('Items completed: 1')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle all complete: false' })).toBeInTheDocument();

    screen.debug();
  });
  it('Remove all the todos complete', () => {
    render(<App/>)

    const Input = screen.getByLabelText('Add todo');
    const AddTodo = screen.getByRole('button', { name: 'Add todo' });


    user.type(Input, 'hello people')
    user.click(AddTodo);

    const ToggleAllComplete = screen.getByRole('button', { name: 'Toggle all complete: true' });
    user.click(ToggleAllComplete)

    const RemoveAllComplete = screen.getByRole('button', { name: 'remove completed' });
    user.click(RemoveAllComplete)

    expect(screen.getByText('Items completed: 0')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Toggle all complete: false' })).toBeInTheDocument();

    screen.debug();
  });
});


