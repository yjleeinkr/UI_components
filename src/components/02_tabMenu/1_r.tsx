import { useState } from "react";
import data from "./data";
import cx from "./cx";

const TabItem = ({
  id,
  title,
  active,
  toggle,
}: {
  id: string;
  title: string;
  active: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx("title", { active })} key={id} onClick={toggle}>
      {title}
    </li>
  );
};

const TabMenu1 = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const toggle = (id: number) => () => setActiveIdx(id);

  return (
    <>
      <h3>
        #1. React<sub>현재 desc(보이는 요소)만 렌더링</sub>
      </h3>
      <div className={cx("container", "tabMenu1")}>
        <ul className={cx("tab")}>
          {data.map((d, idx) => (
            <TabItem
              {...d}
              key={d.id}
              active={activeIdx === idx}
              toggle={toggle(idx)}
            />
          ))}
        </ul>
        <div className={cx("description")}>
          {data[activeIdx].description || ""}
        </div>
      </div>
    </>
  );
};

export default TabMenu1;
