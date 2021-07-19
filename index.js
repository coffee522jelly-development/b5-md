window.onload = async () => {
  // 準備を待つ
  await markdown.ready;
  
  $input.oninput = () => {
    // 入力されるたびに変換
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

// ボールドを押した<作成中>
// $(function(){
//   $('#Bold').click(function(){
//     var obj = window.getSelection();
//     var strRange = "**" + obj.toString() + "**";
//     console.log(strRange);
//   });
// });