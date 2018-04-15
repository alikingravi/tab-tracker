<template>
  <v-container grid-list-md text-xs-center>
    <v-layout row wrap>
      <v-flex xs6>
        <panel title="Song Details">
            <v-layout row wrap>
              <v-flex xs6 class="px-3">
                <!-- Title -->
                <v-text-field label="Title" v-model="song.title" required :rules="[required]"></v-text-field>

                <!-- Artist -->
                <v-text-field label="Artist" type="text" v-model="song.artist" required :rules="[required]"></v-text-field>

                <!-- Album -->
                <v-text-field label="Album" type="text" v-model="song.album" required :rules="[required]"></v-text-field>
              </v-flex>

              <v-flex xs6 class="px-3">
                <!-- Genre -->
                <v-text-field label="Genre" type="text" v-model="song.genre" required :rules="[required]"></v-text-field>

                <!-- Image Url -->
                <v-text-field label="Album Image Url" type="text" v-model="song.albumImageUrl" required :rules="[required]"></v-text-field>

                <!-- Youtube Id -->
                <v-text-field label="Youtube Id" type="text" v-model="song.youtubeId" required :rules="[required]"></v-text-field>
              </v-flex>
            </v-layout>
        </panel>
      </v-flex>

      <v-flex xs6>
        <panel title="Lyrics and Tab">
          <v-flex class="px-3">
            <!-- Lyrics -->
            <v-text-field label="Lyrics" multi-line v-model="song.lyrics" required :rules="[required]"></v-text-field>

            <!-- Tabs -->
            <v-text-field label="Tab" multi-line v-model="song.tab" required :rules="[required]"></v-text-field>
          </v-flex>
        </panel>
      </v-flex>
      <v-flex xs12 class="py-5">
        <div class="error" v-html="error"></div>
        <v-btn class="cyan" color="info" @click="createSong" block large>Add Song<v-icon right>playlist_add</v-icon></v-btn>
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
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      error: null,
      required: (value) => !!value || 'Required'
    }
  },
  methods: {
    async createSong (req, res) {
      this.error = null
      const areAllFieldsFilledIn = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        res.status(500).send({
          error: 'Error creating the song.'
        })
      }
    }
  }
}
</script>

<style>

</style>
