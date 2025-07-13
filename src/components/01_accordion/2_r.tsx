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
    <li className={cx("item", "item2", { active })}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const Accordion2 = () => {
  const [activeId, setActiveId] = useState<string | null>(data[0].id);

  // 📌 클로저를 만들어서 자식 컴포넌트에서 전달해 자식 컴포넌트에서 () => toggleItem(id) 이런 식의 함수를 다시 만들 필요 없이 toggle만 호출하면 되니까 더 깔끔하다.

  const toggleItem = (id: string) => () => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <>
      <h3>
        #2. React<sub>css로 hidden/show 처리</sub>
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

export default Accordion2;
