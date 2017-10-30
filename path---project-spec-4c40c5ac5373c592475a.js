webpackJsonp([0x8a4d21ff0bf8],{"./node_modules/json-loader/index.js!./.cache/json/project-spec.json":function(e,n){e.exports={data:{site:{siteMetadata:{author:"Bartholomew Joyce"}},markdownRemark:{html:'<p><strong>Programming language for rapid experimentation and research</strong></p>\n<h2><strong>Introduction</strong></h2>\n<p>When software development teams are tasked with building a product on a tight\ndeadline they often opt for dynamic languages like JavaScript or Python.\nDynamic programming languages offer high iteration speed, concise syntax with\nless boilerplate code, imperceptibly fast compilation speeds, hot-swapping\ncode, and much more.</p>\n<p>Personally, I have a lot of experience with writing JavaScript. I’ve benefited\ngreatly from the flexibility and ease of development that comes along with the\nlanguage and it’s libraries. I have, however, also dealt with some of it’s\ndownsides. Some of these are problems specific to JavaScript, others are\nproblems that show up in any dynamic language.</p>\n<p>These problems generally stem from the lack of type checking and correctness\nchecking at compile-time. My browser, node server, and React Native iOS app\n<em>will</em> run my code even if it contains type errors, variable name spellings\nmistakes, calls to functions with the wrong number of arguments, and the list\ngoes on…</p>\n<p>In addition to leaving errors until runtime, code refactoring is also more\ndifficult. If I change the name of a field on this object, where else do\nI have to change the name? Renaming a field in a static language will result\nin type errors propping in all the places where the old name was used. The\nsame applies to changing the type of a field, or changing the arguments that\na function takes. In all these situations dynamic languages won’t complain.</p>\n<p>With this project I aim to build a programming language that is a mix of\ndynamic and static programming languages. Syntactically it will look and feel\nlike a dynamic language: concise and flexible. Structurally it will behave\nlike a strongly-typed static language. All types are known and understood at\ncompile-time. All runtime errors will be found at compile-time.*</p>\n<p>The syntax will be heavily inspired by modern ES6 JavaScript. The type system\nwill be heavily inspired by those found in functional programming languages\nsuch as OCaml: union types, polymorphic types.</p>\n<small>\n*Array out of bounds errors will be the only remaining runtime errors. I may\noffer a special syntax for explicitly handling this error. However, I don\'t\nwant to make this special syntax mandatory.\n</small>\n<h2><strong>Objectives</strong></h2>\n<p>1. <strong>Build a parser for my language.</strong></p>\n<p>The syntax will be heavily inspired by modern ES6 JavaScript.</p>\n<p>Syntax will include object destructuring:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token punctuation">{</span> x<span class="token punctuation">,</span> y <span class="token punctuation">}</span> <span class="token operator">=</span> myObject\n</code></pre>\n      </div>\n<p>As well as creating a new object by spreading an old one:</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> myNewObject <span class="token operator">=</span> <span class="token punctuation">{</span> <span class="token operator">...</span>myObject<span class="token punctuation">,</span> z<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>2. <strong>Build a type solver that uses Hindley-Milner type inference</strong></p>\n<p>This will probably be the most difficult part of the project. Type annotations\nare optional, in the spirit of dynamic programming. Global functions and\nvariables can be defined in any order.</p>\n<p>Functions are by default polymorphic, calling them with different argument\ntypes will lead to generating different versions of the same function.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">add</span><span class="token punctuation">(</span>x<span class="token punctuation">,</span> y<span class="token punctuation">)</span> <span class="token operator">=></span> x <span class="token operator">+</span> y\n\n<span class="token keyword">const</span> a <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span>     <span class="token comment" spellcheck="true">// Will be an integer</span>\n<span class="token keyword">const</span> b <span class="token operator">=</span> <span class="token function">add</span><span class="token punctuation">(</span><span class="token number">4.2</span><span class="token punctuation">,</span> <span class="token number">5.3</span><span class="token punctuation">)</span> <span class="token comment" spellcheck="true">// Will be a floating point</span>\n</code></pre>\n      </div>\n<p>Think of it as function templates in C++, or generics in Java, but instead\nof being explicit it is implicit.</p>\n<p>3. <strong>Build an interpreter that interprets byte code</strong></p>\n<p>In order to experience the performance benefits found in statically typed\nlanguages I’m going to have to generate some byte code to interpret.</p>\n<p>4. <strong>Build a cross platform user interface that executes your code as you\nwrite it</strong></p>\n<p>Dynamic languages have REPLs, I believe I can do one better by making a fully\ninteractive code execution environment where you see the results of your code\nalongside the code itself.</p>\n<p>I also don’t like the fact that static language compilers are usually big\nblack boxes where code goes in and executables come out. The GUI will allow\nyou to inspect the resulting byte code of your program and see exactly how\nyour high level programming is translated into low level operations.</p>\n<p>5. <strong>Create a small standard library, which supports data processing and graphical user interfaces.</strong></p>\n<p>A language is pointless without some libraries to interface with. If time\npermits I’d love to make a GUI library that allows users to quickly build\ninteractive programs.</p>\n<p>6. <strong>Analyse whether programming in the language I build is really as easy\nas programming in a dynamic language.</strong></p>\n<h2><strong>Methodology</strong></h2>\n<p>I will be building the project in C++, since it’s incredibly fast, yet not too\nlow level (as in C) where I have to implement every detail.</p>\n<p>1. <strong>The Parser</strong></p>\n<p>For parsing I will be writing my own recursive-descent parser.</p>\n<p>2. <strong>The Type Solver</strong></p>\n<p>For type inference I will implement the Hindley-Milner “Algorithm W”. I’ve\nonly ever read about Hindley-Milner, so it’ll be quite challenging to fully\nimplement it and have it be robust as well.</p>\n<p>Broadly speaking, the type solver will consist of several functions for\nanalysing AST nodes: <code>analyse_expression(e)</code> and <code>analyse_statement(e)</code>, and\none function for unification, <code>unify(a, b)</code>. The analyse functions inspect AST\nnodes and make logical deductions about their types. The deductions are stored\nin a type variable associated with the node. During the analysis, type\nvariables will also be unified together, to force them to be equal.</p>\n<p>3. <strong>The Interpreter</strong></p>\n<p>For the interpreter I will implement a byte code generator which takes my type\nchecked AST and spits out simple byte code that I can then interpret.</p>\n<p>When deciding on a virtual machine and set of opcodes to go with I will have\nto choose between a stack-based virtual machine or a register-based virtual\nmachine.</p>\n<p>From what I’ve read, stack-based virtual machines have simpler instruction\nsets since the operands are implicit: the <code>add_int</code> instruction doesn’t need\nto specify the register of the operands, since the instruction will just use\nwhatever is on the top of the stack. The equivalent register-based virtual\nmachine instruction has to specify all the operands explicitly:\n<code>%3 = add_int %1 %2</code>.</p>\n<p>Despite this disadvantage, I will probably go with a register-based virtual\nmachine in the end, for several reasons:</p>\n<ol>\n<li><strong>Fewer instructions</strong><br>\nWhat was left out from my <code>add_int</code> example is that in the stack-based\nvirtual machine the instruction must be preceded by two push instructions,\nand succeeded by one pop instruction.</li>\n<li><strong>No swapping or duplicating necessary</strong><br>\nWhen operations get complicated on the stack, operands sometimes need to\nbe swapped around or duplicated, which generally defeats the purpose of\nusing a stack. More instructions will need to be written just to get the\noperands on the stack in the right order for an instruction to run\nproperly.</li>\n<li><strong>Closer to LLVM IR</strong><br>\nIf time permits, it would be great to compile some of the code to actual\nmachine code. The easiest way to get this to work would be to produce LLVM\nIR and get the LLVM back-end to generate the machine code. Assuming I don’t\nwant to build a secondary byte code generator that goes from AST to IR, I\nwill want to build the IR directly from my byte code. If my virtual machine\nis register-based then there will be a clear 1-to-1 mapping onto IR.</li>\n</ol>\n<p>4. <strong>The Cross Platform GUI</strong></p>\n<p>In order to build a cross-platform GUI, I will learn to use Qt, which is a GUI\nlibrary written in C++ that is supported on many platforms. I will be building\nthe GUI as I go along instead of once the compiler is done, so that I get a\nsense of interactivity from the start.</p>\n<p>5. <strong>The Standard Library</strong></p>\n<p>In order to interface with external libraries, calling a C function from\nwithin the language (e.g. OpenGL), for example, I will include a special\nsyntax for describing functions that are defined externally.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token function">sin</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">__foreign__</span><span class="token punctuation">(</span><span class="token string">"math.sin"</span><span class="token punctuation">,</span> T<span class="token punctuation">,</span> T<span class="token punctuation">,</span> T<span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p>The <code>__foreign__</code> syntax has four arguments: (1) the external identifier name\nof the foreign function, (2) any type variables which need to be synthesised\nwhen type solving a call to <code>sin(x)</code>, (3) the argument type of the function,\n(4) the return type of the function.</p>\n<p>In the above example <code>sin()</code> is actually polymorphic. During byte code\ngeneration a callback will be run from within the compiler that requests an\nimplementation for the function where <code>T = Int</code>, or where <code>T = Float</code>,\ndepending on what it is called with. During type solving, <code>sin("Hey")</code> will\nalso technically be valid. However, during byte code generation the callback\nwill return to the compiler with an error instead of an implementation.</p>\n<p><strong>Testing</strong></p>\n<p>I will select a hand full of typical JavaScript programs and port them to my\nlanguage to demonstrate the language works and that the resulting code as\nuser friendly.</p>\n<h2><strong>Project Management</strong></h2>\n<p><strong>Project Timeline</strong></p>\n<p>Gantt chart: should be object specific\nObjectives listed and when you’ll do them</p>\n<p>Rows: objectives &#x26; deadlines\nColumns: times</p>\n<p><strong>Resources</strong></p>\n<ol>\n<li>C++ documentation</li>\n<li>Qt documentation</li>\n<li>LLVM documentation</li>\n<li>CS325 Compiler Design – Warwick University Course</li>\n<li>Introduction to Type Inference – Video Lecture</li>\n</ol>\n<p><strong>Risks</strong></p>\n<p>Risks and how I manage them</p>\n<ul>\n<li>Illness, …</li>\n<li>Loss of work, …</li>\n<li>Stealing, …</li>\n</ul>\n<p><strong>Ethical Considerations</strong></p>\n<p>Level 1: no ethical considerations to be made.</p>\n<h2><strong>References</strong></h2>\n<ol>\n<li>\n<p>C++ </p>\n</li>\n<li></li>\n<li></li>\n<li></li>\n<li>\n<p>Introduction to Type Inference – Video Lecture<br>\n<a href="https://www.youtube.com/watch?v=il3gD7XMdmA">https://www.youtube.com/watch?v=il3gD7XMdmA</a></p>\n</li>\n<li>\n<p>Hindley-Milner Algorithm W implementation in Python<br>\n<a href="https://github.com/rob-smallshire/hindley-milner-python">https://github.com/rob-smallshire/hindley-milner-python</a></p>\n</li>\n</ol>',excerpt:"Programming language for rapid experimentation and research Introduction When software development teams are tasked with building a product…",frontmatter:{title:"Project Specification",date:"October 19, 2017"}}},pathContext:{slug:"/project/spec/"}}}});
//# sourceMappingURL=path---project-spec-4c40c5ac5373c592475a.js.map