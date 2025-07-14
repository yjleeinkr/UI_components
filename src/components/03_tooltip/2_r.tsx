import cx from "./cx";
import data from "./data";
import SingleOpenContextProvider, {
  useSingleOpen,
} from "../../../context/singleOpenContext";
import { SyntheticEvent, useEffect } from "react";

const Tooltip = ({
  id,
  title,
  description,
}: {
  id: string;
  title: string;
  description: string;
}) => {
  const [isOpen, toggle] = useSingleOpen(id);

  const toggleTip = (e: SyntheticEvent) => {
    e.stopPropagation();
    toggle((p) => (p === id ? null : id));
  };

  useEffect(() => {
    const close = () => toggle(null);

    if (isOpen) {
      window.addEventListener("click", close, { once: true });
      // once 옵션 > 리스너가 한번만 실행되고 실행 후 자동으로 제거됨
    }

    return () => window.removeEventListener("click", close);
  }, [isOpen, toggle]);

  return (
    <div className={cx("container")}>
      <button key={id} className={cx("trigger")} onClick={toggleTip}>
        {title}
      </button>
      {isOpen && (
        <div className={cx("tooltip")} onClick={(e) => e.stopPropagation()}>
          {description}
        </div>
      )}
    </div>
  );
};

const Tooltip2 = () => {
  return (
    <>
      <h3>
        #2. React <sub>하나만 열리도록 (Context 사용)</sub>
      </h3>
      <SingleOpenContextProvider>
        {data.map((d) => (
          <Tooltip {...d} key={d.id} />
        ))}
      </SingleOpenContextProvider>
    </>
  );
};

export default Tooltip2;
