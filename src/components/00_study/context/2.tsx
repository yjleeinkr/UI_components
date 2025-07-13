import {
  ChangeEvent,
  createContext,
  memo,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

const MyContext = createContext<{ data: string } | undefined>(undefined);

const ContextProvider = ({
  children,
  data,
}: PropsWithChildren<{ data: string }>) => {
  return <MyContext.Provider value={{ data }}>{children}</MyContext.Provider>;
};

const useMyContext = () => {
  const context = useContext(MyContext);

  if (!context)
    throw new Error("useMyContext는 ContextProvider 내부에서만 사용 가능 ");

  return context;
};

const GrandChild = () => {
  const { data } = useMyContext();

  useEffect(() => {
    console.log("GrandChild 렌더링!");
  });
  return <div>GrandChild: {data}</div>;
};

const Child = () => {
  useEffect(() => {
    console.log("Child 렌더링!");
  });
  return <GrandChild />;
};

/** React.memo: props의 변화가 없으면 리렌더링되지 않고 계속해서 같은 결과물을 반환함  */
const MemoizedChild = memo(() => {
  useEffect(() => {
    console.log("MemoizedChild 렌더링!");
  });

  return (
    <>
      Memoized <GrandChild />
    </>
  );
});

MemoizedChild.displayName = "MemoizedChild";

const Parent = () => {
  const [text, setText] = useState("");

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  useEffect(() => {
    console.log("Parent 렌더링!");
  });

  return (
    <ContextProvider data="useContext 사용 시 주의">
      <p>
        컨텍스트, useContext는 상태 관리를 위한게 아니라 상태 주입을 해주는
        API다. (최적화 불가능!)
      </p>
      <input value={text} onChange={onChange} />

      {/* input text가 바뀔때마다 상관없는 GrandChild, Child도 전부 다 리렌더링된다
        부모 컴포넌트가 렌더링되면 하위 컴포넌트는 모두 리렌더링되기 때문이다.
        ✨ 즉, 컨텍스트는 렌더링 최적화 기능따윈 없다. 그저 단순히 상태를 주입할뿐 그 이상, 이하의 기능을 하지 않는다..
      */}
      <Child />
      <MemoizedChild />
    </ContextProvider>
  );
};

export default Parent;
