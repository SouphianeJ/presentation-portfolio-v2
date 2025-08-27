export default function Icon({ name, className }: { name: string; className?: string }) {
  // TODO step 3: remplacer par <svg><use href="/icons/retro_icons_sprite.svg#icon-{name}" /></svg>
  return <span aria-hidden className={className}>□</span>;
}
