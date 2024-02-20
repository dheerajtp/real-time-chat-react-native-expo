import { ActivityIndicator, Text, View } from "react-native";
import { Provider, useSelector } from "react-redux";
import store from "../state/store";
import { Redirect, Slot, useSegments } from "expo-router";

const App = () => {
  const { value } = useSelector((state) => state.user);
  console.info(value);
  const segments = useSegments();
  console.log("segments", segments);
  return (
    <Provider store={store}>
      <View className="flex-1 justify-center items-center">
        {value.isAuthenticated && segments[0] == "app" ? (
          <Redirect href="(app)/home" />
        ) : (
          <Redirect href="/signin" />
        )}
        <ActivityIndicator size="large" color="gray" />
      </View>
    </Provider>
  );
};

export default App;
