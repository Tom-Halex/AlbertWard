var createTextStyle = function(feature, resolution, labelText, labelFont,
                               labelFill, placement, bufferColor,
                               bufferWidth) {

    if (feature.hide || !labelText) {
        return; 
    } 

    if (bufferWidth == 0) {
        var bufferStyle = null;
    } else {
        var bufferStyle = new ol.style.Stroke({
            color: bufferColor,
            width: bufferWidth
        })
    }
    
    var textStyle = new ol.style.Text({
        font: labelFont,
        text: labelText,
        textBaseline: "middle",
        textAlign: "left",
        offsetX: 8,
        offsetY: 3,
        placement: placement,
        maxAngle: 0,
        fill: new ol.style.Fill({
          color: labelFill
        }),
        stroke: bufferStyle
    });

    return textStyle;
};

function stripe(stripeWidth, gapWidth, angle, color) {
    var canvas = document.createElement('canvas');
    var context = canvas.getContext('2d');
    canvas.width = screen.width;
    canvas.height = stripeWidth + gapWidth;
    context.fillStyle = color;
    context.lineWidth = stripeWidth;
    context.fillRect(0, 0, canvas.width, stripeWidth);
    innerPattern = context.createPattern(canvas, 'repeat');

    var outerCanvas = document.createElement('canvas');
    var outerContext = outerCanvas.getContext('2d');
    outerCanvas.width = screen.width;
    outerCanvas.height = screen.height;
    outerContext.rotate((Math.PI / 180) * angle);
    outerContext.translate(-(screen.width/2), -(screen.height/2));
    outerContext.fillStyle = innerPattern;
    outerContext.fillRect(0,0,screen.width,screen.height);

    return outerContext.createPattern(outerCanvas, 'no-repeat');
};
const arrivalDates = [
    "28/01/1916", "15/03/1916", "01/04/1916", "20/04/1916", "10/05/1916",
    "01/06/1916", "20/06/1916", "15/07/1916", "01/08/1916", "15/08/1916",
    "01/09/1916", "20/09/1916", "01/10/1916", "15/10/1916", "01/11/1916"
];

// Convert date strings to Date objects for comparison
const parseDate = (dateStr) => {
    const [day, month, year] = dateStr.split('/');
    return new Date(`${year}-${month}-${day}`);
};

const parsedDates = arrivalDates.map(parseDate);
console.log(Destinations_2)
// Assuming you already have features in Destinations_2
const allFeatures = Destinations_2.features;
const featureDates = allFeatures.map(feature => {
    const arrivalDa = feature.properties['Arrival Da'];
    return parseDate(arrivalDa);
});

// Initialize the slider and label
const dateSlider = document.getElementById('dateSlider');
const dateLabel = document.getElementById('dateLabel');

// Function to update map features visibility based on slider value
function updateFeatures(index) {
    const selectedDate = parsedDates[index];
    dateLabel.textContent = `Show points up to: ${selectedDate.toLocaleDateString()}`;

    allFeatures.forEach((feature, idx) => {
        const featureDate = featureDates[idx];
        console.log(feature.properties['Arrival Da'], featureDate);
        if (featureDate <= selectedDate) {
            feature.set('visible', true);  // Show feature
        } else {
            feature.set('visible', false);  // Hide feature
        }
    });

    // Re-render map to apply visibility changes
    map.render();
}

// Slider event listener to update features
dateSlider.addEventListener('input', () => {
    updateFeatures(dateSlider.value);
});

// Initial call to display features based on default slider value
updateFeatures(dateSlider.value);
