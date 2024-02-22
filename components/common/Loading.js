import { View } from "react-native";
import LottieView from "lottie-react-native";

const Loading = ({ size }) => {
  return (
    <View style={{ height: size, aspectRatio: 1 }}>
      <LottieView
        source={require("../../assets/loading.json")}
        style={{ width: "100%", height: "100%" }}
        autoPlay
        loop
      />
    </View>
  );
};

export default Loading;
