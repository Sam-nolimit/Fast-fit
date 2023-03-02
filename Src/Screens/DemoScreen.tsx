import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, Text, SafeAreaView, TouchableOpacity } from "react-native";
import { rootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  "Home"
>;

const DemoScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="bg-[#E5962D] flex-1">
      <TouchableOpacity
        className="flex-row items-center justify-start "
        onPress={navigation.goBack}
      >
        <Ionicons name="md-arrow-back-sharp" size={34} color="white" />
        {/* <Text className="text-white font-bold"> go back</Text> */}
      </TouchableOpacity>
      <View className="flex-1 items-center">
        <Text className="text-white text-2xl font-bold">Hooray!</Text>
        <Text className="text-white text-2xl font-bold">
          You have access to this feature
        </Text>
        <Ionicons name="build-outline" size={240} color="white" />
        <View className="-mt-20 -ml-20">
          <Ionicons name="ios-checkmark-circle" size={50} color="green" />
        </View>
        <Text className="text-white font-bold text-justify mt-5 ml-5 mr-5 flex-1  ">
          Tracking your body measurements and fitness progress are crucial to
          get in shape. The weighing scale used to measure your body weight is
          the most accessible, but the biggest problem is it shows you only your
          weight. There is no way to differentiate whether the weight gain or
          loss is fat or water or muscle.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default DemoScreen;
