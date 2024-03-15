import React, { ReactDOM, useState, useEffect } from "react";

const GuideState = () => {
  const contents = "helllo world";

  // useState() 함수를 호출하면 리스트 하나를 되돌려줌.
  // [a, b] 형태라고 할 때, a 는 변수, b 는 변수 a 를 수정할 수 있는 setter 함수
  // 그니까 useState() 함수를 호출하면 변수 하나랑 그 변수를 수정할 수 있는 함수 하나랑 해서 한 쌍으로 묶어서 되돌려줌.
  // useState(x) 함수 안에 파라미터를 넣어줄 수가 있는데, 이 파라미터는 나중에 되돌려주는 변수의 초기값으로 설정됨.
  // 배열이든, 객체이든, 배열 안에 객체든, 객체 안에 배열이든, 문자든, 숫자든, 뭐든 상관 없음.
  // 근데 const [a, b] = useState(); 형태로 받는 것은 JavaScript 문법.
  // 배열 구조 분해 할당 (destructuring) 문법임.
  // const a = myList[0];
  // const b = myList[1];
  // const c = myList[2];
  //  ...
  // 이거를 줄여서
  // const [a, b, c] = myList;
  // 이렇게 해줄 수가 있음.
  // 위에 거는 배열이고 객체도 당연히 가능.
  // const x = myObj.x;
  // const y = myObj.y;
  // const z = myObj.z;
  // ...
  // 이거를 줄이면
  // const {x, y, z} = myObj;
  // 리스트 분해 할당이랑 객체 분해 할당이랑 괄호만 바뀜.
  // 대괄호에서 중괄호로.

  const [count, setCount] = useState(0);

  // useEffect() 는 side effect 같은 걸 말하는 것
  // 예를 들어서 어떤 state 변수를 하나 바꿨어.
  // 그럼 그거에 연달아서 다른 값이 바뀌거나 화면 요소가 나타나거나 사라지거나 알림이 나오거나...
  // 클래스 형식에서 componentDidMount() / componentDidUpdate() / componentWillUnmount() 같은 life cycle 함수랑 비슷한 역할을 함.
  // useEffect() 가 실행되는 시점은 컴포넌트가 렌더링될 때.
  // 첫 렌더링 포함해서, state 가 바뀌면서 재렌더링되는 것들도 모두 포함
  // 그리고 useEffect() 안에는 파라미터로 함수를 넣어주는데, 이 함수에서 어떤 함수를 반환하도록 만든다면 해당 effect 를 '해지' 하는 함수가 됨.
  // effect 를 해지하는 함수를 정의해서 반환할지는 optional 한 거라서 필수는 아님.
  useEffect(() => {
    console.log("effect hook run");
    document.title = `you clicked the button ${count} times`;

    return () => {
      console.log("the effect hook resolved");
    };
  });

  // 최상위(at the top level)에서만 Hook을 호출해야 합니다. 반복문, 조건문, 중첩된 함수 내에서 Hook을 실행하지 마세요.
  // React 함수 컴포넌트 내에서만 Hook을 호출해야 합니다. 일반 JavaScript 함수에서는 Hook을 호출해서는 안 됩니다. (Hook을 호출할 수 있는 곳이 딱 한 군데 더 있습니다. 바로 직접 작성한 custom Hook 내입니다. 이것에 대해서는 나중에 알아보겠습니다.)
  // 근데 이거를 렌더일할 때마다 매번 호출한다?
  // 만약에 effect 에 어떤 데이터를 구독하는 로직이 있고, return 에 구독을 해지하는 로직이 있다고 해 보자.
  // 어떤 자원을 차지하거나, 할당한 자원을 해제하는 로직이 있다고 해 보자.
  // 근데 이거를 state 값 하나가 바뀔 때마다 계속 실행한다 ?
  // 예를 들어 input 에 onchange 로 state 가 바뀌도록 걸어두었으면, 타자 하나 칠 때마다 렌더링이 다시 일어날 텐데 ?
  // 그러면 타자 하나하나 칠 때마다 자원 구독 / 자원 해제 로직을 반복한다고 ?
  //   이러한 이유로 useEffect 에는 두 번째 인자를 넣어줄 수가 있음.
  // 두 번째 인자에는 '어떤 state 변수를 감시할지,' '어떤 state 의 값이 변할 때에만 이 useEffect 를 실행할지' 를 넣어줄 수가 있음.
  // 그거는 배열로 넣어줄 수가 있고, 배열 안에 들어 있는 값들 중 하나라도 바뀌면 렌더링 후에 useEffect 가 작동함.
  // 만약 맨 처음에만 작동하고, 페이지를 떠날 때 한 번만 작동하게 하고 싶다면 빈 배열[] 을 넘겨주기.
  // 그러면 어떤 state 가 바뀌든 빈 배열 [] 은 그 자체로 바뀌지 않으니까 맨 처음/ 맨 마지막에만 한 번씩 작동함.
  //   useEffect(() => {
  //    document.title = `you clicked the button ${count} times`;
  //    return () => {
  //       console.log("the effect hook resolved");
  //    };
  // }, []);

  const result = (
    <div className="my-content">
      <h1>MY TEXT IS: {contents}</h1>
      <h2>{4 + 3}</h2>
      <h3>you clicked {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        plus
      </button>
      <input value="helloworld" disabled={1 < 2 ? true : false} />
    </div>
  );
  return result;
};

// 클래스형
// export class GuideState extends React.Component {
//   componentDidMount() {
//     console.log("hello world222222222222222222");
//   }
//   render() {
//     return <div>{"this is compon"}</div>;
//   }
// }

export default GuideState;
