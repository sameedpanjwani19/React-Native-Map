import { Text, View } from "react-native";

export default function Index() {


  // curl --request GET \
  // --url https://api.foursquare.com/v3/places/search \
  // --header 'Authorization: fsq3Ev6u2tm0afrjVgLszFoPMsmBVQMoMVnsWHVj1E0cDgo=' \
  // --header 'accept: application/json'


  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Edit app/index.tsx to edit this screen.</Text>
    </View>
  );
}
