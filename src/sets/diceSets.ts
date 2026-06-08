import { DiceSet } from "../types/DiceSet";
import { DiceStyle } from "../types/DiceStyle";
import { Die } from "../types/Die";
import { DiceType} from "../types/DiceType";

import * as dsd6Previews from "../previews/dsd6";

const standardPreviews: Partial<Record<DiceStyle, string>> = {
  DSD6: dsd6Previews.D6,
  DSD6_RED: dsd6Previews.D6,
};

function createStandardSet(style: DiceStyle): DiceSet {
  let id: string;
  let diceType: DiceType;
  switch (style) {
    case "DSD6":
      id = "DSD6_STANDARD";
      diceType = "D6";
      break;
    default:
      id = "DSD6_STANDARD";
      diceType = "D6";
  }

  if (style === "DSD6") {
    return {
      id,
      name: `${style.toLowerCase()} dice`,
      dice: [
        { id: `${id}_D6_WHITE`, type: diceType, style: "DSD6" },
        { id: `${id}_D6_RED`, type: diceType, style: "DSD6_RED" as DiceStyle },
      ],
      previewImage: standardPreviews[style] || dsd6Previews.D6,
    };
  }

  return {
    id,
    name: `${style.toLowerCase()} dice`,
    dice: [{ id: `${id}_${diceType}`, type: diceType, style }],
    previewImage: standardPreviews[style] || dsd6Previews.D6,
  };
}

const standardSets: DiceSet[] = [createStandardSet("DSD6")];

export const diceSets: DiceSet[] = [...standardSets];
