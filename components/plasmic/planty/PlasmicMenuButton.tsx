// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ozcq8GxerrF1WYaqjsW34y
// Component: V-Evw1O_93TrWQ

import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/react-web/lib/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";

import "@plasmicapp/react-web/lib/plasmic.css";

import plasmic_library_plasmic_color_type_css from "../library_plasmic_color_type/plasmic_library_plasmic_color_type.module.css"; // plasmic-import: seaQhLVS4bbjiGvJJrRwyL/projectcss
import projectcss from "./plasmic_planty.module.css"; // plasmic-import: ozcq8GxerrF1WYaqjsW34y/projectcss
import sty from "./PlasmicMenuButton.module.css"; // plasmic-import: V-Evw1O_93TrWQ/css

import BarsIcon from "./icons/PlasmicIcon__Bars"; // plasmic-import: Y7F4yucfRRVxUJ/icon
import TimesIcon from "./icons/PlasmicIcon__Times"; // plasmic-import: Gqp0Q7Cd2pEvEi/icon

export type PlasmicMenuButton__VariantMembers = {
  expanded: "expanded";
};
export type PlasmicMenuButton__VariantsArgs = {
  expanded?: SingleBooleanChoiceArg<"expanded">;
};
type VariantPropType = keyof PlasmicMenuButton__VariantsArgs;
export const PlasmicMenuButton__VariantProps = new Array<VariantPropType>(
  "expanded"
);

export type PlasmicMenuButton__ArgsType = {
  href?: string;
};
type ArgPropType = keyof PlasmicMenuButton__ArgsType;
export const PlasmicMenuButton__ArgProps = new Array<ArgPropType>("href");

export type PlasmicMenuButton__OverridesType = {
  root?: p.Flex<"button">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultMenuButtonProps {
  href?: string;
  expanded?: SingleBooleanChoiceArg<"expanded">;
  className?: string;
}

const __wrapUserFunction =
  globalThis.__PlasmicWrapUserFunction ?? ((loc, fn) => fn());
const __wrapUserPromise =
  globalThis.__PlasmicWrapUserPromise ??
  (async (loc, promise) => {
    return await promise;
  });

function useNextRouter() {
  try {
    return useRouter();
  } catch {}
  return undefined;
}

function PlasmicMenuButton__RenderFunc(props: {
  variants: PlasmicMenuButton__VariantsArgs;
  args: PlasmicMenuButton__ArgsType;
  overrides: PlasmicMenuButton__OverridesType;
  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;
  const __nextRouter = useNextRouter();

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(
    () =>
      Object.assign(
        {
          href: "#" as const
        },
        props.args
      ),
    [props.args]
  );
  const $props = {
    ...args,
    ...variants
  };
  const refsRef = React.useRef({});
  const $refs = refsRef.current;

  const currentUser = p.useCurrentUser?.() || {};
  const [$queries, setDollarQueries] = React.useState({});
  const stateSpecs = React.useMemo(
    () => [
      {
        path: "expanded",
        type: "private",
        variableType: "variant",
        initFunc: ({ $props, $state, $queries, $ctx }) => $props.expanded
      }
    ],
    [$props, $ctx]
  );
  const $state = p.useDollarState(stateSpecs, { $props, $ctx, $queries });

  return (
    <button
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.button,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_mixins,
        projectcss.plasmic_tokens,
        plasmic_library_plasmic_color_type_css.plasmic_tokens,
        sty.root
      )}
    >
      <div
        data-plasmic-name={"freeBox"}
        data-plasmic-override={overrides.freeBox}
        className={classNames(projectcss.all, sty.freeBox, {
          [sty.freeBoxexpanded]: hasVariant($state, "expanded", "expanded")
        })}
      >
        {(hasVariant($state, "expanded", "expanded") ? true : true) ? (
          <BarsIcon
            className={classNames(projectcss.all, sty.svg__eyK, {
              [sty.svgexpanded__eyKqiNkc]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
            role={"img"}
          />
        ) : null}
        {(hasVariant($state, "expanded", "expanded") ? true : true) ? (
          <TimesIcon
            className={classNames(projectcss.all, sty.svg__fevIs, {
              [sty.svgexpanded__fevIsqiNkc]: hasVariant(
                $state,
                "expanded",
                "expanded"
              )
            })}
            role={"img"}
          />
        ) : null}
      </div>
    </button>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  (typeof PlasmicDescendants)[T][number];
type NodeDefaultElementType = {
  root: "button";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicMenuButton__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicMenuButton__VariantsArgs;
    args?: PlasmicMenuButton__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicMenuButton__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicMenuButton__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicMenuButton__ArgProps,
          internalVariantPropNames: PlasmicMenuButton__VariantProps
        }),
      [props, nodeName]
    );
    return PlasmicMenuButton__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicMenuButton";
  } else {
    func.displayName = `PlasmicMenuButton.${nodeName}`;
  }
  return func;
}

export const PlasmicMenuButton = Object.assign(
  // Top-level PlasmicMenuButton renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicMenuButton
    internalVariantProps: PlasmicMenuButton__VariantProps,
    internalArgProps: PlasmicMenuButton__ArgProps
  }
);

export default PlasmicMenuButton;
/* prettier-ignore-end */
