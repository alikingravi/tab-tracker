<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <panel :title="song.title + ' Tabs'" class="my-3 mx-3">
            <textarea id="tab-area" readonly v-model="song.tab"></textarea>
        </panel>
      </v-flex>

      <v-flex xs6>
        <panel title="Video" class="my-3 mx-3">
          <v-flex>
            <iframe width="560" height="315" :src="'https://www.youtube.com/embed/' + song.youtubeId" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
          </v-flex>
        </panel>

        <panel title="Lyrics" class="my-3 mx-3">
          <v-flex class="px-3">
            <textarea id="lyrics-area" readonly v-model="song.lyrics"></textarea>
          </v-flex>
        </panel>
      </v-flex>
      <v-flex xs12 class="py-5">
        <div class="error" v-html="error"></div>
        <v-btn class="cyan" color="info" to="/songs" large><v-icon left>arrow_back</v-icon>Back To Songs</v-btn>
        <v-btn class="cyan" color="info" :to="'/songs/' + song.id + '/edit'" large v-if="$store.state.isUserLoggedIn"><v-icon left>mode_edit</v-icon>Edit Song</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Panel from '@/components/global/Panel'
import SongsService from '@/services/SongsService'

export default {
  components: {
    Panel
  },
  data () {
    return {
      song: null
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  font-family: monospace;
  border: none;
  border-style: none;
  border-color: transparent;
  overflow: auto;
  padding: 20px;
}
#tab-area {
  height: 1000px;
}
#lyrics-area {
  height: 503px;
}
</style>
