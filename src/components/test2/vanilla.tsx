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

  wrapper.insertAdjacentElement("beforeend", $div);
};

const Test2_Vanilla = () => <VanillaWrapper initiator={initiator} />;

export default Test2_Vanilla;
