import VanillaWrapper from "../vanillaWrapper";
import cx from "./cx";
import data from "./data";

type AccordionProps = {
  id: string;
  title: string;
  description: string;
};

// 리액트는 Root에서 이벤트를 중앙통제한다? 이게 무슨 말일까용
// Root에서 이벤트 핸들러를 다 수집해서 각 타겟에다가 이벤트를 쏴주는 형태
// 이벤트 걸었다가 해지하지 못해서 생길 메모리 누수를 리액트가 통제해줌
// classList.toggle(클래스명, force조건)
const itemBuilder = ({ id, title, description }: AccordionProps) => {
  const $li = document.createElement("li");
  $li.classList.add(cx("item"), cx("item3"));
  $li.setAttribute("data-id", id);

  const $tab = document.createElement("div");
  $tab.classList.add(cx("tab"));
  $tab.textContent = title;

  const $desc = document.createElement("div");
  $desc.classList.add(cx("description"));
  $desc.textContent = description;

  $li.append($tab, $desc);
  return $li;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId: string | null = null;
  const $ul = document.createElement("ul");
  $ul.classList.add(cx("container"));

  const handleClickTab = (e: Event) => {
    const $tab = e.target as HTMLElement;
    if (!$tab.classList.contains(cx("tab"))) return;
    // 부모 요소에 하나의 리스너만 추가하고(이벤트 위임) 이벤트 타겟을 확인해서 자식 요소 클릭 처리 (메모리 사용량 줄임)
    const targetId = $tab.parentElement!.dataset.id;
    if (!targetId) return;
    currentId = targetId === currentId ? null : targetId;
    $items.forEach(($item) => {
      $item.classList.toggle(cx("active"), currentId === $item.dataset.id);
    });
  };

  // 이벤트 버블링, 캡쳐링
  $ul.addEventListener("click", handleClickTab);

  const $items = data.map(itemBuilder);
  $ul.append(...$items);

  wrapper.append($ul);
  ($items[0].children[0] as HTMLElement).click();
};

const Accordion4V = () => <VanillaWrapper title="#4" initiator={initiator} />;
export default Accordion4V;
