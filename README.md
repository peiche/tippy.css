# tippy.css
## Pure CSS tooltips.
Create tooltips with ease, without JavaScript.

### How to use

First, include the stylesheet at the top of your page.

```html
<link rel="stylesheet" href="path/to/tippy.min.css">
```

For the simplest case, add the property `data-tippy` to an element with your tooltip text as the value. You can do this to links, spans, divs, and even buttons. (Well, in most browsers. We'll get to that.)

```html
<button data-tippy="I am a tooltip!">...</button>
<a href="http://www.google.com" data-tippy="Link to Google">...</a>
<span data-tippy="Hello world">...</span>
<div data-tippy="Full width element">...</div>
```

### Tooltip positions

By default, tooltips appear below the element to which they belong. By including the `data-tippy-pos` property, you can control how they appear. There are four potential values: "up", "down", "left", and "right".

```html
<button data-tippy="I am a tooltip!" data-tippy-pos="up">
<button data-tippy="I am a tooltip!" data-tippy-pos="down">
<button data-tippy="I am a tooltip!" data-tippy-pos="left">
<button data-tippy="I am a tooltip!" data-tippy-pos="right">
```

### Special animations

The tooltips don't have much by way of default animation. They fade in, but that's it. There are two optional animation types, however. Include the `data-tippy-animate` property and one of two values, "slide" or "bubble".

### Browser support

Tippy.css has been tested in Internet Explorer 9-11 and the latest versions of Chrome, Firefox, Edge (yay Windows 10 Insider program), and Vivaldi (my browser of choice).

### Known issues

* Tooltips are created by using the `::before` and `::after` pseudo-elements, so tooltips on any element that doesn't have those, like images or input fields, won't appear.

 You can work around this by wrapping the element in a span or a div, though, like this:

 ```html
 <div data-tippy="Super awesome picture">
    <img src="cats-rule.jpg">
 </div>
```

* If your stylesheet is using pseudo-elements on certain elements, you will run into conflicts. This will result in weird behavior or non-working tooltips.

* HTML inside tooltips will not work, so don't even try.

* Tooltips don't work on `<button>` elements in Internet Explorer or Edge. I don't know why. :/

### License

Tippy.css has been released under the [MIT license](LICENSE).
