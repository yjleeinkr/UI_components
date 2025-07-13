import cx from "./cx";
import data from "./data";

type AccordionProps = {
  id: string;
  title: string;
  description: string;
  open: boolean;
};

/** detail, summary
 * - open 속성: 열린 채로 렌더링
 * - name 속성: input radio처럼 name을 지정해주면 하나만 열린다.
 * - 하나만 열리게 하고싶다면 details마다 같은 name 속성을 쓴다.
 */
const AccordionItem = ({ id, title, description, open }: AccordionProps) => {
  return (
    <details className={cx("item8")} open={open} name="accordion">
      <summary>{title}</summary>
      <div className={cx("description")}>{description}</div>
    </details>
  );
};

const Accordion7 = () => {
  return (
    <>
      <h3>
        #8. React <sub>details, summary 활용 + 검색가능</sub>
      </h3>
      <ul className={cx("container")}>
        {data.map((v, i) => (
          <AccordionItem {...v} key={v.id} open={i === 0} />
        ))}
      </ul>
    </>
  );
};

export default Accordion7;
