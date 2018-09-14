import * as React from 'react';
import template from './index.pug';

export default () => {
  if (typeof template === 'function') {
    return <div dangerouslySetInnerHTML={{ __html: template() }} />;
  }
  return <>test</>;
};
