// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type QuotessvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function QuotessvgIcon(props: QuotessvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M0 14.182L4.571 0h4.953l-3.81 13.29h3.81V24H0v-9.818zm14.476 0L19.048 0H24l-3.81 13.29H24V24h-9.524v-9.818z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default QuotessvgIcon;
/* prettier-ignore-end */
