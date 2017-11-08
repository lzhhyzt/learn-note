### 具体请前往  

[中文API](http://www.css88.com/doc/jsdoc/)

### 类相关注释：
**类**：@description  @augments  
**类-构造函数**：@class   @classdesc  @param  @constructor  
**类-一般函数方法**：@description  @params  @returns @access  @overide   
**类-静态方法**：@description  @params  @returns @access  @static 

### 模块相关注释（export , import）：
**@module**: 可以将当前文件标注为一个模块，默认情况下文件内的所有标识符都隶属于此模块   
**@default** : 记录默认值   
**@constant** : 记录一个对象作为一个常量。 

### 函数相关注释：
**@description**  
**@param**    
**@returns**   
**@function**(一般用户函数表达式)  
**@type**  : 允许你提供一个表达式，用于标识一个标识符可能包含的值的类型，或由函数返回值的类型
例子：@type  {(number|boolean)}   
**@throws**： 说明可能会被抛出什么样的错误, 在一个JSDoc注释块中您可以包含多个@throws标签。

### 属性相关注释：
**@description**  
**@global** : 记录一个全局属性对象，如window.color='#ffffff'  
**@property** : 记录一个对象的所有层级属性，一个jsdoc注释可以有多个@property  
**@namespace** : 指明一个对象是命名空间，一般用于对象

### 其他注释：
**@description**   

**@todo** : 记录一个将要完成或将要做但是还没准备做的任务和相关事情。在一个JSDoc注释块中您可以包含多个@todo标签。  

**@see** : 指明如果要更详细理解请参考另一文档或者连接， @see后面跟一个地址路径，@see标签建议配合@link标签一起使用.
如 @see {@link http:www.baidu.com}   

**@link** ：链接到另一个文本或者项目url，或者是外部资源一般和@see集合使用
如： {@link namepathOrURL}    

**@example** :　提供一个如何使用描述项的例子, 跟随此标签的文字将显示为高亮代码, 一个doclet中可以同时使用多个@example标签。
如： @example  // returns 3







