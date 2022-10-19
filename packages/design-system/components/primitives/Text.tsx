import { styled } from '../../styles/stitches.config';

export const Text = styled("p", {
    variants: {
      color: {
        primary: {
          color: "$primary10",
        },
        "neutral-light": {
          color: "$slate8",
        },
        "neutral-medium": {
          color: "$slate10",
        },
        "neutral-strong": {
          color: "$slate12",
        },
      },
      size: {
        "x-small": {
          fontSize: "$x-small",
        },
        small: {
          fontSize: "$small",
        },
        smaller: {
          fontSize: "$smaller",
        },
        medium: {
          fontSize: "$medium",
        },
        larger: {
          fontSize: "$larger",
        },
        large: {
          fontSize: "$large",
        },
        "x-large": {
          fontSize: "$x-large",
        },
      },
      weight: {
        light: {
          fontWeight: "300",
        },
        normal: {
          fontWeight: "400",
        },
        bold: {
          fontWeight: "700",
        },
      },
    },
  
    defaultVariants: {
      color: "neutral-strong",
      size: "medium",
      weight: "normal",
    },
  });
  
