import { SyntheticEvent, useEffect, useState } from "react";
import cx from "./cx";
import data from "./data";
import { useSingleOpen } from "../../../context/singleOpenContext";

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  return (
    <details className={cx("details")} data-tooltip={id}>
      <summary key={id} className={cx("summary")} data-tooltip-summary>
        {title}
      </summary>
      <div className={cx("tooltip")} onClick={(e) => e.stopPropagation()}>
        {description}
      </div>
    </details>
  );
};

const Tooltip3 = () => {
  useEffect(() => {
    const closeAllTooltip = (e: Event) => {
      const target = e.target as HTMLElement;
      document.querySelectorAll("[data-tooltip]").forEach((el) => {
        if (el !== target.parentElement) el.removeAttribute("open");
      });
    };

    window.addEventListener("click", closeAllTooltip);

    return () => window.removeEventListener("click", closeAllTooltip);
  }, []);

  return (
    <>
      <h3>
        #3. React
        <sub>html details 사용</sub>
      </h3>
      {data.map((d) => (
        <Tooltip {...d} key={d.id} />
      ))}
    </>
  );
};
export default Tooltip3;
