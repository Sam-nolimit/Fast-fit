import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack/lib/typescript/src/types";
import { rootStackParamList } from "../../App";

export type NavigationProp = NativeStackNavigationProp<
  rootStackParamList,
  "Home"
>;

type Props = {
  title: string;
  screen: any;
  color: string;
  requiresPro?: boolean;
  icon?: any;
  vertical?: boolean;
};

const ActionRoll = ({
  title,
  screen,
  color,
  requiresPro,
  icon,
  vertical,
}: Props) => {
  const navigation = useNavigation<NavigationProp>();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(screen)}
      className={`flex-1 flex-row  py-6 items-center justify-center rounded-2xl  ml-2 mr-2 ${
        vertical ? "flex-col" : "flex-row"
      }`}
      style={{ backgroundColor: color, marginBottom: 10 }}
    >
      <Ionicons name={icon} size={34} color="#ffffff" />
      <Text className="text-lg capitalize font-bold text-[#fff]">{title}</Text>
    </TouchableOpacity>
  );
};

export default ActionRoll;
