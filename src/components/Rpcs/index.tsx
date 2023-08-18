import React, { useEffect, useState } from "react";
import { RpcStyled, RpcsStatus, RpcGreen, RpcRed } from "./styles";

const Rpcs = (props: any) => {
	return (
		<RpcStyled>
			{props.rpcsStatuses.map((e: any) => (
				<RpcsStatus key={e.key}>
					{e.status ? <RpcGreen/> : <RpcRed/>}
					<div>{e.title}</div>
				</RpcsStatus>
			))}
		</RpcStyled>
	);
};

export default Rpcs;
