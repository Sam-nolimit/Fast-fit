import {
  Text,
  SafeAreaView,
  Image,
  TouchableOpacity,
  ScrollView,
  View,
} from "react-native";
// import "./nativewind-output";
import { Ionicons } from "@expo/vector-icons";
import ActionRoll from "../Components/ActionRoll";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { rootStackParamList } from "../../App";
import { useNavigation } from "@react-navigation/native";
// import { LinearGradient } from "expo-linear-gradient";

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  "Home"
>;

const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <SafeAreaView className="flex-1 bg-gry-600">
      {/* Pro/upgrade button */}
      <ScrollView>
        <TouchableOpacity
          onPress={() => navigation.navigate("Paywall")}
          className="absolute z-50 top-0 right-5 items-center"
        >
          <Ionicons name="person-circle" size={34} color="#E5962D" />
          <Text className=" font-bold pr-100 uppercase text-[#E5962D]">
            upgrade
          </Text>
        </TouchableOpacity>

        {/* image */}
        <Image
          source={{ uri: "https://i.imgur.com/e14NE49.png" }}
          className="w-full h-64"
        />
        <View className="flex-row ">
          {/* Action roll */}
          <ActionRoll
            title="track workout"
            screen="Demo"
            color="#E5962D"
            icon="md-fitness-sharp"
            vertical
          />
          {/* Action roll */}
          <ActionRoll
            title="Browse workout"
            screen="Demo"
            color="#1982c4"
            icon="library"
            vertical
          />
        </View>
        {/* Action roll */}
        <ActionRoll
          title="Connect with friends"
          screen="Demo"
          color="#f44174"
          icon="library"
          // vertical
        />
        {/* Action roll */}
        <ActionRoll
          title="Add an Exercise"
          screen="Demo"
          color="#8Ac926"
          icon="add-circle"
          requiresPro
          // icon="ios-lock-closed"
        />
        {/* Action roll */}
        <ActionRoll
          title="Add a routine"
          screen="Demo"
          color="#C03221"
          icon="md-time"
          requiresPro
        />
        {/* Action roll */}
        <ActionRoll
          title="Join a challenge"
          screen="Demo"
          color="#2e3c8a"
          icon="trophy"
          requiresPro
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
