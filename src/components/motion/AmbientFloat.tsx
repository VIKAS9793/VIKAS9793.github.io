/** Three low-contrast dots that drift up and fade, like steam. Decoration only, and CSS-driven so it stays cheap. */
export default function AmbientFloat() {
  return (
    <>
      <i className="float" aria-hidden="true" />
      <i className="float" aria-hidden="true" />
      <i className="float" aria-hidden="true" />
    </>
  );
}
