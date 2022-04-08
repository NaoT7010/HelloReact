import ReactDOM from "react-dom";

/*
//Step1
const App = () => {
  //return null;  //真っ白な画面が表示される
  return <h1>こんにちは！</h1>; //文字が表示される
};

ReactDOM.render(<App />, document.getElementById("root"));
//JSX記法では関数の返却値としてHTMLのタグが記述でき、それをコンポーネントとして画面を構成できる
//コンポーネント：関数名をHTMLのようにタグで囲んだもの
*/

/*
//Step2

const App21 = () => {
  return (
    //return以降は１つのタグで覆われている必要がある
    <div>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </div>
  );
};

const App22 = () => {
  return (
    //return以降は１つのタグで覆われている必要がある
    //Fragmentを利用する（省略記法）
    //省略しない場合、import {Fragment} from "react"が必要 タグは<Fragment>と書く
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDOM.render(<App22 />, document.getElementById("root"));
*/

//Step3
//各ファイルでコンポーネントを定義、他ファイルから読み込んでパーツを組み合わせるように画面を構築していく

//同階層にあるApp.jsからAppという名前の関数コンポーネントを読み込む.拡張子は省略可能
import { App } from "./App";
ReactDOM.render(<App />, document.getElementById("root"));
