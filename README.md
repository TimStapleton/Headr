# Headr
Minimalistic Header made of the most trending landing parts.
I am using Zurb's Foundation Framework to create markup with ease.
So everyone can just clone this project and strat his own site creation with this basic handsome Header ready.

##What it consists of
I've colledcted all my favourite parts into this tiny simple page. So there they are:
##### - Parallax effect
##### - Image Blur effect
##### - Open Sans google font
##### - WOW animation effects

##Overview
###1. Markup
I am using Jade (which I highly recommend for everyone to use) to create landing pages and templates,
so all the DOM you nedd you can find in index.jade file (To compile .jade and .scss also I am using [Prepros](https://prepros.io/))
###2. Style
As Foundation provides us with "app.scss" file where we can include framework's modules and write our own styles
i've put all needed styles here()
###3. JavaScript
####a) Scroll Effects
In the [scroll.js](js/scroll.js) file you can find Parallax effect preset and background image filter effects<br>
They are realized here because theese effects' main parameter is "how much User has scrolled the page from the top"
#####Algorythm is:
1) We override window's scroll function so we know how much User has scrolled from the top in pixels (pxScroll variable stands for it)<br>
2) Then we get Users's screen height and based on it we have scroll in percentage
3) With some really simple algorythms and JavaScript's ability to change DOM's css we use 'transform:translate()' to create Parallax effect and 'filter: blur() brightness()' to blur and darken background image as we scroll the page.
####b) Header image randomizer
If you have mentiod tiny "P.S." note which tells you to refresh the page, you probably found out that header's image changes each time you refresh the page. This magic algorythm is quite simple:<br>
1) I've added 'onload = "changeImage()"' parameter to body in markup, so when page loads, the "changeImage" function is called<br>
2) In [imageChanger.js](js/imageChanger.js) you can find two functions<br>
  - First one generates random integer from minimum to maximum (inclusive) -  this number is called "seed"
  - The other one sets background image based on seed
<br><br>
###Thank You, Stranger, for visiting this tiny little repo, stored somwhere in a deep deeps of the net
#####P.S. I won't get unhappy if You will [donate](https://www.paypal.me/TimSurkov) for my next cup of tea in case you have enjoyed this project
