export type KeyWidth = 'medium' | 'large' | 'xlarge' | 'space';

export type KeyboardButton = {
  key: string;
  keyCode: string;
  width?: KeyWidth;
  anchor?: boolean;
};

export type KeyButtonProps = {
  $width?: KeyWidth;
  $anchor?: boolean;
  $active?: boolean;
};

