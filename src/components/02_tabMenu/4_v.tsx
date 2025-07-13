import VanillaWrapper from "../vanillaWrapper";
import cx from "./cx";
import data from "./data";

const renderTitles = ({ id, title }: { id: string; title: string }) => {
  const $title = document.createElement("li");
  $title.classList.add(cx("title"));

  $title.textContent = title;
  $title.setAttribute("data-id", id);
  return $title;
};

const renderDescs = ({ description }: { description: string }) => {
  const $desc = document.createElement("div");
  $desc.classList.add(cx("description"));
  $desc.textContent = description;
  return $desc;
};

const initiator = (wrapper: HTMLDivElement) => {
  let currentId = data[0].id;
  const $container = document.createElement("div");
  $container.classList.add(cx("container"), cx("tabMenu2"));

  const $tabUl = document.createElement("ul");
  $tabUl.classList.add(cx("tab"));

  const $titles = data.map(renderTitles);
  const $descs = data.map(renderDescs);

  $tabUl.append(...$titles);
  $container.append($tabUl, ...$descs);

  const clickTab = (e: Event) => {
    const target = e.target as HTMLElement;
    if (!target.classList.contains(cx("title"))) return;

    currentId = target.dataset.id || data[0].id;

    $titles.forEach(($title, i) => {
      $title.classList.toggle(cx("active"), $title.dataset.id === currentId);
      $descs[i].classList.toggle(cx("active"), $title.dataset.id === currentId);
    });
  };

  $tabUl.addEventListener("click", clickTab);
  $titles[1].click(); // 처음 렌더 시 활성화 되어있을 탭 지정
  wrapper.append($container);
};

const TabMenu4V = () => <VanillaWrapper title="#4" initiator={initiator} />;

export default TabMenu4V;
