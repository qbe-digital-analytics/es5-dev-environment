// eslint-disable-next-line no-useless-escape
WT.SPA.on('\/au\/portal\/quote\/vehicle.*#\/my-vehicle', function() {
  try {
    // Step 1: Select the element
    let element = document.querySelector('#findVehicle > div > div:nth-child(1) > div > div > div > div > label:nth-child(2) > span > span > input');

    // Step 2: Create a click event
    let event = document.createEvent('MouseEvent');
    event.initMouseEvent('click', true, true, window, 0, 0, 0, 0, 0, false, false, false, false, 0, null);

    // Step 3: Dispatch the event
    element.dispatchEvent(event);
    WT.trackGA.dlPush('Test 124', 'Variation 1');
  } catch (error) {
    window.dataLayer.push({
      event: 'standard',
      eventCategory: 'error',
      eventAction: 'optimize test 124 - omni - variant 1',
      eventLabel: error,
      nonInteraction: true,
    });
  }
});
