import { keyboardRows } from './keyboardLayout';
import { fingerMap } from './fingerMap';

import { KeyboardLayout, KeyboardRow } from './styled-components/KeyboardLayout.styled';
import { KeyButton } from './styled-components/KeyButton.styled';

type TouchKeyboardProps = {
  currentChar: string;
};

export default function TouchKeyboard({ currentChar }: TouchKeyboardProps) {
  const normalizedChar = currentChar?.toLowerCase();
  const isUpperCase = currentChar !== normalizedChar;

  const shouldHighlightShift = isUpperCase;

  const shouldHighlightSpace = currentChar === ' ';

  return (
    <KeyboardLayout>
      {keyboardRows.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex}>
          {row.map(button => {
            const isLetterActive = button.key.toLowerCase() === normalizedChar;

            const isShiftKey = button.key === 'Shift';

            const isSpaceKey = button.key === 'Space';

            const isActive = isLetterActive || (shouldHighlightShift && isShiftKey) || (shouldHighlightSpace && isSpaceKey);

            const activeFinger = fingerMap[normalizedChar];
            return (
              <KeyButton key={button.key} $width={button.width} $anchor={button.anchor} $active={isActive}>
                {button.key}
                {isActive && (
                  <small>
                    {activeFinger?.hand}
                    {activeFinger?.finger}
                  </small>
                )}
              </KeyButton>
            );
          })}
        </KeyboardRow>
      ))}
    </KeyboardLayout>
  );
}
