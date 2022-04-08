//コンポーネントのファイル.拡張子は.jsでも動作するが区別と補完機能の利用のため.jsxにした方がよい

//他のファイルでも使えるようにするためにはexportが必要

//HTMLのようなタグの中では{}で囲むことでJavaScriptを記述できる
//ボタンを押した時に実行する関数を定義
//キャメルケース記法に注意 eg.x font-size, o fontSize
export const App = () => {
  const onClickButton = () => {
    alert();
  };

  //cssオブジェクト
  const contentStyle = {
    color: "blue",
    fontsize: "20px"
  };

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <p style={contentStyle}>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
      <h1>おやすみなさい</h1>
    </>
  );
};
//以上イベントの割り当ての基本
