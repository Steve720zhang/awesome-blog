import React from 'react';

export default function IndexPage(props: any) {
  React.useEffect(() => {
    if (window.location.pathname === '/') {
      props?.history?.replace?.('/homepage');
    }
  }, []);
  return <div>{props.children}</div>;
}
