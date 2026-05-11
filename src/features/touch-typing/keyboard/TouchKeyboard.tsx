import { keyboardRows } from './keyboardLayout';

import { KeyboardLayout, KeyboardRow } from './styled-components/KeyboardLayout.styled';

import { KeyButton } from './styled-components/KeyButton.styled';

export default function TouchKeyboard() {
  return (
    <KeyboardLayout>
      {keyboardRows.map((row, rowIndex) => (
        <KeyboardRow key={rowIndex}>
          {row.map(button => (
            <KeyButton key={button.key} $width={button.width} $anchor={button.anchor}>
              {button.key}
            </KeyButton>
          ))}
        </KeyboardRow>
      ))}
    </KeyboardLayout>
  );
}
