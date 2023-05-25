import { useEffect, useState } from "react";
import { useStores } from "../../stores";
import { NetSwitchForm, Text } from "./styles";
import { Switch, Popconfirm, message, Alert } from "antd";
import { useStore as useStoreNanoStores } from '@nanostores/react'
import { useNavigate, useLocation } from "react-router-dom";

const NetSwitch = (props : any) => {
    const navigate = useNavigate();
	const location = useLocation();
    const { storeSwitch } = useStores();
    const storeSwitchRepository = useStoreNanoStores(storeSwitch.repository);

    const [check, setCheck] = useState(false);

    const switchHandler = () => {
        if (!check) {
            setCheck(true);
        }
    }


    useEffect(() => {
        // console.log("Current isTestNet param");
        // console.log("FROM:");
        // console.log(storeSwitchRepository.isTestNet);

        if (!check) {
            storeSwitch.setIsTestNet(false);
        }
        else {
            storeSwitch.setIsTestNet(true);
            message.success("You are using TestNet ver. of Tonana", 5);
        }

        // console.log("TO:");
        // console.log(storeSwitchRepository.isTestNet);
	}, [check])


    return (
        <NetSwitchForm>

            <Popconfirm
            title="Do you really want to switch from TestNet to MainNet?"
            okText="Yes"
            okType="default"
            cancelText="No"
            onConfirm={() => {
                if (check && location.pathname === "/nft") {
                    message.error("The NFT can only be used with TestNet", 5);
                    navigate("/swap");
                    props.setFormType('swap');    
                }
                setCheck((pre) => !pre)
            }}
            disabled = {!check}>

                <Switch
                style={{}}
			    	defaultChecked = {false}
                    checked= {check}
			    	unCheckedChildren = {"Main Net"}
			    	checkedChildren = {"Test Net"}

                    onClick={() => {switchHandler()}}
			    />
            </Popconfirm>
            
        </NetSwitchForm>
    );
}

export default NetSwitch;