import { Link } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import LinkButton from '../../components/LinkButton';
import crackKid from '../../assets/CrackKid.mp4'


const videoSource = crackKid;

export default function AVideoPage() {
  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  return (
    <View style={styles.contentContainer}>
        <LinkButton page='/' title= "Go to Main Page"/>
      <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      <View style={styles.controlsContainer}>
        <Button
          title={isPlaying ? 'Pause' : 'Play'}
          onPress={() => {
            if (isPlaying) {
              player.pause();
            } else {
              player.play();
            }
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
  text: {
    flex: 0.03,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
