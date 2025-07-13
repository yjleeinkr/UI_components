import VanillaWrapper from "../vanillaWrapper";

const initiator = (wrapper: HTMLDivElement) => {
  let state = false;

  const $p = document.createElement("p");
  $p.textContent = "OFF";

  const $btn = document.createElement("button");
  $btn.textContent = "Toggle";
  $btn.addEventListener("click", () => {
    state = !state;
    $p.textContent = state ? "ON" : "OFF";
  });

  const $div = document.createElement("div");
  $div.textContent = "Test2 - Vanilla";
  $div.append($btn, $p);

  /** insertAdjacentHTML(position, text)
   * - 두번째 인자로 지정된 텍스트를 html이나 xml로 파싱해서 결과노드들을 지정된 위치의 DOM 트리에 삽입한다.
   * > position: 요소와 상대적인 위치를 나타내는 문자열
   * - beforebegin: 요소 이전 위치 (요소가 부모 요소를 가지고 있을때만 유효)
   * - afterbegin: 요소 바로 안에서 처음 자식 이전에 위치
   * - beforeend: 요소 바로 안에서 마지막 자식 이후에 위치
   * - afterend: 요소 이후에 위치 (요소가 부모 요소를 가지고 있을때만 유효)
   */
  wrapper.insertAdjacentElement("beforeend", $div);
};

const Test2_Vanilla = () => <VanillaWrapper initiator={initiator} />;

export default Test2_Vanilla;
