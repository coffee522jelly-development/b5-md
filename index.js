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

// ボールドを押した
 $(function(){
   $('#Bold').click(function(){
    const getSelectArea = () => {
      const val = $('textarea').val(),
      elm = $('textarea').get(0),
      tmp = {
      before: val.slice(0, elm.selectionStart),
      after: val.slice(elm.selectionEnd),
      text: elm.value.slice(elm.selectionStart, elm.selectionEnd),
      };
      return tmp;
      };
      let sel = getSelectArea()
      let txt = '**' + sel.text + '**';
      $('textarea').val(sel.before + txt + sel.after);

      $input.oninput();
   });
 });

 // リストボタンを押した
 $(function(){
  $('#List').click(function(){
   const getSelectArea = () => {
     const val = $('textarea').val(),
     elm = $('textarea').get(0),
     tmp = {
     before: val.slice(0, elm.selectionStart),
     after: val.slice(elm.selectionEnd),
     text: elm.value.slice(elm.selectionStart, elm.selectionEnd),
     };
     return tmp;
     };
     let sel = getSelectArea()
     let txt = '- ' + sel.text;
     $('textarea').val(sel.before + txt + sel.after);

     $input.oninput();
  });
});

// 複数行処理
var splitByLine = function() {
    var text  = document.getElementById('$input').value.replace(/\r\n|\r/g, "\n");
    var lines = text.split( '\n' );
    var outArray = new Array();
 
    for ( var i = 0; i < lines.length; i++ ) {
        // 空行は無視する
        if ( lines[i] == '' ) {
            continue;
        }
 
        outArray.push( lines[i] );
    }
 
    return outArray;
}
