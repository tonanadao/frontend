import React, { useEffect, useState } from "react";
import { RpcSyled, RpcsStatus, RpcGreen, RpcRed } from "./styles";

const Rpcs = (props: any) => {
	return (
		<RpcSyled>
			{props.rpcsStatuses.map((e: any) => (
				<RpcsStatus key={e.key}>
					{e.status ? <RpcGreen/> : <RpcRed/>}
					<div>{e.title}</div>
				</RpcsStatus>
			))}
		</RpcSyled>
	);
};

export default Rpcs;
