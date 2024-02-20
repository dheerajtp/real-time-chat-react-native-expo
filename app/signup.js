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

const Signup = () => {
  const emailRef = useRef(""),
    passwordRef = useRef(""),
    usernameRef = useRef(""),
    profileRef = useRef("");
  const [loading, setLoading] = useState(false);

  const handleSignUp = async () => {
    // const result = await user.login(emailRef,passwordRef);
    if (
      !emailRef.current ||
      !passwordRef.current ||
      !usernameRef.current ||
      !profileRef.current
    ) {
      ToastAndroid.show("Please Enter Every Details..!!", ToastAndroid.SHORT);
      return;
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
        style={{ paddingTop: hp(7), paddingHorizontal: wp(5) }}
      >
        <View className="items-center">
          <Image
            source={images.signup}
            style={{ height: hp(30) }}
            resizeMode="contain"
          />
        </View>
        <View className="gap-10">
          <Text
            style={{ fontSize: hp(4) }}
            className="font-bold text-center tracking-wider text-neutral-800"
          >
            Sign Up
          </Text>
          <View className="gap-4">
            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="person" size={hp(2.7)} color="black" />
              <TextInput
                style={{ fontSize: hp(2) }}
                onChangeText={(value) => (usernameRef.current = value)}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Username"
                placeholderTextColor={"gray"}
                secureTextEntry
              />
            </View>
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

            <View
              style={{ height: hp(7) }}
              className="flex-row gap-4 px-4 bg-neutral-100 items-center rounded-xl"
            >
              <Octicons name="image" size={hp(2.7)} color="black" />
              <TextInput
                style={{ fontSize: hp(2) }}
                onChangeText={(value) => (profileRef.current = value)}
                className="flex-1 font-semibold text-neutral-700"
                placeholder="Profile Image"
                placeholderTextColor={"gray"}
              />
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
                Already Have An Acount ?{" "}
              </Text>
              <Text
                style={{ fontSize: hp(1.8) }}
                className="font-semi-bold text-indigo-500"
                onPress={() => router.push("/signin")}
              >
                Signin
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Signup;
