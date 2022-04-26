import React from 'react';
import { Header as AzureDevopsHeader, TitleSize } from "azure-devops-ui/Header";
import { IHeaderCommandBarItem } from 'azure-devops-ui/HeaderCommandBar';

interface Props {
}

export const Header: React.FC<Props> = props => {
    const commandBarItems: IHeaderCommandBarItem[] = [];
    
    return <AzureDevopsHeader
    title={"Header title"}
    commandBarItems={commandBarItems}
    titleSize={TitleSize.Medium}
    titleIconProps={{ iconName: "OpenSource" }}
    titleAriaLevel={3}
/>
}