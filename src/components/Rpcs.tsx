import React, { useEffect, useState } from "react";

const Rpcs = (props: any) => {
	return (
		<div className="rpcs">
			{props.rpcsStatuses.map((e) => (
				<div key={e.key} className="rpcs-status">
					<div className={e.status ? "rpc-green" : "rpc-red"}></div>
					<div>{e.title}</div>
				</div>
			))}
		</div>
	);
};

export default Rpcs;
