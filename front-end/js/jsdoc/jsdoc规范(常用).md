### JSDoc规范

JSDoc注释必不可少, 常用的有:

* 文件头注释  
* 类注释  
* 模块注释  
* 函数注释  
* 属性注释  
* 其他注释  

[官网](http://usejsdoc.org/)

[中文教程](http://www.css88.com/doc/jsdoc/)

#### 文件头注释与vscode-fileheader插件

文件头注释很重要, 文件实现的功能和介绍, 原作者, 创建时间, 最后接手者, 最后修改时间等关键信息都能让项目更好的维护, 尤其是团队合作, 多头接手的情况下.

1. 在扩展商店搜索`vscode-fileheader`，安装`vscode-fileheader`插件；
2. 打开vscode**首选项-->设置**，在设置里面搜索`fileheader`相关配置
3. 添加或修改 ```fileheader.Author``` 和 ```fileheader.LastModifiedBy``` 为你的```mip账号```, 比如:

```json
{
  ...
  "fileheader.Author": "zhongjw",
  "fileheader.LastModifiedBy": "zhongjw",
  ...
}
```
4. 添加或修改 ```fileheader.tpl``` 如下:

```json
{
  ...
  "fileheader.tpl": "/**\r\n * @file: 请在这里填写该文件实现的功能\r\n* @description: 请在这里填写该文件其他相关的介绍\r\n * @author: {author}\r\n * @copyright: COPYRIGHT (©) 2016-2017 深圳美云智数科技有限公司\r\n * @Created Time: {createTime}\r\n * @Last Modified By:   {lastModifiedBy}\r\n * @Last Modified Time: {updateTime}\r\n */\r\n"
  ...
}
```

5. 保存并重启vscode
6. 每新建一个js文件, 同时按键盘 的 `ctrl` + `alt` + `i` (MAC电脑为 `control` + `option` + `i`), 则会自动新建文件头的JSDoc, 请在 ```@file``` 注释中填写 ```该文件实现的功能```, 请在 ```@description``` 注释中填写 ```该文件其他相关的介绍```, 文件头注释与文件主体内容之间用```一个空行```隔开, 比如:

```js
/**
 * @file: 本文件主要实现 美信MAC版的数据通道.
 * @description: 实现通讯, 必须使用数据通道.
 * @author: 钟景伟
 * @copyright: COPYRIGHT (©) 2016-2017 深圳美云智数科技有限公司
 * @Created Time: 2017-10-31 10:44:58
 * @Last Modified By:   钟景伟
 * @Last Modified Time: 2017-10-31 10:44:58
 */

 import vue from 'vue'
```

#### 类注释

类注释常用的标签有：```@class```、```@classdesc```、```@augments```、```@static```、```@override```和```@access```, 工具类和核心类必须严格要求。

```js
/** 
 * @description 这是一个类描述.
 */
class Point {
    /**
     * @class
     * @classdesc 这是一个构造函数.
     * @param {number} x - 这是X参数.
     * @param {number} y - 这是Y参数. 
     */
    constructor(x, y) {
        // ...
    }

    /**
     * @description 获取X坐标的函数
     * @access public
     * @returns {number} 这是X参数.
     */
    getX() {
        // ...
    }

    /**
     * @description 获取Y坐标的函数
     * @access public
     * @returns {number} 这是Y参数.
     */
    getY() {
        // ...
    }

    /**
     * @description 坐标转换函数: Convert a string containing two comma-separated numbers into a point.
     * @static
     * @access public
     * @param {string} str - The string containing two comma-separated numbers.
     * @returns {Point} A Point object.
     */
    static fromString(str) {
        // ...
    }
}


/**
 * @description Class representing a dot.
 * @augments Point
 */
class Dot extends Point {
    /**
     * @class
     * @classdesc 这是一个构造函数.
     * @param {number} x - The x value.
     * @param {number} y - The y value.
     * @param {number} [width] - The width of the dot, in pixels. 该参数是可选参数
     */
    constructor(x, y, width) {
        // ...
    }

    /**
     * @description 获取宽度的函数.
     * @access public
     * @returns {number} The dot's width, in pixels.
     */
    getWidth() {
        // ...
    }

    /**
     * @description 获取Y坐标的函数
     * @override
     * @access public
     * @return {number} 这是Y参数.
     */
    getY() {
        // ...
    }
}
```


* ```@class```

语法: ```@class [<type> <name>]```

描述：此函数旨在需要使用"new"关键字调用，即构造函数。

别名:```@constructor```

* ```@classdesc```

语法: ```@classdesc <some description>```

描述: 用于为类提供一个描述，这样和构造函数的描述区分开来。```@classdesc```标签应该与 ```@class``` (或 ```@constructor```)标签结合使用。

* ```@augments```

语法: ```@augments <namepath>```

别名：@extends

描述: 指明标识符继承自哪个父类，后面需要加父类名。你可以使用这个标签来记录基于类和并基于原型的继承。

* ```@static```

语法: ```@static```

描述: 记录一个静态成员, 标明一个在父类中的标识符不需实例即可使用。

* ```@override```

语法: ```@override```

描述: 指明一个标识符覆盖其父类同名的标识符。

* ```@access```

语法: ```@access <private|protected|public>```

描述: 指定该成员的访问级别（私有 private，公共 public，或保护 protected）。

你可以使用与@access标签同义的其他标签：

  * ```@access private``` 等价于 ```@private```;

  * ```@access protected``` 等价于 ```@protected```;

  * ```@access public``` 等价于 ```@public```;

#### 模块注释

模块注释必须用到的标签有：```@module```、```@default```和```@constant```。

```js
// my/shirt.js
/** @module my/shirt */

/** 
 * @constant {string} 最后的颜色值
 * @default
 */
export const LAST_COLOR = 'FF0000';


// entry.js
import * as myShirt from 'my/shirt'
```


* ```@module```

语法: ```@module [[{<type>}] <moduleName>]```

描述：将当前文件标注为一个模块。注意：如果你提供了一个type，那 必须 同时提供模块名称（<moduleName>）。

在大多数情况下，ES2015,CommonJS的或Node.js的模块应该包含一个独立的JSDoc注释,这个JSDoc注释应该包含@module 标签。@module 标签的值应该是传递给require() 函数的模块标识符。例如，如果用户通过调用require('my/shirt')来加载模块，你的JSDoc注释将包含@module my/shirt标签。

* ```@constant```

语法: ```@constant [<type> <name>]```

描述: 记录一个对象作为一个常量。

别名: ```@const```

* ```@default```

语法: ```@default [<some value>]```

描述: 记录默认值。

别名: ```@defaultvalue```

@default标签可以让你记录标识的赋值。可以在标签后面跟上他的值，或者当值是一个唯一被分配的简单值(可以是：一个字符串，数字，布尔值或null)的时候，你可以让JSDoc从源代码中获取值，自动记录 。


#### 函数注释

函数注释必须用到的标签有：```@param```和```@returns```, 其他常用的有 ```@type```、 ```@returns```和```@throws```。

```js

/** 
 * @description 这是一个函数
 * @function 
 * @param {number} x - 这是X参数.
 * @param {number} y - 这是Y参数. 
 * @param {number} [z] - 这是Z参数, 可选的参数 
 * @returns {string} 返回的字符串.
 */
var foo = function (x, y, z) {
    return '';
}


/** 
 * @description 这是一个函数
 * @param {number} x - 这是X参数.
 * @param {number} y - 这是Y参数. 
 * @param {number} [z] - 这是Z参数, 可选的参数 
 * @returns {string} 返回的字符串.
 * @throws {InvalidArgumentException}
 */
function bar (x, y, z) {
    return '';
}

```


* ```@function```

语法: ```@function [<FunctionName>]```

描述: 描述一个函数或方法。

别名: ```@func``` 和 ```@method```

标记一个对象作为一个函数，即使它可能不会出现在解析器中。它设置doclet的@kind为'function'。

* ```@type```

描述: 允许你提供一个表达式，用于标识一个标识符可能包含的值的类型，或由函数返回值的类型。您还可以将其包含与其他JSDoc标签类型的表达式结合使用，如```@param``` 标签。

语法: ```@type {typeName}```

详情: [点这里](http://www.css88.com/doc/jsdoc/tags-type.html)

* ```@param```

描述: 提供了对某个函数的参数的各项说明，包括参数名、参数数据类型、描述等。 

别名: ```@arg``` 或 ```@argument```

参数类型可以是一个内置的JavaScript类型，如string或Object，或是你代码中另一个标识符的JSDoc namepath（名称路径）。如果你已经在这namepath（名称路径）上为标识符添加了描述，JSDoc会自动链接到该标识符的文档。您还可以使用type的表达式来表示，例如，该参数不能为空或可以接受任何类型;详见@type 标签文档。

*** 如果您提供的描述，在描述之前插入一个连字符，可以使JSDoc注释更具可读性。请务必在连字符后加一个空格。***


***注意: 可选和可变参数应该在 ```@param``` 标记中说明清楚***

详情: [点这里](http://www.css88.com/doc/jsdoc/tags-param.html)

* ```@returns```

描述: 记录一个函数的返回值。语法和```@param```类似

别名: ```@return```


* ```@throws```

语法:

```
@throws free-form description
@throws {<type>}
@throws {<type>} free-form description
```

描述: 说明可能会被抛出什么样的错误, 在一个JSDoc注释块中您可以包含多个@throws标签。

别名: ```@exception```


#### 属性注释

属性注释必须用到的标签有：```@global```和```@property```, 其他常见的有 ```@namespace```。

```js
/** 
 * @global
 * @description 默认的颜色
 */
window.defaultColor = '#FF0000';

/** @description 背景颜色 */
var bgColor = '#FF0000';

/**
 * @namespace
 * @property {object}  defaults               - The default values for parties.
 * @property {number}  defaults.players       - The default number of players.
 * @property {string}  defaults.level         - The default level for the party.
 * @property {object}  defaults.treasure      - The default treasure.
 * @property {number}  defaults.treasure.gold - How much gold the party starts with.
 */
var config = {
    defaults: {
        players: 1,
        level:   'beginner',
        treasure: {
            gold: 0
        }
    }
};


```


* ```@global```

描述: 记录一个全局对象。

* ```@property```

描述: 记录一个对象的属性。

别名: ```@prop```

@property标签很容易描述类，命名空间或其它对象的静态属性列表。

通常JSDoc模板将创造一个全新的页面来显示关于命名空间嵌套的每一层级的信息。有时候，你真的想要在同一张页面上列出所有属性，包括嵌套的属性。

请注意，```@property```标记必须在命名空间```@namespace```或类的文档注释块中使用。该标签适用于静态属性的简单集合，它不允许你为每个属性提供@examples或类似的复杂信息，只包含类型，名称和说明。

* ```@namespace```

语法: ```@namespace [{<type>}] <SomeName>]```

描述：指明对象是一个命名空间。


#### 其他注释

其他注释如 ```@todo```、```@see```、```@link```、```@example```、```@description```都很常见。


```js
/**
 * @description 这是一个函数
 * @returns {number} 返回值
 * @todo 编写该函数的使用文档
 * @todo 函数逻辑实现
 * @see {@link http://github.com|GitHub}
 * @example
 * // returns 3
 * foo();
 */
function foo() {
    // write me
}

```

* ```@todo```

语法: ```@todo text describing thing to do.```

描述: 记录一个将要完成的任务。在一个JSDoc注释块中您可以包含多个@todo标签。


* ```@see```

语法:

```
@see <namepath>
@see <text>
```

说明: 更多详细信息请参阅参考另一个标识符的说明文档，或者一个外部资源。您可以提供一个标识符的namepath或自由格式的文本。如果你提供了一个namepath，JSDoc的默认模板会自动将namepath转换成链接。@see标签建议配合@link标签一起使用.


* ```@link```

语法: 

```
{@link namepathOrURL}
[link text]{@link namepathOrURL}
{@link namepathOrURL|link text}
{@link namepathOrURL link text (after the first space)}
```

描述: 链接到文档中的另一个项目。

版本: '>=3.0.0'

别名: ```@linkcode``` 或 ```@linkplain```

{@link}内联标签创建一个链接到您指定的namepath或URL。当您使用{@link}标签，还可以提供几种不同的格式的链接文本。如果你不提供任何链接文本，JSDoc使用namepath或URL作为链接文字。

* @example

描述: 提供一个如何使用描述项的例子, 跟随此标签的文字将显示为高亮代码, 一个doclet中可以同时使用多个@example标签。

* @description

语法: ```@description <some description>```

描述: 允许您提供一般描述。该说明可能包括HTML标签。如果Markdown 插件启用的话，它也可包括Markdown格式。

别名: ```@desc```