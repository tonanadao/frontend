import { useEffect, useState } from "react";
import { useStores } from "../../stores";
import { NetSwitchForm, Text } from "./styles";
import { Switch, Popconfirm, message, Alert, Button, Space } from "antd";
import { useStore as useStoreNanoStores } from '@nanostores/react'
import { useNavigate, useLocation } from "react-router-dom";

const NetSwitch = (props : any) => {
    const navigate = useNavigate();
	const location = useLocation();
    const { storeSwitch } = useStores();
    const storeSwitchRepository = useStoreNanoStores(storeSwitch.repository);

    const [check, setCheck] = useState(false);
    const [title, setTitle] = useState("");

    useEffect(() => {

        if (!check) {
            storeSwitch.setIsTestNet(false);
            // console.log("from test to main")
            // console.log(storeSwitchRepository.isTestNet);
            setTitle("Do you want to switch it to the Testnet?");
        }
        else if (check) {
            storeSwitch.setIsTestNet(true);
            message.success("You are using TestNet ver. of Tonana", 2);
            // console.log("from main to test")
            // console.log(storeSwitchRepository.isTestNet);
            setTitle("Do you want to switch it to the Mainnet?");
        }
	}, [check])

    return (
        <NetSwitchForm>

            <Popconfirm
                title={title}
                okText="Yes"
                okType="default"
                cancelText="Cancel"
                onConfirm={() => {
                    if (check && location.pathname === "/nft") {
                       message.error("The NFT can only be used with TestNet", 5);
                       navigate("/swap");
                       props.setFormType('swap');    
                    } 
                    setCheck((pre) => !pre);
                }}>

                <Switch
			    	defaultChecked = {false}
                    checked= {check}
			    	unCheckedChildren = {"Mainnet"}
			    	checkedChildren = {"Testnet"}
			    />
            </Popconfirm>
            
        </NetSwitchForm>
    );
}

export default NetSwitch;