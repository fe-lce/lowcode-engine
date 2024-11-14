import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export default function ToIndex(): JSX.Element {
  return (
    <BrowserOnly>
      {() => {
        /**
         * 跳转到首页
         */
        window.location.href = '/docs/guide/quickStart/intro';
        return <></>;
      }}
    </BrowserOnly>
  );
}
