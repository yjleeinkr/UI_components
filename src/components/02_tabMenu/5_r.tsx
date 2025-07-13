import data from "./data";
import cx from "./cx";

const TabItem = ({
  id,
  title,
  description,
  initialChecked,
}: {
  id: string;
  title: string;
  description: string;
  initialChecked: boolean;
}) => {
  return (
    <li className={cx("item")}>
      <input type="radio" id={id} name="tab" defaultChecked={initialChecked} />
      <label htmlFor={id} className={cx("title")}>
        {title}
      </label>
      <div className={cx("description")}>{description}</div>
    </li>
  );
};

const TabMenu5 = () => {
  return (
    <>
      <h3>
        #5. React
        <sub>input radio로 처리</sub>
      </h3>
      <ul className={cx("container", "tabMenu5")}>
        {data.map((d, i) => (
          <TabItem key={d.id} {...d} initialChecked={i === 0} />
        ))}
      </ul>
    </>
  );
};

export default TabMenu5;
