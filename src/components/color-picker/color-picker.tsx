"use client";

import { useState, useMemo } from "react";
import { HexColorPicker } from "react-colorful";
import Color from "color";

import { useControllable } from "@/hooks/use-controllable";
import { fallbackColor } from "@/const/colors";

import { InputChannel } from "./input-channel";
import { colorModes, resolveValidColor, type ColorMode } from "./utils";
import classes from "./color-picker.styled";

interface Iprops {
  sourceColor?: string;
  onChange?: (value: string) => void;
}

export function ColorPicker({ sourceColor, onChange }: Iprops) {
  const [color, setColor] = useControllable(fallbackColor, sourceColor, onChange);
  const [mode, setMode] = useState<keyof ColorMode>("rgb");
  const modesList = useMemo(() => Object.keys(colorModes), []);
  const channels = useMemo(
    () => colorModes[mode].converter(resolveValidColor(color)).map((v) => Math.floor(v)),
    [mode, color],
  );

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
    <div className={classes.root}>
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
      <HexColorPicker className={classes.picker} color={color} onChange={handlePickerChange} />
      <div className={classes.channels}>
        {channels.map((value, idx) => {
          const colorMode = colorModes[mode];

          return (
            <InputChannel
              key={`${value}-${colorMode.channels[idx].label}`}
              label={colorMode.channels[idx].label}
              max={colorMode.channels[idx].max}
              min={colorMode.channels[idx].min}
              value={value.toString()}
              onChange={handleChannelChange(idx)}
            />
          );
        })}
      </div>
    </div>
  );
}
