document.addEventListener("DOMContentLoaded", function() {
    const colorPickerInput = document.getElementById("colorPicker");
    const redDecimalInput = document.getElementById("redDecimal");
    const greenDecimalInput = document.getElementById("greenDecimal");
    const blueDecimalInput = document.getElementById("blueDecimal");
    const colorPreview = document.getElementById("colorPreview");
    const hexCodeInput = document.getElementById("hexCode");
    const colorForm = document.getElementById("colorForm");
  
    colorForm.addEventListener("input", updateColor);
  
    function updateColor() {
      const selectedColor = colorPickerInput.value;
      const rgbValues = getRGBValues(selectedColor);
  
      const red = rgbValues.red;
      const green = rgbValues.green;
      const blue = rgbValues.blue;
  
      redDecimalInput.value = red;
      greenDecimalInput.value = green;
      blueDecimalInput.value = blue;
  
      const hexCode = rgbToHex(red, green, blue);
      const color = `rgb(${red}, ${green}, ${blue})`;
  
      colorPreview.style.backgroundColor = color;
      hexCodeInput.value = hexCode;
    }
  
    function getRGBValues(color) {
      const match = color.match(/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i);
      return match
        ? {
            red: parseInt(match[1], 16),
            green: parseInt(match[2], 16),
            blue: parseInt(match[3], 16),
          }
        : { red: 0, green: 0, blue: 0 };
    }
  
    function rgbToHex(r, g, b) {
      const toHex = (c) => {
        const hex = parseInt(c).toString(16);
        return hex.length === 1 ? "0" + hex : hex;
      };
  
      return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
  });
  