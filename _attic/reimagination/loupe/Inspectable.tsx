import type { CSSProperties, KeyboardEvent, MouseEvent, ReactNode } from "react";
import { createElement } from "react";
import type { Testimony } from "../types";
import { useInspect } from "../record/useInspect";

interface InspectableProps {
  /** The HTML tag to render. */
  as?:
    | "div"
    | "p"
    | "span"
    | "figure"
    | "h2"
    | "h3"
    | "li"
    | "section"
    | "dl"
    | "article"
    | "main"
    | "h1";
  /** Unique key — also shown as the testimony's label heading. */
  id: string;
  testimony: Testimony;
  className?: string;
  style?: CSSProperties;
  children?: ReactNode;
  /** Structural testimonies join the tab order; inline ones do not. */
  tabbable?: boolean;
  onClick?: () => void;
}

export function Inspectable({
  as = "div",
  id,
  testimony,
  className,
  style,
  children,
  tabbable = false,
  onClick,
}: InspectableProps) {
  const { ref, handlers } = useInspect({ ...testimony, label: testimony.label ?? id }, id);

  const onKeyDown = (e: KeyboardEvent<HTMLElement>) => {
    if ((e.key === "Enter" || e.key === " ") && tabbable) {
      e.preventDefault();
      handlers.onFocus();
    }
  };

  return createElement(
    as,
    {
      ref,
      id,
      className,
      style,
      tabIndex: tabbable ? 0 : undefined,
      role: tabbable ? "button" : undefined,
      "aria-label": tabbable ? `Inspect: ${testimony.label}` : undefined,
      "data-inspectable": true,
      onFocus: (e) => {
        /* Innermost inspectable wins: block ancestor chapters from overwriting. */
        e.stopPropagation();
        handlers.onFocus();
      },
      onBlur: (e) => {
        /* Moving focus deeper into the same element is not a leave. */
        const next = e.relatedTarget as Node | null;
        const el = ref.current;
        if (el && next && el.contains(next)) return;
        handlers.onBlur();
      },
      onClick: (e: MouseEvent<HTMLElement>) => {
        /* Interactive children speak for themselves; the wrapper stays quiet. */
        const target = e.target as HTMLElement;
        const fromInteractive =
          target !== e.currentTarget &&
          !!target.closest("button, a, input, textarea, select, label");
        if (!fromInteractive) {
          /* Innermost inspectable wins: stop ancestors from overwriting. */
          e.stopPropagation();
          handlers.onClick();
        }
        onClick?.();
      },
      onKeyDown,
    },
    children
  );
}
