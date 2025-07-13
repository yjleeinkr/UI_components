import { useState } from "react";
import cx from "./cx";
import data from "./data";

type AccordionProps = {
  id: string;
  title: string;
  description: string;
  initialChecked: boolean;
};
// 열린걸 다시 닫게 하려면 details summary 태그 사용하는게 좋다.
const AccordionItem = ({
  id,
  title,
  description,
  initialChecked,
}: AccordionProps) => {
  return (
    <li className={cx("item", "item5")} key={id}>
      <input
        className={cx("input")}
        type="radio"
        name="accordion"
        id={id}
        defaultChecked={initialChecked}
      />
      <label htmlFor={id} className={cx("tab")}>
        {title}
      </label>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const Accordion5 = () => {
  return (
    <>
      <h3>
        #5. React<sub>html input(radio)로 처리</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((v, i) => (
          <AccordionItem {...v} key={v.id} initialChecked={i === 0} />
        ))}
      </ul>
    </>
  );
};

export default Accordion5;
