import React from 'react';
// import {View, WebView, Platform} from 'react-native';
// import {WebView} from 'react-native-webview';
// import QRCode from 'react-native-qrcode';

import {Container, Code} from './styles';

const Menu = () => {
  return (
    <Container>
      <Code>
        {/* <QRCode
          value="https://rothink.dev"
          size={80}
          bgColor="#FFF"
          fgColor="#8B10AE"
        /> */}
      </Code>
    </Container>
  );
};

export default Menu;
