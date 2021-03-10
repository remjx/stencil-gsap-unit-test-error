# Stencil & GSAP Compatibility Issue

When using the [GSAP](https://github.com/greensock/GSAP) animation library, Stencil unit tests fail with this error:

```
TypeError: Cannot read property 'setTimeout' of undefined
    at requestAnimationFrame (node_modules/@stencil/core/mock-doc/index.cjs:3803:17)
    at _tick (node_modules/gsap/dist/gsap.js:1190:24)
    at Object.wake (node_modules/gsap/dist/gsap.js:1229:11)
    at _wake (node_modules/gsap/dist/gsap.js:1259:38)
    at node_modules/gsap/dist/gsap.js:3564:5
    at node_modules/gsap/dist/gsap.js:2:66
    at Object.<anonymous> (node_modules/gsap/dist/gsap.js:5:2)
```

## Minimal reproduction

In the default component,
1. `import { gsap } from 'gsap'`
2. and a basic gsap animation to animate the rendered text:

```
componentDidLoad() {
    const demo: HTMLDivElement = this.el.shadowRoot.querySelector("#demo")
    gsap.to(demo, { x: "50%" }) // Moves text from left side of screen to center of screen
}
```

Then, trying to run the default unit test with `npm run test.spec` causes the above error.

## Notes

This repo was bootstrapped with the [Stencil Component Starter](https://github.com/ionic-team/stencil-component-starter)