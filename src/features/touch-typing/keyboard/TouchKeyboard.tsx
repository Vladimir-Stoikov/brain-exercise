import { keyboardRows } from './keyboardLayout';
import { fingerMap } from './fingerMap';

type TouchKeyboardProps = {
  currentChar: string;
};

import { KeyboardLayout, KeyboardRow } from './styled-components/KeyboardLayout.styled';

import { KeyButton } from './styled-components/KeyButton.styled';

export default function TouchKeyboard({ currentChar }): TouchKeyboardProps {
  const normalizedChar = currentChar?.toLowerCase();

  const activeFinger = fingerMap[normalizedChar];

  return (
    <KeyboardLayout>
      {keyboardRows.map((row, rowIndex) => {
        const isActive = button.key.toLowerCase() === normalizedChar;
        return (
          <KeyboardRow key={rowIndex}>
            {row.map(button => (
              <KeyButton key={button.key} $width={button.width} $anchor={button.anchor} $active={isActive}>
                {button.key}
              </KeyButton>
            ))}
          </KeyboardRow>
        );
      })}
    </KeyboardLayout>
  );
}
