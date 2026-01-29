import { useEffect, useState } from "react";

export default function SummaryItem({ result }) {
  const [icon, setIcon] = useState(null);
  const [color, setColor] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchIcon = async () => {
      let svg = null;
      let color = null;

      try {
        const domParser = new DOMParser();

        await new Promise(r => setTimeout(r, Math.floor(2000 + Math.random() * 2000))); // Loading simulation 2 - 4 seconds

        const response = await fetch(result.icon, {
          signal: abortController.signal,
        });
        svg = await response.text();

        color = domParser
          .parseFromString(svg, "image/svg+xml")
          .querySelector("[stroke]:not([stroke=none])")
          ?.getAttribute("stroke");
      } catch (error) {
        if (error.name === "AbortError") return;

        throw error;
      } finally {
        setIcon(svg);
        setColor(color);
      }
    };

    fetchIcon();

    return () => {
      abortController.abort();
    };
  }, [result]);

  return (
    <div
      key={result.category}
      style={{
        "--api-color": `color-mix(in srgb, ${color ?? "grey"} 5%, transparent)`,
      }}
      className="item flex flex-row items-center justify-center gap-[10px] px-[14px] py-[16px] bg-[var(--api-color)] rounded-xl"
    >
      <span
        className="icon md:[&_svg]:w-7 md:[&_svg]:aspect-square"
        dangerouslySetInnerHTML={{
          __html: icon ?? "",
        }}
      ></span>
      <span
        className="name font-[500] flex-1 md:text-lg"
        style={{
          color: color ?? "black",
        }}
      >
        {result.category}
      </span>
      <span className="numerator font-[700]">{result.score}</span>
      <span className="divisor text-gray-500">/ 100</span>
    </div>
  );
}
