function ChangeTab(tabname) {
   // 全部消す
   document.getElementById('tab1').style.display = 'none';
   document.getElementById('tab2').style.display = 'none';
   document.getElementById('tab3').style.display = 'none';
   document.getElementById('tab4').style.display = 'none';
   // 指定箇所のみ表示
   if(tabname) {
				document.getElementById(tabname).style.display = 'block';
			}
}
// デフォルトのタブを選択
  //ChangeTab('tab1');
