import { keyboardRows } from './keyboardLayout';
import { fingerMap } from './fingerMap';

import { KeyboardLayout, KeyboardRow } from './styled-components/KeyboardLayout.styled';
import { KeyButton } from './styled-components/KeyButton.styled';

type TouchKeyboardProps = {
  currentChar: string;
};

export default function TouchKeyboard({ currentChar }: TouchKeyboardProps) {
  const normalizedChar = currentChar?.toLowerCase();

  return (
    <KeyboardLayout>
      {keyboardRows.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex}>
          {row.map(button => {
            const isActive = button.key.toLowerCase() === normalizedChar;
            const activeFinger = fingerMap[normalizedChar];
            return (
              <KeyButton key={button.key} $width={button.width} $anchor={button.anchor} $active={isActive}>
                {button.key}
                {isActive && <small>{activeFinger}</small>}
              </KeyButton>
            );
          })}
        </KeyboardRow>
      ))}
    </KeyboardLayout>
  );
}
