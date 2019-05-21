function zebraze(tableClass, oddClass, evenClass){
  if(typeof(oddClass) == "undefined") oddClass = 'o';
  if(typeof(evenClass) == "undefined") evenClass = 'e';
  
  var els = document.getElementsByTagName('table');
  var pattern = new RegExp("(^|\\s)"+tableClass+"(\\s|$)");
  
  for(var i = 0; i < els.length; i++)
    if(pattern.test(els[i].className))
      for(var j = 0; j < els[i].rows.length; j++ )
        els[i].rows[j].className += ' ' + (j&1 ? oddClass : evenClass);
}