import { useState } from "react";
import data from "./data";
import cx from "./cx";

const TabItem = ({
  id,
  title,
  description,
  active,
  toggle,
}: {
  id: string;
  title: string;
  description: string;
  active: boolean;
  toggle: () => void;
}) => {
  return (
    <li className={cx("item", { active })} key={id} onClick={toggle}>
      <div className={cx("title")}>{title}</div>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const TabMenu3 = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const toggle = (id: number) => () => setActiveIdx(id);

  return (
    <>
      <h3>
        #3. React
        <sub>
          단일 트리 형태의 html로 작성(한 li 안에 title/desc 모두 있게 처리)
        </sub>
      </h3>
      <p className={cx("text")}>
        ✨ CSS가 번거롭긴 하지만 이 경우 스크린 리더가 해당 탭의 제목과 설명을
        연속적으로 읽어주기 때문에 사용자가 문맥을 파악하기 더 좋다 (접근성
        향상)
      </p>
      <ul className={cx("container", "tabMenu3")}>
        {data.map((d, idx) => (
          <TabItem
            {...d}
            key={d.id}
            active={activeIdx === idx}
            toggle={toggle(idx)}
          />
        ))}
      </ul>
    </>
  );
};

export default TabMenu3;
