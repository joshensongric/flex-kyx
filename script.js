// Initialise the UI library using your ui_key. Replace {{ui_key}} with your own UI key.
window.OpcUxSecureClient.init("ui_key");

// Set the user’s authentication token
window.OpcUxSecureClient.associate(
  "Bearer eyJhbGciOiJIUzI1NiJ9..7Bu0hXQSBKzhvJE8KOLNDUThbTQJyMArrSz0z1u4Fio",
  function () {
    console.log("associate success");

    // Initialise the KYC UI component
    window.OpcUxSecureClient.consumer_kyc().init({
      // The selector identifying the container where you want to display the component
      selector: "#kyc_consumer-container",

      //The KYC reference returned in the previous step
      reference: "ENV_USER_REF_TOKEN",

      // Specify a string of plain text styles to brand the UI elements shown in the KYC flow
      // "customCssStr": {{customCssStr}},

      // Specify a CSS file containing styles to brand the UI elements shown in the KYC flow
      // "customCss": {{customCss}},

      // Receive updates on the status of the KYC
      // Once the consumer has submitted all documentation you will receive a `kycSubmitted` message
      onMessage: function (message, additionalInfo) {
        console.log("Weavr KYC UI Component message: ", message, additionalInfo);
      },

      // Handle errors
      onError: function (message) {
        console.log("Weavr KYC UI Component error: ", message);
      },
    });
  }
);