import React from "react";

import { View } from "native-base";

const Separator = (props) => {
  return <View style={{ marginVertical: props.amount, ...props.style }}></View>;
};

export default Separator;
