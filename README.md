# developer-interview-test-2017
# BREIF

The aim of this to test is to try and create a 160x600 version of the existing banner. You will need to follow the storyboard.jpg you have been provided within the src/developer-interview-text-2017-300x250/images/ to see how the finished 160x600 banner should look.

You should not overwrite the existing banner but make a copy that you can amend to make the correct size.

Good Luck!![storyboard-160x600.jpg](https://bitbucket.org/repo/x8Xo98z/images/970992812-storyboard-160x600.jpg)

##How to use the repo

In order to use this repo please fork it by using the following instructions.

* 1) Click the + icon on the side bar on the right. 
* 2) Click on fork this repository.

Once the task has been completed push the work back up to your forked repo and add **dev-kp** to it so the challenge can be assesed. 

## Working with bannertime
### Quick Start:

#### Setup - Install Gulp Yeoman and Bannertime:
[Node.js](https://nodejs.org/en/) To install Node.js we don’t use the standard installer, instead we use nvm a Node version manager, which allows you to switch between Node versions depending on the project.

```bash
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.30.1/install.sh | bash
```

You may find that nvm is still unavailable after restarting Terminal, in this case you will need to add it to your ~/.bash_profile

To edit your ~/.bash_profile:
```bash
vim ~/.bash_profile
```

And add these lines:
```bash
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh" # This loads nvm
```
Restart your terminal

Install and Use npm Now that we have nvm installed, we now can use it to manage our Node versions. We are currently using the latest stable version of Node.
```bash
nvm install stable
nvm use stable
nvm alias default node
```

[Gulp](http://gulpjs.com/) Our prefered task runner is Gulp, we use this to automate processes such as compiling SASS into CSS, checking our Javascript files for syntax errors and minifying our image files.
```bash
npm install --global gulp
```

[Yeoman](http://yeoman.io/) helps you to kickstart new projects, prescribing best practices and tools to help you stay productive, at the moment we only really use Yeoman for Bannertime.
```bash
npm install --global yo
```

[Bannertime](https://github.com/pyramidium/generator-bannertime) is a yeoman generator we built in-house to help with the creation of banners. It provides you with some of the best practises for creating HTML5 banners, and we currently use it on all our campaign projects.
```bash
npm install --global generator-bannertime
```

### clone the repo
`$ git clone https://username@bitbucket.org/zlalani/developer-interview-test-2017.git`

## CD into the project folder
`$ cd developer-interview-test-2017/`

###Run yarn istall
`$ yarn`

### Run Gulp
`$ gulp`

### Copy existing banner
`$ yo bannertime:copy`

## Notes:
It is important to check out [www.greensock.com/gsap](https://greensock.com/gsap) to get an understanding of how the GSAP animation library works. 

* scale: - Allows you to change the size of object.
* x: Horizontal plane
* y: Vertical plane

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