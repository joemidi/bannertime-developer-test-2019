# developer-interview-test-2017

Its Duncan Bannertime!


## Usage

Use `gulp` to automatically launch the banner into the browser with browsersync all your changes will be reflected in the browser with each file save.

Use `gulp prod` to generate a ZIP file of all the assets of the banner, these will all have been minified as well.

Use `gulp backup-gen` to automatically generate backup images for each banner.

### Creating Elements

You can create DOM elements using the the `smartObject` function, this will initialise a `<div>` with the default style of: `position: absolute; top: 0; left: 0;`.

You are able to set a background image, or set a nested image as a `<img>` element.

There are helper functions such as `center`, `centerHorizontal` and `centerVertical` to help you position the element.

Other settings are set using a helper function on the element which uses GSAP to process. So `this.logo.set({autoAlpha: 0, scale: 0.4});` is the same as `TweenLite.set(this.logo, {autoAlpha: 0, scale: 0.4});`

### Animating

The banner animation is run by the `animate` function.

By default we are using TweenLite with TimelineLite, but you can change which flavour of GSAP as you require.

For more information about animating using GSAP head to [www.greensock.com](http://www.greensock.com)

## Instructions

The aim of this to test is to try and create a 160x600 version of the existing banner. You will need to follow the storyboard you have been provided to see how the finished 160x600 banner should look.

You should not overwrite the existing banner but make a copy that you can amend to make the correct size.

Good Luck!

## Working with bannertime
### Quick Start:

### Install Yeoman, Yarn, Gulp and Bannertime
`$ npm i -g yo yarn gulp generator-bannertime`

### Make a new directory and cd into it
`$ mkdir my-campaign`
`$ cd my-campaign`

### Run Bannertime
`$ yo bannertime`

### Copy existing banner
`$ yo bannertime:copy`

## Notes:
It is important to check out [www.greensock.com/gsap](https://greensock.com/gsap) to get an understanding of how the GSAP animation library works. 

* scale: - Allows you to change the size of object.
* x: Horizontal plane
* y: Vertical plane
