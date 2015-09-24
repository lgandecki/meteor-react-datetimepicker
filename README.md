blaze-datetimepicker
--------------------------

Wraps `tsega:bootstrap3-datetimepicker`, so you can just `<ReactDatetimePicker />` and be done with it.

Usage
================

```
meteor add 3stack:react-datetimepicker
```

Example
================


```jsx
<ReactDatetimePicker
    configuration='configurationName'
    inputProps={{className:'form-control'}},
    value={this.state.date}
    onChange={this.updateDate}
/>

```

Note
================

You'll probably want to add a css class called
```css
.position-relative { position: relative; }
```
