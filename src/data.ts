export function navData(){
    var title = ['推荐', '热点', '社会','娱乐','科技','汽车','体育','财经','军事','国际','时尚','游戏','美食','历史','育儿',
    '故事'];
  var items = [];
  for(let i = 1; i < title.length; i++) {
      items.push({  
        title: title[i],
        id:i
      });
    }
    return items;
}
export function contentData(x: string) {
  var arr = [];
  var base = {
    "publishTime":"2016-11-29 11:17:35",
    "content": "山西首富李兆会近照曝光，与车晓离婚后再娶女明星",
    "id":"",
    "picture":[]
  }
  for(var i =0;i<5;i++){
    var content = base.content+i,
        id = base.id+i,
        picture = [];
    for(var j=0;j<=i;j++){
      picture.push({
        "content":i+"-"+j,
        "id":i,
        "url":"http://p1.pstatp.com/large/1aa4000abe9cde40faf5"
      })
    }
    arr.push({
      content:content,
      id:id,
      picture:picture
    });
  }
  return arr;
}
export function GetAsyncData(x: string) {
    // async receive mock data
    return new Promise(resolve => {
      var arr = [];
      var base = {
        "publishTime":"2016-11-29 11:17:35",
        "content": "山西首富李兆会近照曝光，与车晓离婚后再娶女明星",
        "id":"",
        "picture":[]
      }
      for(var i =0;i<5;i++){
        var content = base.content+i,
            id = base.id+i,
            picture = [];
        for(var j=0;j<=i;j++){
          picture.push({
            "content":i+"-"+j,
            "id":i,
            "url":"http://p1.pstatp.com/large/1aa4000abe9cde40faf5"
          })
        }
        arr.push({
          content:content,
          id:id,
          picture:picture
        });
      }
     resolve(arr);
    });
  }