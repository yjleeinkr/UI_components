import { createContext, PropsWithChildren, useContext } from "react";

const Context = createContext<{ text: string } | undefined>(undefined);

const Child = () => {
  /** useContext
   * - 상위 컴포넌트에서 만들어진 Context를 함수 컴포넌트에서 사용할 수 있도록 만들어진 훅
   * - 여러 개의 Provider가 있다면 가장 가까운 Provider값을 가져온다. (아래에선 parent2)
   */
  const value = useContext(Context);
  return <p>text: {value?.text}</p>;
};

const Parent = () => {
  return (
    <>
      <Context.Provider value={{ text: "parent1" }}>
        <Context.Provider value={{ text: "parent2" }}>
          <Child />
        </Context.Provider>
      </Context.Provider>
    </>
  );
};

/** useContext 내부에 원하는 컨텍스트가 존재하지 않아서 나는 에러를 방지하기 위해선
 *  useContext 내부에서 해당 컨텍스트가 존재하는 환경인지,
 *  즉 컨텍스트가 한번이라도 초기화되어 값을 내려주고 있는지 확인
 * */
const MyContext = createContext<{ message: string } | undefined>(undefined);

const ContextProvider = ({
  children,
  message,
}: PropsWithChildren<{ message: string }>) => {
  return (
    <MyContext.Provider value={{ message }}>{children}</MyContext.Provider>
  );
};

const useMyContext = () => {
  const context = useContext(MyContext);
  if (!context) {
    throw new Error("useMyContext는 2 내부에서만 사용가능함");
  }
  return context;
};

const Child2 = () => {
  // 해당 컴포넌트가 Provider 하위에 없다면 에러가 발생한다.
  const { message } = useMyContext();
  return <div> message: {message}</div>;
};

const Parent2 = () => {
  return (
    <ContextProvider message="hello context">
      <Child2 />
    </ContextProvider>
  );
};

const ContextStudy = () => {
  return (
    <>
      <Parent />
      <Parent2 />
    </>
  );
};
export default ContextStudy;
