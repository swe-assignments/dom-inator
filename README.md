# DOMinator

## Getting started

This assignment is distributed through github classrooms - you don't need to fork it, you can just accept the assignment and click *open in vs code*.

Once downloaded, you should run
```
npm install
```
to make sure you have the dependencies you need, and then
```
npm run dev
```
to start up the development server.

## Todo

### Case switcher

 - [x] As you go, edit the `README.md` file. Putting a `x` inside the `[ ]` will mark each task as complete.

 - [ ] Add a `<script>` tag to hook up `case-switcher.html` file with `caseSwitcher.js`. (You need to use relative linking - be aware that the javascript files are in a different folder to the html files.) Make sure you add the `defer` attribute to the `<script>` tag!
 
 - [ ] In the `case-switcher.html` file, you will find a `<p>` element. Don't change the contents of it. Add three `<button>`s to this file with ids of `quiet-btn`, `loud-btn` and `sarc-btn`.
 
 - [ ] Edit the `caseSwitcher.js` to listen for the click event of each button. When `quiet-btn` is clicked, the text in the `<p>` element should be changed to *lowercase*; when `loud-btn` is clicked it should be changed to *UPPERCASE*; when `sarc-btn` is clicked it should be changed to `sArCaSm CaSe`

(In sarcasm case, the alphabetic letters alternate from lower to uppercase and all space and punctuation is ignored.)
