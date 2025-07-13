import { useState } from "react";
import cx from "./cx";
import data from "./data";

type AccordionProps = {
  id: string;
  title: string;
  description: string;
  active: boolean;
  toggle: () => void;
};

const AccordionItem = ({
  title,
  description,
  active,
  toggle,
}: AccordionProps) => {
  return (
    <li className={cx("item", "item3", { active })}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const Accordion3 = () => {
  const [activeId, setActiveId] = useState<string | null>(data[0].id);

  const toggleItem = (id: string) => () => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <h3>
        #3. React<sub>css transition 추가</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((v) => (
          <AccordionItem
            {...v}
            key={v.id}
            active={activeId === v.id}
            toggle={toggleItem(v.id)}
          />
        ))}
      </ul>
    </>
  );
};

export default Accordion3;
