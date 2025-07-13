import { useEffect, useRef, useState } from "react";
import cx from "./cx";
import data from "./data";
// https://hiddenest.dev/accessible-accordion

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
  const descRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.addEventListener("beforematch", toggle);
    }

    return () => {
      if (descRef.current)
        descRef.current.removeEventListener("beforematch", toggle);
    };
  }, [toggle]);

  return (
    <li className={cx("item", "item3", { active })}>
      <div className={cx("tab")} onClick={toggle}>
        {title}
      </div>
      <div
        className={cx("description")}
        ref={descRef}
        HIDDEN={active ? undefined : "until-found"}
      >
        {/* hidden=until-found를 리액트가 인지를 하지 못하는 점 + HTML은 대소문자 구분을 하지 않기 때문에 제대로 된 until-found를 인식 */}
        {/* onBeforeMatch라는 이벤트 리스너를 등록해야하는데 html에서 새로 등장한 기능이다보니 리액트에서 반영을 못해줘서 ref를 통해 구현  */}
        {description}
      </div>
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
        #6. React<sub>ctrl+F 검색 가능</sub>
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
