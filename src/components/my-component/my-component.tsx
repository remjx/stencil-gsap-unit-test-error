import { Component, Prop, h, Element } from '@stencil/core';
import { format } from '../../utils/utils';
import gsap from 'gsap'

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first: string;

  /**
   * The middle name
   */
  @Prop() middle: string;

  /**
   * The last name
   */
  @Prop() last: string;

  @Element() el: HTMLMyComponentElement

  componentDidLoad() {
    const demo: HTMLDivElement = this.el.shadowRoot.querySelector("#demo")
    gsap.to(demo, { x: "50%" }) // Moves text from left side of screen to center of screen
  }

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return <div id="demo">Hello, World! I'm {this.getText()}</div>;
  }
}
