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

const TabMenu2 = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const toggle = (id: number) => () => setActiveIdx(id);

  return (
    <>
      <h3>
        #2. React<sub>desc 다 그려놓고 css로 숨김/보임 처리</sub>
      </h3>
      <div className={cx("container", "tabMenu2")}>
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
        {data.map((d, idx) => (
          <div
            key={d.id}
            className={cx("description", { active: activeIdx === idx })}
          >
            {d.description}
          </div>
        ))}
      </div>
    </>
  );
};

export default TabMenu2;
