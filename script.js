function volume_sphere() {
    // Get the radius input value from the form
    const radiusInput = document.getElementById('radius');
    const radius = parseFloat(radiusInput.value);

    // Check if the radius is a valid number
    if (!isNaN(radius)) {
        // Calculate the volume of the sphere
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

        // Display the calculated volume in the "volume" field
        const volumeField = document.getElementById('volume');
        volumeField.value = volume.toFixed(2); // Display volume with two decimal places
    } else {
        // If the input is not a valid number, clear the "volume" field
        const volumeField = document.getElementById('volume');
        volumeField.value = '';
    }
}


window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
