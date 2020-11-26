import { fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import useAllKeyPress from './useAllKeyPress';

/**
 * Testing parts of useAllKeypress Hook
 * 1. Hook initialisation
 * 2. Hook user interaction
 * 3. Hook output
 * 4. Miscellaneous
 */

// NOTES: 'test' and 'it' are the same it's about readability.

describe('Hook initialisation ', () => {
  it('throws an error without an argument', () => {
    const { result } = renderHook(() => useAllKeyPress());

    expect(result.error).toEqual(
      Error('No object parameter found use: {userKeys: ... } ')
    );
  });
  it('throws an error with an empty - {}', () => {
    const { result } = renderHook(() => useAllKeyPress({}));

    expect(result.error).toEqual(
      Error('No object parameter found use: {userKeys: ... } ')
    );
  });
  it(`throws an error with an unrecognised value - { foo: 'bar'}'`, () => {
    const { result } = renderHook(() => useAllKeyPress({ foo: 'bar' }));

    expect(result.error).toEqual(
      Error(
        "Invalid 'userKeys' property: must be {userKeys:'KEY'} or {userKeys:[KEY, ...]}"
      )
    );
  });
  it('throws error if value is an integer - {useKeys: 999}', () => {
    const { result } = renderHook(() => useAllKeyPress({ userKeys: 8 }));

    expect(result.error).toEqual(
      Error(
        "Invalid 'userKeys' property: must be {userKeys:'KEY'} or {userKeys:[KEY, ...]}"
      )
    );
  });
});
describe('Hook user interaction', () => {
  test('that the key pressed is (ArrowUp key)', () => {
    const { result } = renderHook(() =>
      useAllKeyPress({ userKeys: 'ArrowUp' })
    );

    // value should be false
    expect(result.current).toBe(false);

    // simulate the key been pressed - action to be taken
    act(() => {
      fireEvent.keyDown(window.document, { key: 'ArrowUp', code: 'ArrowUp' });
    });

    // value should be true
    expect(result.current).toBe(true);
  });
  test('that the keys pressed are (n + u keys)', () => {
    const { result } = renderHook(() =>
      useAllKeyPress({ userKeys: ['n', 'u'] })
    );

    // value should be false
    expect(result.current).toBe(false);

    // simulate the keys being pressed - action to be taken
    act(() => {
      fireEvent.keyDown(window.document, { key: 'u', code: 'KeyU' });
    });

    act(() => {
      fireEvent.keyDown(window.document, { key: 'n', code: 'KeyN' });
    });

    expect(result.current).toBe(true);
  });
  test(`that the keys are required to be pressed in order and return 'true'`, () => {
    const { result } = renderHook(() =>
      useAllKeyPress({ userKeys: ['m', 'e', 'l'], order: true })
    );

    // value should be false
    expect(result.current).toBe(false);

    // simulate the keys being pressed - action to be taken
    act(() => {
      fireEvent.keyDown(window.document, { key: 'm', code: 'KeyM' });
    });

    act(() => {
      fireEvent.keyDown(window.document, { key: 'e', code: 'KeyE' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'l', code: 'KeyL' });
    });

    expect(result.current).toBe(true);
  });
  test(`that the keys are pressed out of order and return 'false'`, () => {
    const { result } = renderHook(() =>
      useAllKeyPress({ userKeys: ['m', 'e', 'l'], order: true })
    );

    // value should be false
    expect(result.current).toBe(false);

    // simulate the keys being pressed - action to be taken
    act(() => {
      fireEvent.keyDown(window.document, { key: 'e', code: 'KeyE' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'l', code: 'KeyL' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'm', code: 'KeyM' });
    });

    expect(result.current).toBe(false);
  });
  test(`that the keys are pressed in any order and return 'true'`, () => {
    const { result } = renderHook(() =>
      useAllKeyPress({ userKeys: ['m', 'e', 'l'] })
    );

    // simulate the keys being pressed - action to be taken
    act(() => {
      fireEvent.keyDown(window.document, { key: 'e', code: 'KeyE' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'l', code: 'KeyL' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'm', code: 'KeyM' });
    });

    expect(result.current).toBe(true);

    act(() => {
      fireEvent.keyDown(window.document, { key: 'e', code: 'KeyE' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'm', code: 'KeyM' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'l', code: 'KeyL' });
    });

    expect(result.current).toBe(true);

    act(() => {
      fireEvent.keyDown(window.document, { key: 'm', code: 'KeyM' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'e', code: 'KeyE' });
    });
    act(() => {
      fireEvent.keyDown(window.document, { key: 'l', code: 'KeyL' });
    });

    expect(result.current).toBe(true);
  });
  test(`the detection of key pressed on a selected element (ArrowUp + input)`, () => {
    // create Element that will used as a reference
    const ref = { current: document.createElement('input') };

    const { result } = renderHook(() =>
      useAllKeyPress({ userKeys: 'ArrowDown', ref: ref })
    );

    // value should be false
    expect(result.current).toBe(false);

    // simulate the key been pressed with selected element - action to be taken
    act(() => {
      fireEvent.keyDown(ref.current, { key: 'ArrowDown', code: 'ArrowDown' });
    });

    // value should be true
    expect(result.current).toBe(true);
  });
});
describe('Hook output', ()=>{
    test(`that the pressed key returns 'false' when it is released`, ()=>{
        const { result } = renderHook(() => useAllKeyPress({ userKeys: 'd' }));
        // simulate the keys being pressed - action to be taken
        act(() => {
            fireEvent.keyDown(window.document, { key: 'd', code: 'KeyD' });
        });
        act(() => {
            fireEvent.keyUp(window.document, { key: 'd', code: 'KeyD' });
        });

        expect(result.current).toBe(false);
    })
    test(`that the pressed keys return 'false' when they are released`, ()=>{
        const { result } = renderHook(() => useAllKeyPress({ userKeys: ['n','o'] }));
        // simulate the keys being pressed - action to be taken
        act(() => {
            fireEvent.keyDown(window.document, { key: 'o', code: 'KeyO' });
        });
        act(() => {
            fireEvent.keyDown(window.document, { key: 'n', code: 'KeyN' });
        });

        expect(result.current).toBe(true);

        act(() => {
            fireEvent.keyUp(window.document, { key: 'n', code: 'KeyN' });
        });
        act(() => {
            fireEvent.keyUp(window.document, { key: 'o', code: 'KeyO' });
        });

        expect(result.current).toBe(false);
    })
})
describe('miscellaneous',()=>{
    test(`that a single array value should work like a string value in 'useKeys' prop`, () => {
        const { result } = renderHook(() => useAllKeyPress({ userKeys: ['a'] }));

        // value should be false
        expect(result.current).toBe(false);

        // simulate the keys being pressed - action to be taken
        act(() => {
            fireEvent.keyDown(window.document, { key: 'a', code: 'KeyA' });
        });
        // value should be false
        expect(result.current).toBe(true);
    });
})