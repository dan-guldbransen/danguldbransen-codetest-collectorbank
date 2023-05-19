export interface ISliderProps {
  handleCommitChange:
    | ((
        event: Event | React.SyntheticEvent<Element, Event>,
        value: number | number[]
      ) => void)
    | undefined;
  handleSliderChange:
    | ((
        event: Event,
        value: number | number[],
        // Material UI
        // Material UI
        activeThumb: number
      ) => void)
    | undefined;
}
