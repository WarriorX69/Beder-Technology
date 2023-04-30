// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type DotSvgrepoComsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function DotSvgrepoComsvgIcon(props: DotSvgrepoComsvgIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 48 48"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"#fff"} fillOpacity={".01"} d={"M0 0h48v48H0z"}></path>

      <path
        d={"M24 33a9 9 0 100-18 9 9 0 000 18z"}
        fill={"#000"}
        stroke={"#000"}
        strokeWidth={"4"}
      ></path>
    </svg>
  );
}

export default DotSvgrepoComsvgIcon;
/* prettier-ignore-end */
