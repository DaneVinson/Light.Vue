// Simple function I pulled off the internet to convert wavelength in nanometers to HTML rbga.
function colorRgba(wl) {
  var R;
  var	G;
  var	B;

  if (wl >= 379 && wl < 440) {
    R = -1 * (wl - 440) / (440 - 379);
    G = 0;
    B = 1;
   } else if (wl >= 440 && wl < 490) {
     R = 0;
     G = (wl - 440) / (490 - 440);
     B = 1;  
  } else if (wl >= 490 && wl < 510) {
    R = 0;
    G = 1;
    B = -1 * (wl - 510) / (510 - 490);
  } else if (wl >= 510 && wl < 580) {
    R = (wl - 510) / (580 - 510);
    G = 1;
    B = 0;
  } else if (wl >= 580 && wl < 645) {
    R = 1;
    G = -1 * (wl - 645) / (645 - 580);
    B = 0.0;
  } else if (wl >= 645 && wl <= 781) {
    R = 1;
    G = 0;
    B = 0;
  } else {
    R = 0;
    G = 0;
    B = 0;
  }

  // intensty is lower at the edges of the visible spectrum.
  var	alpha;
  if (wl > 781 || wl < 379) {
    alpha = 0;
  } else if (wl > 700) {
    alpha = (781 - wl) / (781 - 700);
  } else if (wl < 420) {
    alpha = (wl - 379) / (420 - 379);
  } else {
    alpha = 1;
  }

  var colorSpace = ["rgba(" + (R * 100) + "%," + (G * 100) + "%," + (B * 100) + "%, " + alpha + ")", R, G, B, alpha]

  // colorSpace is an array with 5 elements.
  // The first element is the complete code as a string.  
  // Use colorSpace[0] as is to display the desired color.  
  // use the last four elements alone or together to access each of the individual r, g, b and a channels.  
  return colorSpace[0];
}

var vm = new Vue({
    el: '#app',
    data: {
      wavelength: 700,
    },
    methods: {
      getColor : function() {
        return colorRgba(this.wavelength);
      },
      getWidth : function() {
        return this.wavelength + 'px';
      },
      setColor : function(nm) {
        this.wavelength = nm;
      }
    }
});
