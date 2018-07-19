### React框架的引入方式之一：script标签   
  ![](../script-way.png)  
  如上图所示，script标签引入的方式需要在react.js及react.dom.js的标签上添加属性crossorigin，同时还需要引进babel.js。因为react组件采用的是jsx的语法，所以要正确解析组件，就必须引入babel.js。此外，在加载自定义js文件的时候，也必须设置该script标签的type属性值为“text/babel”，否则渲染之后的内容区将会显示一片空白。