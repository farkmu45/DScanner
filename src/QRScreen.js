import React from 'react';
import {Linking} from 'react-native';
import QRCodeScanner from 'react-native-qrcode-scanner';

function onSuccess(e) {
  Linking.openURL(e.data).catch(err => {
    console.error('error');
  });
}

export default function QRScreen() {
  return (
    <QRCodeScanner showMarker={true} reactivate={true} onRead={onSuccess} />
  );
}
