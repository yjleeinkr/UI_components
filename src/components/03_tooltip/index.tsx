import cx from "./cx";
import ToolTip1 from "./1_r";
import ToolTip2 from "./2_r";
import ToolTip3 from "./3_r";

const ToolTip = () => {
  return (
    <div className={cx("Tooltip")}>
      <h2>툴팁</h2>
      <ToolTip1 />
      <ToolTip2 />
      <ToolTip3 />
    </div>
  );
};

export default ToolTip;
