"use client";

import { useState, useMemo } from "react";
import { useSetAtom } from "jotai";
import { HexColorPicker } from "react-colorful";
import * as Popover from "@radix-ui/react-popover";
import Color from "color";

import { useControllable } from "@/hooks/use-controllable";
import { startPickingColor, stopPickingColor } from "@/store";

import { InputChannel } from "./input-channel";
import classes from "./popover-color-channels.styled";
import { colorModes, resolveValidColor, type ColorMode } from "./utils";

interface Iprops {
  sourceColor?: string;
  onChange?: (value: string) => void;
}

export function PopoverColorChannels({ sourceColor, onChange }: Iprops) {
  const [color, setColor] = useControllable("#000", sourceColor, onChange);
  const [mode, setMode] = useState<keyof ColorMode>("rgb");
  const modesList = useMemo(() => Object.keys(colorModes), []);
  const channels = useMemo(
    () => colorModes[mode].converter(resolveValidColor(color)).map((v) => Math.floor(v)),
    [mode, color],
  );

  const onMouseDownPicker = useSetAtom(startPickingColor);

  const onMouseUpPicker = useSetAtom(stopPickingColor);

  function updateChannel(
    channels: number[],
    channelMofified: number,
    channelIndexModified: number,
  ) {
    const nextChannels = [...channels];

    nextChannels[channelIndexModified] = channelMofified;

    return nextChannels;
  }

  const handleChannelChange = (index: number) => (value: number | string) => {
    const nextValue = parseInt(value.toString());
    const nextChannels = updateChannel(channels, nextValue, index);
    const resolvedColor = Color(nextChannels, mode).hex();

    setColor(resolvedColor);
  };

  function handleOnClickColorMode(name: keyof ColorMode) {
    setMode(name);
  }

  function handlePickerChange(nextColor: string) {
    setColor(nextColor);
  }

  return (
    <Popover.Portal>
      <Popover.Content
        align="end"
        alignOffset={-16}
        className={classes.popoverContent}
        sideOffset={15}
      >
        <div>
          <div className={classes.colorModes}>
            <span>Color Space</span>
            <select
              aria-label="select color mode"
              className={classes.select}
              value={mode}
              onChange={(e) => handleOnClickColorMode(e.target.value as keyof ColorMode)}
            >
              {modesList.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <HexColorPicker
            className={classes.picker}
            color={color}
            onChange={handlePickerChange}
            onMouseDown={onMouseDownPicker}
            onMouseUp={onMouseUpPicker}
          />
          <div className={classes.channels}>
            {channels.map((value, idx) => {
              const colorMode = colorModes[mode];

              return (
                <InputChannel
                  key={`${value}-${colorMode.channels[idx].label}`}
                  label={colorMode.channels[idx].label}
                  max={colorMode.channels[idx].max}
                  min={colorMode.channels[idx].min}
                  value={value}
                  onChange={handleChannelChange(idx)}
                />
              );
            })}
          </div>
        </div>
      </Popover.Content>
    </Popover.Portal>
  );
}
