<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <div v-for="song in songs" :key="song.id">
          <v-layout>
            <v-flex xs12 sm6 offset-sm3>
              <v-card>
                <v-card-media :src="song.albumImageUrl" height="200px">
                </v-card-media>
                <v-card-title primary-title>
                  <div>
                    <h3 class="headline mb-0">{{song.title}}</h3>
                    <div class="title text-xs-left my-2">Artist: {{ song.artist }}</div>
                    <div class="title text-xs-left my-2">Album: {{ song.album }}</div>
                    <div class="title text-xs-left my-2">Genre: {{ song.genre }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="orange" @click="navigateTo({name: 'song', params: {songId: song.id}})">View Lyrics and Guitar Tab</v-btn>
                </v-card-actions>
              </v-card>
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
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
      songs: null
    }
  },
  async mounted () {
    this.songs = (await SongsService.index()).data
    console.log(this.songs)
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style scoped>
</style>
