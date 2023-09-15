import React from "react";
import Animated, {
    Easing,
    ReduceMotion,
    useAnimatedStyle,
    useSharedValue,
    withRepeat,
    withSpring,
    withTiming,
} from "react-native-reanimated";
import { Button, Colors, View } from "react-native-ui-lib";

const Home = () => {
    const widthViewAnimated = useSharedValue(100);
    const offsetViewAmimated = useSharedValue(50);

    const animatedStyle = useAnimatedStyle(() => ({
        transform: [{ translateX: offsetViewAmimated.value }],
    }));

    const handlePressAdd = () => {
        widthViewAnimated.value = withSpring(widthViewAnimated.value + 10);
    };

    const handlePressSub = () => {
        widthViewAnimated.value = withSpring(widthViewAnimated.value - 10);
    };

    React.useEffect(() => {
        offsetViewAmimated.value = withRepeat(
            withTiming(-offsetViewAmimated.value, {
                duration: 1500,
                easing: Easing.bounce,
                reduceMotion: ReduceMotion.System,
            }),
            -1,
            true,
        );
    }, []);

    return (
        <View flex backgroundColor={Colors.grey70}>
            <View flex backgroundColor="white" center>
                <Animated.View
                    style={[
                        {
                            width: widthViewAnimated,
                            height: 100,
                            backgroundColor: "violet",
                        },
                        animatedStyle,
                    ]}
                />
            </View>
            <View row spread marginV-15 paddingH-15>
                <Button onPress={handlePressSub} label="Sub" />
                <Button onPress={handlePressAdd} label="Add" />
            </View>
        </View>
    );
};

export default Home;
