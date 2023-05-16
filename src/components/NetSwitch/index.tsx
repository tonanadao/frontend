import { useEffect, useMemo, useState } from "react";
import { useStores } from "../../stores";
import { NetSwitchForm, Text } from "./styles";
import { Switch, Popconfirm, message } from "antd";
import { useStore as useStoreNanoStores } from '@nanostores/react'

const NetSwitch = () => {
    const { storeSwitch } = useStores();
    const storeSwitchRepository = useStoreNanoStores(storeSwitch.repository);

    const [check, setCheck] = useState(false);

    const switchHandler = () => {
        if (!check) {
            setCheck(true);
        }
    }


    useEffect(() => {
        console.log("Current isTestNet param");
        console.log("FROM:");
        console.log(storeSwitchRepository.isTestNet);

        if (!check) {
            storeSwitch.setIsTestNet(false);
        }
        else {
            storeSwitch.setIsTestNet(true);
            message.success("You are using TestNet ver. of Tonana", 5);
        }

        console.log("TO:");
        console.log(storeSwitchRepository.isTestNet);
	}, [check])


    return (
        <NetSwitchForm>

            <Popconfirm
            title="Do you really want to switch from TestNet to MainNet?"
            okText="Yes"
            cancelText="No"
            onConfirm={() => {setCheck((pre) => !pre)}}
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