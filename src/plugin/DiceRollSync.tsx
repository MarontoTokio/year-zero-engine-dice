import OBR from "@owlbear-rodeo/sdk";
import { useEffect, useRef } from "react";
import { useDiceRollStore } from "../dice/store";
import { getDieFromDice } from "../helpers/getDieFromDice";
import { getPluginId } from "./getPluginId";

/** Sync the current dice roll to the plugin */
export function DiceRollSync() {
  useEffect(
    () =>
      useDiceRollStore.subscribe((state) => {
        const metadata: Record<string, unknown> = {
          [getPluginId("roll")]: state.roll,
          [getPluginId("rollThrows")]: state.roll
            ? state.roll.hidden
              ? null
              : state.rollThrows
            : null,
          [getPluginId("rollValues")]: state.roll
            ? state.roll.hidden
              ? null
              : state.rollValues
            : null,
          [getPluginId("rollTransforms")]: state.roll
            ? state.roll.hidden
              ? null
              : state.rollTransforms
            : null,
        };

        OBR.player.setMetadata(metadata);
      }),
    []
  );

  return null;
}
