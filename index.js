window.onload = async () => {
  // 準備を待つ
  await markdown.ready;
  
  $input.oninput = () => {
    // 入力されるたびに変換する
    var md = markdown.parse($input.value);
    $output.innerHTML = md;
  };
  
  // 一回実行しておく
  $input.oninput();
};