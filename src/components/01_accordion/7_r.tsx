import { useEffect, useRef, useState } from "react";
import cx from "./cx";
import data from "./data";

type AccordionProps = {
  id: string;
  title: string;
  description: string;
};

const AccordionItem = ({ id, title, description }: AccordionProps) => {
  const [active, setActive] = useState(false);
  const descRef = useRef<HTMLDivElement>(null);

  const toggle = () => setActive((prev) => !prev);

  useEffect(() => {
    if (descRef.current) {
      descRef.current.addEventListener("beforematch", toggle);
    }

    return () => {
      if (descRef.current) {
        descRef.current.removeEventListener("beformatch", toggle);
      }
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
        {description}
      </div>
    </li>
  );
};

const Accordion7 = () => {
  return (
    <>
      <h3>
        #7. React <sub>여러개가 펼쳐지는 아코디언 + 검색가능</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((v, i) => (
          <AccordionItem {...v} key={v.id} />
        ))}
      </ul>
    </>
  );
};

export default Accordion7;
