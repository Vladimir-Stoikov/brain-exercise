import { generateLightColor } from "../../../utility/color";
import type { SchulteCellData, SchulteValue } from "./schulteTypes";

export function generateSchulteGrid(
  values: number[]
): SchulteCellData[] {
  const source = [...values];

  const result: SchulteValue[] = [];

  for (let i = 0; i < values.length; i++) {
    if (i < values.length - 1) {
      result.push(
        source.splice(
          Math.floor(Math.random() * source.length),
          1
        )[0]
      );
    } else {
      const centerIndex = Math.floor(values.length / 2);

      result.splice(centerIndex, 0, '👁');

      result.push(source[0]);
    }
  }

  return result.map(value => ({
    value,
    color: generateLightColor(),
  }));
}