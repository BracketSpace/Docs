import React, {type ReactNode} from 'react';
import DocsVersionDropdownNavbarItem from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import type DocsVersionDropdownNavbarItemType from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import type {WrapperProps} from '@docusaurus/types';
import {useLocation} from '@docusaurus/router';

type Props = WrapperProps<typeof DocsVersionDropdownNavbarItemType>;

export default function DocsVersionDropdownNavbarItemWrapper(props: Props): ReactNode {
  const {pathname} = useLocation();
  const {docsPluginId} = props;
  
  // Only show the version dropdown when on notification pages
  if (docsPluginId === 'notification' && !pathname.includes('/notification')) {
    return null;
  }
  
  return (
    <>
      <DocsVersionDropdownNavbarItem {...props} />
    </>
  );
}
