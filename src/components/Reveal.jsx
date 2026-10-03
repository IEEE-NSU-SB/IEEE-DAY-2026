import useInView from "../hooks/useInView";

export default function Reveal({
  children,
  as: Tag = "div",
  delay = 0,
  className = "",
}) {
  const [ref, inView] = useInView();

  return (
    <Tag
      ref={ref}
      className={`transition-opacity duration-300 ease-out motion-reduce:transition-none ${
        inView ? "opacity-100" : "opacity-0"
      } ${className}`}
      style={{ transitionDelay: inView ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}
