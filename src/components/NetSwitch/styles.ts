import styled from "styled-components";
import { Switch } from "antd";


export const NetSwitchForm = styled.div`
	display: flex;
    flex-direction: row;
    gap: 32px;
    justify-content: end;
`;

export const Text = styled.h2`
	font-size: 14px
`;

export const Switcher = styled(Switch)`
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.45);
`;