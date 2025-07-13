import cx from "./cx";
import TabMenu1 from "./1_r";
import TabMenu2 from "./2_r";
import TabMenu3 from "./3_r";
import TabMenu4V from "./4_v";
import TabMenu5 from "./5_r";

const Tabs = () => {
  return (
    <div className={cx("Tabs")}>
      <h2>탭메뉴</h2>
      <TabMenu1 />
      <TabMenu2 />
      <TabMenu3 />
      <TabMenu4V />
      <TabMenu5 />
    </div>
  );
};

export default Tabs;
