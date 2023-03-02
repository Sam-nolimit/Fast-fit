import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Button,
} from "react-native";
import { rootStackParamList } from "../../App";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import {
  MaterialIcons,
  Fontisto,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  "Paywall"
>;
const PaywallScreen = () => {
  const navigation = useNavigation<NavigationProp>();

  return (
    <SafeAreaView className="flex-1 bg-[#1a2f44]">
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          onPress={navigation.goBack}
          className="items-end mr-2 top-3"
        >
          <MaterialIcons name="cancel" size={34} color="#E5962D" />
        </TouchableOpacity>
        <View className="items-center">
          <Text className="uppercase text-white font-bold text-xl">
            upgrade
          </Text>
          <Text className="text-white text-l">
            Upgrade to pro to Access this features
          </Text>
          <Ionicons name="star-sharp" size={160} color="#E5962D" />
          <View className="">
            <FontAwesome5 name="user-shield" size={50} color="green" />
          </View>
        </View>

        <View className="mt-10 items-center flex-row ml-5 mr-10">
          <Fontisto name="key" size={34} color="#E5962D" />
          <View className="ml-5">
            <Text className=" text-white font-bold text-lg">
              Access to all Pro Features
            </Text>
            <Text className="text-white text-justify mr-10">
              Upgrade to the premium version of the app and enjoy all the
              exclusive features available only to pro users
            </Text>
          </View>
        </View>

        <View className="mt-4 items-center flex-row ml-5 mr-10">
          <Ionicons name="md-person-add-outline" size={34} color="#E5962D" />
          <View className="ml-5">
            <Text className=" text-white font-bold text-lg">
              Helpline 24/7 to Personal Trainer
            </Text>
            <Text className="text-white font-m text-justify mr-10">
              Get unlimited access to our support team and get help any time you
              need it - day or night
            </Text>
          </View>
        </View>

        <View className="mt-4 items-center flex-row ml-5 mr-10">
          <Ionicons name="star-sharp" size={34} color="#E5962D" />
          {/* <View className="-mt-20"> */}
          <View className="ml-5">
            <Text className=" text-white font-bold text-lg">
              Unlock Unlimited Edition Content
            </Text>
            <Text className="text-white text-justify mr-10">
              Unlock exclusive content that you can't get anywhere else, like
              special exclusive workouts and meal
            </Text>
            {/* <TextInput className="h-6 bg-white rounded-xl mr-5"></TextInput> */}
            {/* <Button style={{color:"black"}}></Button> */}
          </View>
        </View>

        {/* Subscription */}
        <View>
          {/* Monthly Subscription */}
          <TouchableOpacity className="bg-[#E5962D] items-center justify-center h-16 mt-5 ml-5 mr-5 rounded-3xl">
            <Text className="text-white text-xl uppercase font-bold">
              Start a 1 X Week free trial
            </Text>
            <Text className="text-white text-l font-bold">$22/month</Text>
          </TouchableOpacity>

          {/* Annual Subscription */}
          <TouchableOpacity
            // onPress={navigation.goBack}
            className="items-center justify-center h-16 mt-5 ml-5 mr-5 rounded-3xl border-2 border-[#E5962D]"
          >
            <Text className="text-green-500 text-xl uppercase font-bold">
              Save 44% Annually
            </Text>
          </TouchableOpacity>

          {/* Restor purchase */}
          <View className="items-center">
            <TouchableOpacity>
              <Text className="capitalize text-[#E5962D] mt-2 text-lg">
                Restore purchases
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaywallScreen;
