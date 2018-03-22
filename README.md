# 从前端工程目录开始

## 怎么使用
1. 将项目分支 clone 到本地
```bash
	$ git clone -b project-construction  https://github.com/SilenceHVK/jQuery-source-code-analysis.git
```
2. 进入项目目录并安装依赖包
```bash
	$ cd jQuery-source-code-analysis && npm install
```
3.运行打包比编译
```bash
	$ npm run build
```
或
```bash
	$ npm run build-min
```

## 一、说在前面的话
&ensp;&ensp;一直在漫无目的的学习，但是前端的发展实在TM的太快，完全跟不上步伐。因此做了一个惊人的决定，我要解析它们的源码~~
![骄傲的叉腰](http://img-blog.csdn.net/20180321152057609?watermark/2/text/Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
因为与其枯燥的学习如何使用API，还不如直接学习它们的实现原理要来的实际。那么在多如繁星的前端库（或框架）中谁最适合第一个开刀呢？
故此便诞生出了这篇系列文章 ——《jQuery 源码解析》。

&ensp;&ensp;为什么是 jQuery，网上已经有很多对于 jQuery 源码解析的文章，但大多数文章都是这样的。
![jQuery 源码](http://img-blog.csdn.net/20180321151823750?watermark/2/text/Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
我那个擦~~，一万多行完全没有心情去分析了。那么这篇系列文章便站在一个开源者的角度上去详细解析 jQuery。

## 二、构建项目结构
&ensp;&ensp;既然是站在一个开源者的角度，那么我们就需要进入 jQuery 在 Github 的开源地址，查看其整个项目结构，
笔者这里使用的是 [jQuery V3.3.1](https://github.com/jquery/jquery/tree/3.3.1) ，目录结构如下图所示：

![jQuery](http://img-blog.csdn.net/20180321154716709?watermark/2/text/Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

对于前端工程化有经验的同学来说，上面的项目结构并不陌生，对此我也就不做过多的说明，下面我们就按照此工程目录构建我们自己的工程目录。

### 1. 创建工程目录
&ensp;&ensp;在系统任意磁盘中创建文件夹，并随意命名。笔者这里将项目名称命名为 ```jQuery-source-code-analysis```。通过命令行工具进入项目所在目录，如下图所示：
![进入项目所在目录](http://img-blog.csdn.net/20180322114715281?watermark/2/text/Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
使用 ```npm init``` 命令初始化 ```package.json``` 文件，步骤可以一路回车，之后你的项目目录结构应该是这个样子的：

![目录结构](http://img-blog.csdn.net/20180322114757508?watermark/2/text/Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

PS: 笔者这里使用的 IDE 工具为 ```VSCode```，读者可以随意使用。

### 2. 加入 ```.editorconfig``` 配置文件
&ensp;&ensp;作为一个开源项目，肯定就会有别的开发者参与贡献他们优秀的代码，那么想当然的程序界最为著名的 **代码缩进是用 Tab  还是 Space** 的大战便一触即发。

![不要逼我毁灭世界](http://img-blog.csdn.net/20180322120131311?watermark/2/text/Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

&ensp;&ensp;为了避免引起大战，作为开源者的我们需要在项目中加入 ```.editorconfig``` 文件，让其他开发这使用的 IDE 基础设置与我们本地 IDE 设置一直。
```
    # http://editorconfig.org/
    # top-most EditorConfig file
    root = true
    
    # match all file
    [*]
    # control the character set
    charset = utf-8
    
    # space indentation
    indent_style = space
    indent_size = 4
    
    # tab indentation
    indent_style = tab
    indent_size = 4
    
    # control line breaks are represented
    end_of_line = lf
    
    # remove any whitespace characters preceding newline characters
    trim_trailing_whitespace = true
```
更多关于 ```.editorconfig``` 配置可以查看其官网 [http://editorconfig.org/](http://editorconfig.org/)

### 3. 加入 ```Eslint``` 配置文件
&ensp;&ensp;IDE 的基础设置统一了，那么也让代码风格统一吧，这里我们使用 ```Eslint```：
```bash
    $ npm install eslint --save-dev
```
&ensp;&ensp;在项目中创建 ```.eslintrc.js``` 文件
```javascript
    // https://eslint.org/docs/user-guide/configuring
    module.exports = {
    	// specifying root
    	"root": true,
    	// specifying Parser Options
    	"parserOptions": {
    		// set EcmaScript Version
    		"ecmaVersion": 6,
    		"sourceType": "module",
    	},
    	// specifying enviroments
    	"env": {
    		// browser global variables
    		"browser": true,
    		// Node.js global variables and Node.js scoping
    		"node": true
    	},
    	// configuring plugins
    	"plugins": [],
    	// configuring rules
    	"rules": {
    		// set "semi"
    		"semi": [2, "always"]
    	}
    }
```
更多关于 ```Eslint``` 配置的设置可访问它的官网 [https://eslint.org/docs/user-guide/configuring](https://eslint.org/docs/user-guide/configuring)。

&ensp;&ensp;似乎有些第三方的库，并不需要我们对其进行代码风格的统一，在项目中创建 ```.eslintignore``` 文件用于忽略这些第三方的库：
```
    # specitying ignore files
    node_modules/
    dist/
```

### 4. 使用 ```Rollup``` 工具打包
&ensp;&ensp;从 ```jQuery``` 的项目结构中，我们不难发现 ```jQuery``` 所使用的打包工具是 ```grunt```，而就目前来看 ```grunt``` 打包工具几乎已是快要淘汰了（保守的说），因此这里笔者选择 ```Rollup``` 打包工具。

&ensp;&ensp; ```Rollup``` 是一个 JavaScript 模块打包器，可以将小块代码编译成大块复杂的代码。相比于 ```webpack``` 它更适合打包像 ```jQuery``` 这种 ```library ```文件。并且它的学习成本也相对较低，非常适合作为一个开源库的打包工具来使用。

&ensp;&ensp;通过以下命令对其进行安装
```bash
    $ npm install rollup --save-dev
```

&ensp;&ensp; ```Rollup```  与 ```webpack``` 一样都是可以通过命令行或配置文件，去指定项目打包文件以及生成文件，由于涉及的比较基础可以通过 [Rollup](http://www.rollupjs.com/) 的中文官网进行了解，这里笔者就不做基础的讲解。

&ensp;&ensp;在项目中创建  ```Rollup``` 的配置文件 ```rollup.config.js```，并为其进行简单的配置。
```javascript
    "use strict";
    const path = require("path");
    export default {
    	input: path.resolve(__dirname, "./src/jQuery.js"),
    	output: {
    		file: path.resolve(__dirname, "./dist/jQuery.js"),
    		format: "umd",
    	}
    };
```

### 5. 加入各种插件
&ensp;&ensp;似乎一切看上去都是那么简单，但我们还需要一些 ```Rollup``` 的插件用于完善我们的打包工具。

- ```rollup-plugin-eslint``` 用于汇总 ```Eslint``` 的配置
```bash
    $ npm install rollup-plugin-eslint -save-dev
```
更改配置文件 ```rollup.config.js```
```javascript
"use strict";
    const path = require("path");
    const eslintrc = require("./.eslintrc.js");
    const eslint = require("rollup-plugin-eslint");
    
    export default {
    	input: path.resolve(__dirname, "./src/jQuery.js"),
    	output: {
    		file: path.resolve(__dirname, "./dist/jQuery.js"),
    		format: "umd",
    	},
    	plugins: [
    		eslint(eslintrc)
    	]
    };
```

- ```rollup-plugin-commonjs``` 用来将 CommonJS 转换成 ES2015 模块的
```bash
    $ npm install rollup-plugin-commonjs --save-dev
```
更改配置文件 ```rollup.config.js``` 在 ```plugins``` 数组中添加 ```cjs()```，注意 ```rollup-plugin-commonjs``` 该用在其他插件转换你的模块之前 - 这是为了防止其他插件的改变破坏 CommonJS 的检测。

- ```rollup-plugin-uglify``` 是一个压缩代码文件的插件
```bash
    $ npm install rollup-plugin-uglify --save-dev
```
更改配置文件 ```rollup.config.js``` 在 ```plugins``` 数组中添加 ```uglify()```。

- 使用 Babel 和 Rollup 的最简单方法是使用 ```rollup-plugin-babel```
```bash
    $ npm install rollup-plugin-babel --save-dev
```

更改配置文件 ```rollup.config.js``` 在 ```plugins``` 数组中添加 如下代码：
```javascript
    babel({
	   exclude: "node_modules/**" // 忽略 node_modules 的代码
    })
```

在Babel实际编译代码之前，需要进行配置。在项目中创建 ```.babelrc``` 配置文件
```javascript
    {
    	"presets": [
    		["latest", {
    			"es2015": {
    				"modules": false
    			}
    		}]
    	],
    	"plugins": ["external-helpers"]
    }
```

&ensp;&ensp;这个设置有一些不寻常的地方。首先，我们设置 ```"modules": false```，否则 ```Babel``` 会在 ```Rollup``` 有机会做处理之前，将我们的模块转成 CommonJS，导致 ```Rollup``` 的一些处理失败。

&ensp;&ensp;其次，我们使用 ```external-helpers``` 插件，它允许 ```Rollup``` 在包的顶部只引用一次 ```“helpers”```，而不是每个使用它们的模块中都引用一遍（这是默认行为）

```bash
    $ npm install --save-dev babel-preset-latest babel-plugin-external-helpers
```

### 6. 配置 npm 的运行命令
&ensp;&ensp;通过配置 npm 运行命令配置 ```Rollup``` 打包的文件是否进行压缩，打开 ```package.json``` 文件，向 ```scripts``` 节点中添加以下代码：
```javascript
    "build": "./node_modules/.bin/rollup -w -c ./rollup.config.js",
	
	"build-min": "./node_modules/.bin/rollup -w -c ./rollup.config.js  --environment TARGET:min"
```
其中 ```build``` 命令用于不对生成后的文件进行代码压缩，```build-min``` 命令则是对生成后的文件进行代码压缩。

&ensp;&ensp;当然我们需要对 ```rollup.config.js``` 配置进行相应的修改，代码如下：
```javascript
    "use strict";
    const path = require("path");
    const eslintrc = require("./.eslintrc.js");
    const babel = require("rollup-plugin-babel");
    const eslint = require("rollup-plugin-eslint");
    const cjs = require("rollup-plugin-commonjs");
    const uglify = require("rollup-plugin-uglify");
    
    // 打包后生成 js 的顶部注释说明
    const banner =
    	"/*!\n" +
    	" * jQuery source code analysis v3.3.1\n" +
    	" * (c) 2018-" + new Date().getFullYear() + " H_VK\n" +
    	" * This is the source code of jquery source code analysis series.\n" +
    	" */";
    
    // 设置打包工具中所使用的插件
    const plugins = [
    	cjs(),
    	babel({
    		exclude: "node_modules/**" // 忽略 node_modules 的代码
    	}),
    	eslint(eslintrc)
    ];
    
    // 设置 Rollup 基础打包配置
    const config = {
    	input: path.resolve(__dirname, "./src/jQuery.js"),
    	output: {
    		file: "",
    		banner: banner,
    		format: "umd",
    		name: "jQuery",
    		globals: {
    			jQuery: "$"
    		}
    	},
    	plugins: plugins
    };
    
    // 获取打包配置的方法
    function getConfig(target) {
    	config.output.file = path.resolve(__dirname, "./dist/jQuery.js");
    	if (target === "min") {
    		config.output.file = path.resolve(__dirname, "./dist/jQuery.min.js");
    		plugins.push(uglify());
    	}
    	return config;
    };
    export default getConfig(process.env.TARGET);
```

### 7. 随便写个 Demo 验证一下吧
&ensp;&ensp;Nice!完成了完成了整个前端工程架构后我们就可以，开始写个 Demo 验证一下吧！

&ensp;&ensp;在项目中创建文件夹 ```src```，并在新增 ```jQuery.js``` 文件，内容如下：
```javascript
    "use strict";

    export default () => {
    	console.log("This is the source code of jquery source code analysis series");
    };
```

&ensp;&ensp;首先我们使用命令
```bash
    $ npm run build
```
用于测试生成的文件不进行代码压缩，控制台若出现如下提示，

![生成成功](https://img-blog.csdn.net/201803221700150?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

表示生成成功，并会在项目中生成 ```dist``` 文件夹，以及 ```dist``` 文件夹中 ```jQuery.js``` 文件。

&ensp;&ensp;使用命令
```bash
    $ npm run build-min
```
用于测试生成的文件进行代码压缩，控制台若出现如下提示，

![生成成功](https://img-blog.csdn.net/20180322170309126?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

表示生成成功，并会在项目中生成 ```dist``` 文件夹，以及 ```dist``` 文件夹中 ```jQuery.min.js``` 文件。

## 文章的最后

&ensp;&ensp;感谢您能细心的阅读到最后，同样也恭喜您成功构建了自己的工程目录。最后我们整个项目目录结构基本是这个样子的

![项目目录结构](https://img-blog.csdn.net/2018032217101236?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L2h2a0NvZGVy/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

若对本文章有疑问可以在下方评论区评论，或直接 [Issues](https://github.com/SilenceHVK/jQuery-source-code-analysis/issues)。

&ensp;&ensp;最后文章中的观点仅代表笔者，若对文章有不正确之处，请给予纠正。我会及时更正。文章源码地址为[https://github.com/SilenceHVK/jQuery-source-code-analysis/tree/project-construction](https://github.com/SilenceHVK/jQuery-source-code-analysis/tree/project-construction)
