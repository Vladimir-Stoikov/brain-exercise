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

  const activeFinger = fingerMap[normalizedChar];

  return (
    <KeyboardLayout>
      {keyboardRows.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex}>
          {row.map((button, buttonIndex) => {
            const isLetterActive = button.key.toLowerCase() === normalizedChar;
            const isShiftKey = button.key === 'Shift';

            const isLeftShift = isShiftKey && buttonIndex === 0;

            const isRightShift = isShiftKey && buttonIndex === row.length - 1;

            const shouldUseLeftShift = shouldHighlightShift && activeFinger?.hand === 'R';

            const shouldUseRightShift = shouldHighlightShift && activeFinger?.hand === 'L';

            const isCorrectShift = (isLeftShift && shouldUseLeftShift) || (isRightShift && shouldUseRightShift);

            const isSpaceKey = button.key === 'Space';

            const isActive = isLetterActive || isCorrectShift || (shouldHighlightSpace && isSpaceKey);
            return (
              <KeyButton key={button.key} $width={button.width} $anchor={button.anchor} $active={isActive}>
                {button.key}
                {isActive && <small>{isCorrectShift ? (activeFinger?.hand === 'L' ? 'R1' : 'L1') : `${activeFinger?.hand}${activeFinger?.finger}`}</small>}
              </KeyButton>
            );
          })}
        </KeyboardRow>
      ))}
    </KeyboardLayout>
  );
}
