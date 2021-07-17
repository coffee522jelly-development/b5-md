window.onload = async () => {
  // 準備を待つ
  await markdown.ready;
  
  $input.oninput = () => {
    // 入力されるたびに変換する
    var md = markdown.parse($input.value);
    $output.innerHTML = md;

    // 要素にクラスを追加
    $("ul").attr({class : "list-group"});
    $("ol").attr({class : "list-group list-group-numbered"});
    $("li").attr({class : "list-group-item"});
  };

  // 一回実行しておく
  $input.oninput();
};