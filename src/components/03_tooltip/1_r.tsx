import { SyntheticEvent, useEffect, useState } from "react";
import cx from "./cx";
import data from "./data";

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const [isOpen, toggle] = useState(false);

  const toggleTip = (e: SyntheticEvent) => {
    e.stopPropagation(); // 이벤트가 상위 부모 요소에도 전달되지 않게 막아주는 역할
    /**
     * 외부 클릭 시 툴팁을 닫기 위해서 window 전체에 이벤트 리스너를 걸었는데 (useEffect)
     * 툴팁을 보려고 클릭해도 이벤트 전파로 리스너가 동작해서 툴팁 자체가 안 열리는 걸 방지하기 위해 e.stopPropagation() 추가
     **/
    toggle((prev) => !prev);
  };

  useEffect(() => {
    const close = () => toggle(false);
    if (isOpen) window.addEventListener("click", close);

    return () => window.removeEventListener("click", close);
  }, [isOpen]);

  return (
    <div className={cx("container")} onClick={toggleTip}>
      <button key={id} className={cx("trigger")}>
        {title}
      </button>
      {isOpen && (
        <div className={cx("tooltip")} onClick={(e) => e.stopPropagation()}>
          {/* 툴팁 클릭 시 클릭 이벤트리스너로 닫히는 걸 방지하기 위해 추가 */}
          {description}
        </div>
      )}
    </div>
  );
};

const Tooltip1 = () => {
  return (
    <>
      <h3>
        #1. React
        <sub>외부 클릭 시 닫히도록 처리</sub>
      </h3>
      {data.map((d) => (
        <Tooltip {...d} key={d.id} />
      ))}
    </>
  );
};
export default Tooltip1;
