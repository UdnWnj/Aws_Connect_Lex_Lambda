var Aws = require('aws-sdk');
const Https = require('https');
const Location = require('aws-sdk/clients/location');
const sns = new Aws.SNS();
const location = new Location({ region: Aws.config.region });
const {
  ProductInfo,
  ProductSize,
  ProductInfo_gas,
  ProductConservation,
  ProductPlaceOfOrigin,
  ProductNSF,
  ProductClean,
  ProductInstallation,
  ProductWaterPipeLength,
  ProductModel,
  ProductSerialNumber,
  ProductRepair,
  ProductTemperature,
  ProductPowerSupply,
  ProductIdle,
  ProductExtensionCord,
  ProductFilterVolume,
  ProductMaterial,
  ProductReplace,
  ProductReplaceError,
  ProductReplaceError_gas,
  ProductInstallation_gas,
} = require('./template_info');

exports.handler = (event, context, callback) => {
  try {
    console.log(`Request received: ${JSON.stringify(event)}`);
    dispatch(event, (response) => {
      console.log(
        `进入processProductInfo(),已执行完毕,返回值是:${JSON.stringify(
          response
        )}`
      );
      callback(null, response);
    });
  } catch (err) {
    console.log('出错了：' + err);
    callback(err);
  }
};

function dispatch(event, callback) {
  const response = {
    sessionState: {
      dialogAction: {
        slotToElicit: 'input',
        type: 'ElicitSlot',
      },
      intent: {
        name: event.interpretations[0].intent.name,
        state: 'InProgress',
      },
    },
    messages: [
      {
        contentType: 'CustomPayload',
        content: null,
      },
    ],
  };
  if (event.interpretations[0].intent.name == 'testIntent') {
    processtestIntent(event, callback);
  } else if (event.interpretations[0].intent.name == 'ProductInfo') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductInfo,
    });
  } else if (event.interpretations[0].intent.name == 'ProductSize') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductSize,
    });
  } else if (event.interpretations[0].intent.name == 'ProductConservation') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductConservation,
    });
  } else if (event.interpretations[0].intent.name == 'ProductPlaceOfOrigin') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductPlaceOfOrigin,
    });
  } else if (event.interpretations[0].intent.name == 'ProductNSF') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductNSF,
    });
  } else if (event.interpretations[0].intent.name == 'ProductClean') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductClean,
    });
  } else if (event.interpretations[0].intent.name == 'ProductInstallation') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductInstallation,
    });
  } else if (event.interpretations[0].intent.name == 'ProductWaterPipeLength') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductWaterPipeLength,
    });
  } else if (event.interpretations[0].intent.name == 'ProductModel') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductModel,
    });
  } else if (event.interpretations[0].intent.name == 'ProductSerialNumber') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductSerialNumber,
    });
  } else if (event.interpretations[0].intent.name == 'ProductRepair') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductRepair,
    });
  } else if (event.interpretations[0].intent.name == 'ProductTemperature') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductTemperature,
    });
  } else if (event.interpretations[0].intent.name == 'ProductPowerSupply') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductPowerSupply,
    });
  } else if (event.interpretations[0].intent.name == 'ProductIdle') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductIdle,
    });
  } else if (event.interpretations[0].intent.name == 'ProductExtensionCord') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductExtensionCord,
    });
  } else if (event.interpretations[0].intent.name == 'ProductFilterVolume') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductFilterVolume,
    });
  } else if (event.interpretations[0].intent.name == 'ProductMaterial') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductMaterial,
    });
  } else if (event.interpretations[0].intent.name == 'ProductReplace') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductReplace,
    });
  } else if (event.interpretations[0].intent.name == 'ProductReplaceError') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductReplaceError,
    });
  } else if (event.interpretations[0].intent.name == 'ProductInfo_gas') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductInfo_gas,
    });
  } else if (event.interpretations[0].intent.name == 'ProductReplaceError_gas') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductReplaceError_gas,
    });
  }else if (event.interpretations[0].intent.name == 'ProductInstallation_gas') {
    response.messages[0].content = JSON.stringify({
      templateType: 'ListPicker',
      version: '1.0',
      data: ProductInstallation_gas,
    });
  }
  callback(response);
}

function processtestIntent(event, callback) {
  var slot1;
  var slot2;
  var session1;
  var session2;
  var message;
  var intentName = event.interpretations[0].intent.name;
  var confirmState = event.interpretations[0].intent.confirmationState;

  if (event.sessionState.sessionAttributes != null) {
    if (event.sessionState.sessionAttributes.session1 != null) {
      session1 = event.sessionState.sessionAttributes.session1;
    }
  }

  if (event.sessionState.sessionAttributes != null) {
    if (event.sessionState.sessionAttributes.session2 != null) {
      session2 = event.sessionState.sessionAttributes.session2;
    }
  }

  if (event.interpretations[0].intent.slots.slot1 != null) {
    slot1 = event.interpretations[0].intent.slots.slot1.value.interpretedValue;
  } else {
    if (event.sessionState.sessionAttributes != null) {
      if (event.sessionState.sessionAttributes.slot1 != null) {
        slot1 = event.sessionState.sessionAttributes.slot1;
      }
    }
  }

  if (event.interpretations[0].intent.slots.slot2 != null) {
    slot2 = event.interpretations[0].intent.slots.slot2.value.interpretedValue;
  } else {
    if (event.sessionState.sessionAttributes != null) {
      if (event.sessionState.sessionAttributes.slot2 != null) {
        slot2 = event.sessionState.sessionAttributes.slot2;
      }
    }
  }

  if (slot1 == null) {
    message = '请输入曹植1';
    callback(
      ElicitSlotMessage(
        intentName,
        'slot1',
        slot1,
        slot2,
        (session1 = '1'),
        session2,
        message
      )
    );
  } else if (slot2 == null) {
    message = '请输入曹植2';
    callback(
      ElicitSlotMessage(
        intentName,
        'slot2',
        slot1,
        slot2,
        session1,
        session2,
        message
      )
    );
  } else {
    callback(confirm(intentName, slot1, slot2, session1, session2));
  }
}

function ElicitSlotMessage(
  intentName,
  slotName,
  slot1,
  slot2,
  session1,
  session2,
  message
) {
  return {
    sessionState: {
      sessionAttributes: {
        slot1: slot1,
        slot2: slot2,
        session1: session1,
        session2: session2,
      },
      dialogAction: {
        slotToElicit: slotName,
        type: 'ElicitSlot',
      },
      intent: {
        name: intentName,
        state: 'InProgress',
      },
    },
    messages: [
      {
        contentType: 'PlainText',
        content: message,
      },
    ],
  };
}

function confirm(intentName, slot1, slot2, session1, session2) {
  return {
    sessionState: {
      sessionAttributes: {
        slot1: slot1,
        slot2: slot2,
        session1: session1,
        session2: session2,
      },
      dialogAction: {
        type: 'ConfirmIntent',
      },
      intent: {
        name: intentName,
        state: 'Fulfilled',
      },
    },
  };
}
