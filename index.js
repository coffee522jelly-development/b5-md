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
    $("blockquote").attr({class : "blockquote"});
    $(":checkbox").attr({class : "form-check-input me-2"});
  };

  // 一回実行しておく
  $input.oninput();
};

// // 初期化ボタンを押した
// $(function(){
//   $('#Preset').click(function(){
//     $('textarea').val("");
//     $input.oninput();
//   });
// });

// リセットボタンを押した
$(function(){
  $('#Reset').click(function(){
    $('textarea').val("");
    $input.oninput();
  });
});

// 印刷ボタンを押した
$(function(){
  $('#Print').click(function(){
    $('#preview').removeClass("col-9").addClass("col-12");
    
    window.print();
    
    $('#preview').removeClass("col-12").addClass("col-9");
  });
});