import { useEffect, useState } from "react";
import { Alert, Button, Space } from "antd";
import { useStore as useStoreNanoStores } from '@nanostores/react'
import { useStores } from "../../stores";


const SwitchAlert = () => {
    const { storeSwitch } = useStores();
    const storeSwitchRepository = useStoreNanoStores(storeSwitch.repository);

    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
      setShowAlert(true);
    }, [storeSwitchRepository.isTestNet])

    return(
      <>
  { showAlert &&
          <Alert
            message="When switching networks, double check your wallets"
            type="warning"
            showIcon
            action={ 
              <Space>
                <Button size="small" type="ghost" onClick={() => setShowAlert(false)}>
                  Accept
                </Button>
              </Space>
            }
          />}
      </>
      
            
    );
}

export default SwitchAlert;