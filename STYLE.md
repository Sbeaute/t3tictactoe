# Style Guide

## Markdown

Use [remark-lint](https://github.com/wooorm/remark-lint). There's a nice [plugin
for Atom](https://atom.io/packages/linter-markdown). Have a look at the [default
style rules](https://github.com/wooorm/remark-lint/blob/master/doc/rules.md) and
our own [.remarkrc](.remarkrc) for non-default configuration options. These
rules are selected for readability of source code compatibility with GitHub
wiki features.

### HTML

Please refrain from using HTML inside markdown files, as a rule. Sometimes,
using HTML is the only way to accomplish something, like including an image with
a custom width attribute.




//<!DOCTYPE html>
<html>
    <head>
      <title>T3</title>
      <meta name="viewport" content="width=device-width, initial-scale=1">

      <!-- Do not add `link` tags-->
      <link rel="shortcut icon" type="image/x-icon" href="favicon.ico">

      <!-- Do not add `script` tags-->
      <script src="public/vendor.js" type="text/javascript" charset="utf-8" defer></script>
      <script src="public/application.js" type="text/javascript" charset="utf-8" defer></script>
    </head>
    <body>
      <h1>T3tictactoe</h1>
    </body>
</html>
