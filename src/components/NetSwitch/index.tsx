import { useEffect, useMemo, useState } from "react";
import { useStores } from "../../stores";
import { NetSwitchForm, Switcher, Text } from "./styles";


const NetSwitch = () => {
    const { storeSwitch } = useStores();

    const switchHandler = () => {
        storeSwitch.setIsTestNet(!(storeSwitch.repository.get().isTestNet));
        console.log(storeSwitch.repository.get().isTestNet);
    }

    return (
        <NetSwitchForm>
            {/* <Text>Would you like to switch the Net?</Text> */}

            <Switcher
				defaultChecked = {false}
				unCheckedChildren = {"Main Net"}
				checkedChildren = {"Test Net"}
                onClick={switchHandler}
			/>
            
        </NetSwitchForm>
    );
}

export default NetSwitch;