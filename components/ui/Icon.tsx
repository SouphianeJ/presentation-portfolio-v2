"use client";
import * as React from "react";

type IconName =
  | "projects" | "expertise" | "method" | "writings" | "play" | "contact"
  | "arrow-right" | "external" | "code" | "lms" | "xapi" | "scorm"
  | "article" | "tag" | "filter" | "search" | "download" | "phone"
  | "calendar" | "star" | "chart" | "check" | "close" | "warning"
  | "info" | "accessibility" | "gamepad" | "quote" | (string & {});

export default function Icon({
  name,
  className,
  spritePath = "/icons/retro_icons_sprite.svg",
  title
}: {
  name: IconName;
  className?: string;
  spritePath?: string;
  title?: string;
}) {
  return (
    <svg viewBox="0 0 24 24" className={className} role="img" aria-label={title || String(name)}>
      <use href={`${spritePath}#icon-${name}`} />
    </svg>
  );
}
