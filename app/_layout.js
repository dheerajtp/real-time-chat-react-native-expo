import { Slot } from "expo-router";

import "../global.css";
import { Provider } from "react-redux";
import store from "../state/store";
import { View } from "react-native";

const layout = () => {
  return (
    <View className="flex-1">
      <Provider store={store}>
        <Slot />
      </Provider>
    </View>
  );
};

export default layout;
