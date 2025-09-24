import { Link } from 'expo-router/drawer';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useEvent } from 'expo';
import { useVideoPlayer, VideoView } from 'expo-video';
import LinkButton from '../../components/LinkButton';



const videoSource =
  'https://rr2---sn-a5meknzs.googlevideo.com/videoplayback?expire=1758772988&ei=nGrUaLadGquYsfIPzI2U-Qc&ip=89.249.194.229&id=o-AEd3soyCgus5LvjukyEH8fy6bFWNKG9nxoRNJ4tV6DrN&itag=18&source=youtube&requiressl=yes&xpc=EgVo2aDSNQ%3D%3D&cps=89&bui=ATw7iSV5ly1wGhtM1DxzQ0rvO21yzIiUZezULmJuvMTCOlB5lC7hezP_gT_ZGuOv_iaT6At9AMJkZ_w4&spc=hcYD5bwtKkC4skpjAgrl&vprv=1&svpuc=1&mime=video%2Fmp4&ns=XeuAK_XZ02zdJG-wWwKYnoIQ&rqh=1&gir=yes&clen=46462416&ratebypass=yes&dur=3616.461&lmt=1725172952062958&fexp=24350590,24350737,24350827,24351316,24351318,24351528,24351692,24352001,24352156,24352805,24352807,24352916,24352918,24352960,24352981,24352983,24353009,24353011,24353044,24353046,24353056,24353058,24353100,24353102,24353151,24353168,24353170,51552689,51565115,51565681,51580968&c=TVHTML5_SIMPLY&sefc=1&txp=5319224&n=CGFcOFwi6Z4ByA&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cxpc%2Cbui%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cns%2Crqh%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AJfQdSswRAIgVOJl0_03Yy57C2FJNbBSVF0bmq5_27TmV8nx4dcB99kCIG5JscS0TpFxV_9sRBkzolWhhCmOURLZFHoifb0-pskX&redirect_counter=1&cm2rm=sn-a5mell7s&rrc=80&req_id=899a6ad276dda3ee&cms_redirect=yes&cmsv=e&met=1758751400,&mh=V9&mip=72.234.48.40&mm=34&mn=sn-a5meknzs&ms=ltu&mt=1758751018&mv=m&mvi=2&pl=19&rms=ltu,au&lsparams=cps,met,mh,mip,mm,mn,ms,mv,mvi,pl,rms&lsig=APaTxxMwRQIgcC4piXQx-ZV268-NYwaR46_HTpW2zoEKG8cY20CGUv8CIQCmAlmqB4ryZpuEEe-zrwp1l8ZaJo2BnQcFqApMD_q9NQ%3D%3D';

export default function VideoPage() {
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
