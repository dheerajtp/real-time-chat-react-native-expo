import { StatusBar } from "expo-status-bar";
import {
  Image,
  Text,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
  View,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import images from "../assets/images";
import { Octicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useRef, useState } from "react";
import user from "../services/user";
import Loading from "../components/Loading";

const Signin = () => {
  const emailRef = useRef(""),
    passwordRef = useRef("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    // const result = await user.login(emailRef,passwordRef);
    if (!emailRef.current || !passwordRef.current) {
      ToastAndroid.show("Email and Password Required ..!!", ToastAndroid.SHORT);
    } else {
      setLoading(true);
      //login process
    }
  };

  return (
    <View className="flex-1">
      <StatusBar style="dark" />
      <View
        className="flex-1 gap-12"
        style={{ paddingTop: hp(8), paddingHorizontal: wp(5) }}
      >
        <View className="items-center">
          <Image
            source={images.signin}
            style={{ height: hp(25) }}
            resizeMode="contain"
          />
        </View>
        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold text-center tracking-wider text-neutral-800"
          >
            Sign In
          </Text>
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="mail" size={hp(2.7)} color="black" />
              <TextInput
                onChangeText={(value) => (emailRef.current = value)}
                style={{ fontSize: hp(2) }}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Email Address"
                placeholderTextColor={"gray"}
              />
            </View>
            <View className="gap-3">
              <View
                style={{ height: hp(7) }}
                className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
              >
                <Octicons name="lock" size={hp(2.7)} color="black" />
                <TextInput
                  style={{ fontSize: hp(2) }}
                  onChangeText={(value) => (passwordRef.current = value)}
                  className="flex-1 font-semibold text-neutral-700"
                  placeholder="Password"
                  placeholderTextColor={"gray"}
                  secureTextEntry
                />
              </View>
              <Text style={{ fontSize: hp(1.8) }} className="text-right">
                {" "}
                Forgot Password
              </Text>
            </View>
            {loading ? (
              <View className="flex-row justify-center">
                <Loading size={hp(8)} />
              </View>
            ) : (
              <TouchableOpacity
                style={{ height: hp(6.5) }}
                className="bg-indigo-500 rounded-xl justify-center items-center"
              >
                <Text
                  style={{ fontSize: hp(2.7) }}
                  className="text-white font-bold tracking-wider"
                  onPress={handleSignUp}
                >
                  {" "}
                  Signin
                </Text>
              </TouchableOpacity>
            )}

            <View className="flex-row justify-center">
              <Text style={{ fontSize: hp(1.8) }} className="font-semi-bold">
                Don't Have An Acount ?{" "}
              </Text>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semi-bold text-indigo-500"
                onPress={() => router.push("/signup")}
              >
                Signup
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signin;
